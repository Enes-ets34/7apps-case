import { SelectedItem } from "../types";

export interface LocationStore {
  selectedLocationList: SelectedItem[];
  addLocation: (location: SelectedItem) => void;
  removeLocation: (locationId: number) => void;
}