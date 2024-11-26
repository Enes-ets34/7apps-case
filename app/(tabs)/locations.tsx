import {useEffect, useState} from 'react';
import {useLocationInfiniteQuery} from '../queries/location/location.query';
import LocationsView from '../views/locations/LocationsView';
import {Location} from '../queries/location/location.types';
import {useLoadingStore} from '../store/loading/loadingStore';

export default function LocationsScreen(): JSX.Element {
  const [inputKey, setInputKey] = useState<string>('');
  const {setLoading} = useLoadingStore();
  const {data, isLoading, isRefetching, refetch, fetchNextPage, hasNextPage} =
    useLocationInfiniteQuery(inputKey);

  useEffect(() => {
    if (inputKey.length > 3 || inputKey === '') {
      refetch();
    }
  }, [inputKey, refetch]);

  const locationsData =
    data?.pages?.flatMap(page =>
      page.results.map((item: Location) => ({
        id: item?.id,
        title: item?.name,
        description: item?.type,
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
    <LocationsView
      inputKey={inputKey}
      setInputKey={setInputKey}
      locationsData={locationsData}
      onEndReached={handleLoadMore}
      hasNextPage={hasNextPage}
    />
  );
}
