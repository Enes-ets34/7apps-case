import {create} from 'zustand';
import {LocationStore} from './locationStore.types';

export const useLocationStore = create<LocationStore>(set => ({
  selectedLocationList: [],

  addLocation: (location):void =>
    set(state => ({
      selectedLocationList: [...state.selectedLocationList, location],
    })),

  removeLocation: (locationId):void =>
    set(state => ({
      selectedLocationList: state.selectedLocationList.filter(
        location => location.id !== locationId,
      ),
    })),
}));
