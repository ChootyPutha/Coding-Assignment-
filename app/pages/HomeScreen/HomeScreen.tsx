import React from "react";
import { View, StyleSheet, StatusBar, Text, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useAppContext } from "../../context/AppContext";

const isDarkMode = false;

const backgroundStyle = {
    backgroundColor: isDarkMode ? '#FFF' : '#000',
};

const HomeScreen = () => {

    const { userInfo, setUserInfo } = useAppContext();

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
                            <View style={styles.singleCardHolder}>
                                <View style={styles.singleCardWrapper}>
                                    <View style={styles.singleCardImageWrapper}>
                                        {/* image */}
                                        <View style={styles.singleCardImageContainer}>
                                            <Image source={require('../../../assets/icon.png')} style={styles.singleCardImage} />
                                        </View>
                                    </View>
                                    <View style={styles.singleCardInfoWrapper}>
                                        {/* info */}
                                        <View style={styles.singleCardInfoContent}>
                                            <View style={styles.singleCardInfoSubTextContainer}>
                                                <View>
                                                    <Text>The Economic Times</Text>
                                                </View>
                                                <View>
                                                    <Text>12 June 2021</Text>
                                                </View>
                                            </View>
                                            <View style={styles.singleCardInfoMainTextContainer}>
                                                <View>
                                                    <Text>Markets FTSE slides almost 2pc as sterling sinks to $1.38 </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
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
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
    },
    titelHodler: {
        width: '100%',
        //height : '15%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
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
        color: '#000',
        fontFamily: 'Roboto',
    },
    fetchDataHolder: {
        width: '100%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    singleCardHolder: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
    },
    singleCardWrapper: {
        width: '90%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple',
    },
    singleCardImageWrapper: {
        width: '33.3%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    singleCardImageContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding : 5,
    },
    singleCardImage: {
        width: '100%',
        height: '100%',
        resizeMode :'cover',
    },
    singleCardInfoWrapper: {
        width: '66.6%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
    },
    singleCardInfoContent: {
        width: '96%',
        height: '96%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray'
    }
});

export default HomeScreen;