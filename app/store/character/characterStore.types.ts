import { SelectedItem } from "../types";

export interface CharacterStore {
    selectedCharacterList: SelectedItem[];
    addCharacter: (character: SelectedItem) => void;
    removeCharacter: (characterId: number) => void;
  }