import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useCharacterStore} from '@/app/store/character/characterStore';
import {SelectedItem} from '@/app/store/types';
import MultiselectDropdown from '@/components/multi-select-dropdown/MultiSelectDropdown';
import {CharactersProps} from './characters.types';
import {charactersStyles} from './characters.styles';

const CharactersView = ({
  charactersData,
  inputKey,
  setInputKey,
  onEndReached,
  hasNextPage,
}: CharactersProps): JSX.Element => {
  const {selectedCharacterList, addCharacter, removeCharacter} =
    useCharacterStore();

  const handleSelectCharacter = useCallback(
    (character: SelectedItem) => {
      addCharacter(character);
    },
    [addCharacter],
  );

  const handleDeselectCharacter = useCallback(
    (character: SelectedItem) => {
      removeCharacter(character.id);
    },
    [removeCharacter],
  );

  return (
    <View className={charactersStyles.container}>
      <MultiselectDropdown
        data={charactersData as SelectedItem[]}
        selectedItems={selectedCharacterList}
        inputValue={inputKey as string}
        placeholder="Search for characters..."
        hasNextPage={hasNextPage as boolean}
        onSelectItem={handleSelectCharacter}
        setInputValue={setInputKey}
        onDeselectItem={handleDeselectCharacter}
        onEndReached={onEndReached}
      />
    </View>
  );
};

export default CharactersView;
