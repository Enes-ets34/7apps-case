import { useInfiniteQuery } from '@tanstack/react-query';
import httpRequest from '@/app/api/httpRequest';
import { CharacterResponse } from './chracter.types';

export const useCharacterInfiniteQuery = (searchKey: string) => {
  return useInfiniteQuery<CharacterResponse, Error>({
    queryKey: ['character', searchKey],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await httpRequest.get<CharacterResponse>(
        `/character?page=${pageParam}&name=${searchKey}`
      );
      return response.data;
    },
    getNextPageParam: (lastPage) => {
      const nextUrl = lastPage.info.next;
      return nextUrl ? new URL(nextUrl).searchParams.get('page') : undefined;
    },
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
