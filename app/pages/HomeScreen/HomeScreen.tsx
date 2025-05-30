import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, StatusBar, Text, Image, Alert, TouchableOpacity, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useAppContext } from "../../context/AppContext";
import { useApi } from "../../hooks/useApi";
import { NewsArticle } from "../../types/NewsArticleTypes";
import * as Linking from 'expo-linking';
import { useNetInfo } from "@react-native-community/netinfo";
import { useFormatUnixTimestamp } from "../../hooks/useFormatUnixTimestamp";

const isDarkMode = true;

const backgroundStyle = {
    backgroundColor: isDarkMode ? '#FFF' : '#000',
};

const HomeScreen = () => {

    const { userInfo, setUserInfo } = useAppContext();
    const { formatUnixTimestamp } = useFormatUnixTimestamp();

    const { request, loading, error, responseCode } = useApi<NewsArticle[]>();
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [refreshing, setRefreshing] = useState(false);
    const [canFetch, setCanFetch] = useState(true);
    const netInfo = useNetInfo();


    const fetchNews = useCallback(async () => {
        if (!canFetch) return;
        setRefreshing(true);
        try {
            const data = await request({ url: '/news?category=general' });
            if (data) {
                setNews(data);
            } else {
                throw new Error('No data received from server');
            }
        } catch (err: any) {
            console.error('Error fetching news:', err.message, responseCode);
            if (responseCode === 429) {
                Alert.alert(
                    'Limit Reached',
                    'Your free limit has been reached. Please get a premium subscription.',
                    [{ text: 'OK' }]
                );
                setCanFetch(false); //  Stop further API calls
            } else {
                if(responseCode != null){
                    Alert.alert(
                        'Error',
                        'Failed to load news. Please try again later.',
                        [{ text: 'OK' }]
                    );
                }
                
            }
        } finally {
            setRefreshing(false);
        }
    }, [request, canFetch]);

    useEffect(() => {
        if (netInfo.isConnected) {
            fetchNews();
        } else {
            Alert.alert('No Internet', 'Please check your internet connection.');
        }
    }, [fetchNews, netInfo.isConnected]);

    const onRefresh = async () => {
        setRefreshing(true);
        await fetchNews();
        setRefreshing(false);
    };

    const renderItem = useCallback(({ item }: { item: NewsArticle }) => (
        <TouchableOpacity style={styles.singleCardTouchArea} onPress={() => Linking.openURL(item.url)} activeOpacity={0.7}>
            <View style={styles.singleCardHolder}>
                <View style={styles.singleCardWrapper}>
                    <View style={styles.singleCardImageWrapper}>
                        {/* image */}
                        <View style={styles.singleCardImageContainer}>
                            <Image source={{ uri: item.image }} style={styles.singleCardImage} />
                        </View>
                    </View>
                    <View style={styles.singleCardInfoWrapper}>
                        {/* info */}
                        <View style={styles.singleCardInfoContent}>
                            <View style={styles.singleCardInfoSubTextContainer}>
                                <View>
                                    <Text style={styles.catogeryText}>{item.category}</Text>
                                </View>
                                <View>
                                    <Text style={styles.catogeryText}>{formatUnixTimestamp(item.datetime)}</Text>
                                </View>
                            </View>
                            <View style={styles.singleCardInfoMainTextContainer}>
                                <View>
                                    <Text style={styles.headdingText}>{item.headline.substring(0, 50)+'...'}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    ), []);


    const keyExtractor = useCallback((item: NewsArticle) => item.id.toString(), []);

    if (loading && news.length === 0) {
        return (
            <View style={styles.center}>
                <ActivityIndicator color={'#fff'} size="large" />
            </View>
        );
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        backgroundColor={backgroundStyle.backgroundColor}
                    />
                    <View style={styles.mainContainer}>
                        <View style={styles.titelHodler}>
                            <View style={styles.titelContainer}>
                                <Text style={styles.titelText}>{`Hey, ${userInfo?.firstName} ${userInfo?.lastName}`}</Text>
                            </View>
                        </View>

                        <View style={styles.fetchDataHolder}>

                            {
                                ((error && news.length === 0)) ?
                                    <View style={styles.center}>
                                        <Text style={styles.errorText}>Something went wrong. Please try again later.</Text>
                                    </View>
                                :
                                null
                            }

                            <FlatList
                                style={{ flex: 1, width: '100%', height: '100%', }}
                                data={news}
                                keyExtractor={keyExtractor}
                                renderItem={renderItem}
                                contentContainerStyle={styles.list}
                                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                                initialNumToRender={10}
                                maxToRenderPerBatch={20}
                                windowSize={5}
                                //removeClippedSubviews={true}
                                ListEmptyComponent={
                                    <View style={styles.center}>
                                        <Text style={styles.errorText}>No news available.</Text>
                                    </View>
                                }
                            />
                        </View>

                    </View>

                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05021B'
    },
    mainContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    titelHodler: {
        width: '100%',
        //height : '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titelContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 20,
    },
    titelText: {
        fontSize: 30,
        fontWeight: '700',
        color: '#fff',
        fontFamily: 'Roboto',
    },
    fetchDataHolder: {
        width: '100%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    singleCardTouchArea: {
        width: '100%',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    singleCardHolder: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    singleCardWrapper: {
        width: '90%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    singleCardImageWrapper: {
        width: '33.3%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    singleCardImageContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    singleCardImage: {
        width: '100%',
        height: '100%',
        resizeMode:'contain',
    },
    singleCardInfoWrapper: {
        width: '66.6%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    singleCardInfoContent: {
        width: '96%',
        height: '96%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    singleCardInfoSubTextContainer: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'Violet'
    },
    singleCardInfoMainTextContainer: {
        width: '100%',
        height: '85%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    center: {
        //flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        marginTop : 10,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        fontFamily :'Roboto',
        fontWeight :'600'
    },
    list: {
        paddingVertical: 10,
    },
    catogeryText : {
        fontSize:12,
        minWidth : 70,
        color : '#fff',
        fontFamily : 'Roboto',
        fontWeight : '400',
        textTransform: 'uppercase'
    },
    headdingText : {
        fontSize:20,
        color : '#fff',
        fontFamily : 'Roboto',
        fontWeight : '500',
    }
});

export default HomeScreen;