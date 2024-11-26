export interface LocationsProps {
  locationsData: LocationData[];
  inputKey?: string;
  setInputKey: (key: string) => void;
  onEndReached: () => void;
  hasNextPage?:boolean
}
export interface LocationData {
  id?: number;
  title?: string;
  description?: string;
}
