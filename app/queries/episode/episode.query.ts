import {useInfiniteQuery} from '@tanstack/react-query';
import httpRequest from '@/app/api/httpRequest';
import {EpisodeResponse} from './episode.types';

export const useEpisodeInfiniteQuery = (searchKey: string) => {
  return useInfiniteQuery<EpisodeResponse, Error>({
    queryKey: ['episode', searchKey],
    queryFn: async ({pageParam = 1}) => {
      const response = await httpRequest.get<EpisodeResponse>(
        `/episode?page=${pageParam}&name=${searchKey}`,
      );
      return response.data;
    },
    getNextPageParam: lastPage => {
      const nextUrl = lastPage.info.next;
      return nextUrl ? new URL(nextUrl).searchParams.get('page') : undefined;
    },
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
