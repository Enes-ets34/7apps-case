import {useQuery, UseQueryOptions, UseQueryResult} from '@tanstack/react-query';
import httpRequest from '@/app/api/httpRequest';
import {CharacterResponse} from './chracter.types';

export const useCharacterQuery = (): UseQueryResult => {
  return useQuery<CharacterResponse, Error>({
    queryKey: ['character'],
    queryFn: async () => {
      const response = await httpRequest.get<CharacterResponse>('/character');
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
  } as UseQueryOptions<CharacterResponse, Error>);
};
