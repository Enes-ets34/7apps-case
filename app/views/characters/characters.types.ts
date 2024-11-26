export interface CharactersProps {
  charactersData: CharacterData[];
  inputKey?: string;
  setInputKey: (key: string) => void;
  onEndReached: () => void;
  hasNextPage?: boolean;
}
export interface CharacterData {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
}
