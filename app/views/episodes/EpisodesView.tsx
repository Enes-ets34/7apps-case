import {View} from 'react-native';

import {EpisodesProps} from './episodes.types';
import {useEpisodeStore} from '@/app/store/episode/episodeStore';
import {useCallback} from 'react';
import {SelectedItem} from '@/app/store/types';
import MultiSelectDropdown from '@/components/multi-select-dropdown/MultiSelectDropdown';
import {episodesStyles} from './episodes.styles';

export default function EpisodesView({
  episodesData,
  inputKey,
  setInputKey,
  onEndReached,
  hasNextPage,
}: EpisodesProps): JSX.Element {
  const {selectedEpisodeList, addEpisode, removeEpisode} = useEpisodeStore();

  const handleSelectEpisode = useCallback(
    (location: SelectedItem) => {
      addEpisode(location);
    },
    [addEpisode],
  );

  const handleDeselectEpisode = useCallback(
    (location: SelectedItem) => {
      removeEpisode(location.id);
    },
    [removeEpisode],
  );
  return (
    <View className={episodesStyles.container}>
      <MultiSelectDropdown
        data={episodesData as SelectedItem[]}
        selectedItems={selectedEpisodeList}
        inputValue={inputKey as string}
        placeholder="Search for episodes..."
        hasNextPage={hasNextPage as boolean}
        onSelectItem={handleSelectEpisode}
        setInputValue={setInputKey}
        onDeselectItem={handleDeselectEpisode}
        onEndReached={onEndReached}
      />
    </View>
  );
}
