import {useQuery, UseQueryOptions, UseQueryResult} from '@tanstack/react-query';
import httpRequest from '@/app/api/httpRequest';
import {EpisodeResponse} from './episode.types';

export const useEpisodeQuery = (): UseQueryResult => {
  return useQuery<EpisodeResponse, Error>({
    queryKey: ['episode'],
    queryFn: async () => {
      const response = await httpRequest.get<EpisodeResponse>('/episode');
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
  } as UseQueryOptions<EpisodeResponse, Error>);
};
