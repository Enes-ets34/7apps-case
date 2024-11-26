import {useEffect, useState} from 'react';
import {useCharacterInfiniteQuery} from '../queries/character/character.query';
import {useLoadingStore} from '../store/loading/loadingStore';
import CharactersView from '../views/characters/CharactersView';
import {Character} from '../queries/character/chracter.types';
import {View} from 'react-native';

export default function CharactersScreen(): JSX.Element {
  const [inputKey, setInputKey] = useState<string>('');
  const {data, isLoading, isRefetching, refetch, fetchNextPage, hasNextPage} =
    useCharacterInfiniteQuery(inputKey);

  useEffect(() => {
    if (inputKey.length > 3 || inputKey === '') {
      refetch();
    }
  }, [inputKey, refetch]);

  const charactersData =
    data?.pages?.flatMap(page =>
      page.results.map((item: Character) => ({
        id: item?.id,
        title: item?.name,
        description: `${item?.episode?.length} episodes`,
        image: item?.image ?? '',
      })),
    ) ?? [];

  const {setLoading} = useLoadingStore();

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
    <View
      className="">
      <CharactersView
        inputKey={inputKey}
        setInputKey={setInputKey}
        charactersData={charactersData}
        onEndReached={handleLoadMore}
        hasNextPage={hasNextPage}
      />
    </View>
  );
}
