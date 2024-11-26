import {useEffect, useState} from 'react';
import {useEpisodeInfiniteQuery} from '../queries/episode/episode.query';
import EpisodesView from '../views/episodes/EpisodesView';
import {Episode} from '../queries/episode/episode.types';
import {useLoadingStore} from '../store/loading/loadingStore';

export default function EpisodesScreen(): JSX.Element {
  const [inputKey, setInputKey] = useState<string>('');
  const {setLoading} = useLoadingStore();
  const {data, isLoading, isRefetching, refetch, fetchNextPage, hasNextPage} =
  useEpisodeInfiniteQuery(inputKey);

  useEffect(() => {
    if (inputKey.length > 3 || inputKey === '') {
      refetch();
    }
  }, [inputKey, refetch]);

  const episodesData =
    data?.pages?.flatMap(page =>
      page.results.map((item: Episode) => ({
        id: item?.id,
        title: item?.name,
        description: item?.air_date,
      })),
    ) ?? [];

  useEffect(() => {
    if (isLoading || isRefetching) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isLoading, isRefetching]);

  const handleLoadMore = (): void => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  return (
    <EpisodesView
      inputKey={inputKey}
      setInputKey={setInputKey}
      episodesData={episodesData}
      onEndReached={handleLoadMore}
      hasNextPage={hasNextPage}
    />
  );
}
