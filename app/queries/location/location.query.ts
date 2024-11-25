import {useQuery, UseQueryOptions, UseQueryResult} from '@tanstack/react-query';
import httpRequest from '@/app/api/httpRequest';
import {LocationResponse} from './location.types';

export const useLocationQuery = (): UseQueryResult => {
  return useQuery<LocationResponse, Error>({
    queryKey: ['location'],
    queryFn: async () => {
      const response = await httpRequest.get<LocationResponse>('/location');
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchOnReconnect: false,
    onError: (error: string) => {
      console.error('Query Error:', error);
    },
  } as UseQueryOptions<LocationResponse, Error>);
};
