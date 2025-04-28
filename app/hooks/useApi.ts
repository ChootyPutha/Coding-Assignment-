import { useState } from 'react';
import axiosInstance from '../utills/axiosInstance';
import UseApiOptions from '../types/UseApiOptionsTypes';


/**
 * Custom hook for making API requests using Axios.
 * 
 * @template T - The expected data type of the response.
 * 
 * @returns An object containing:
 * - `request`: A function to make the API request.
 * - `loading`: A boolean indicating if the request is in progress.
 * - `error`: A string with the error message, if any.
 * - `responseCode`: The HTTP status code from the response.
 */

export function useApi<T = any>() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [responseCode,setResponseCode] = useState<number | null>(null);


    const request = async ({ url, method = 'GET', data, params }: UseApiOptions<T>): Promise<T | null> => {
        setLoading(true);
        setError(null);
        setResponseCode(200);
        try {
          const response = await axiosInstance.request<T>({
            url,
            method,
            data,
            params,
          });
          return response.data;
        } catch (err: any) {
          console.error('API Error:', err);
          setResponseCode(err.response.status);
          if (err.response) {
            setError(err.response.data?.message || 'Server Error');

          } else if (err.request) {
            setError('No response from server');
          } else {
            setError('Unexpected error');
          }
    
          return null;
        } finally {
          setLoading(false);
        }
      };
    
      return { request, loading, error, responseCode };

}