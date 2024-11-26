import {create} from 'zustand';
import {CharacterStore} from './characterStore.types';

export const useCharacterStore = create<CharacterStore>(set => ({
  selectedCharacterList: [],

  addCharacter: (character): void =>
    set(state => ({
      selectedCharacterList: [...state.selectedCharacterList, character],
    })),

  removeCharacter: (characterId): void =>
    set(state => ({
      selectedCharacterList: state.selectedCharacterList.filter(
        character => character.id !== characterId,
      ),
    })),
}));
