interface UseApiOptions<T> {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: any;
    params?: any;
  }
  export default UseApiOptions;