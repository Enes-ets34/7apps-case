import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useLocationStore} from '@/app/store/location/locationStore';
import {SelectedItem} from '@/app/store/types';
import MultiselectDropdown from '@/components/multi-select-dropdown/MultiSelectDropdown';
import {LocationsProps} from './locations.types';
import { locationsStyles } from './locations.styles';

const LocationsView = ({
  locationsData,
  inputKey,
  setInputKey,
  onEndReached,
  hasNextPage,
}: LocationsProps):JSX.Element => {
  const {selectedLocationList, addLocation, removeLocation} =
    useLocationStore();

  const handleSelectLocation = useCallback(
    (location: SelectedItem) => {
      addLocation(location);
    },
    [addLocation],
  );

  const handleDeselectLocation = useCallback(
    (location: SelectedItem) => {
      removeLocation(location.id);
    },
    [removeLocation],
  );

  return (
    <View className={locationsStyles.container}>
      <MultiselectDropdown
        data={locationsData as SelectedItem[]}
        selectedItems={selectedLocationList}
        inputValue={inputKey as string}
        placeholder="Search for locations..."
        hasNextPage={hasNextPage as boolean}
        onSelectItem={handleSelectLocation}
        setInputValue={setInputKey}
        onDeselectItem={handleDeselectLocation}
        onEndReached={onEndReached}
      />
    </View>
  );
};

export default LocationsView;
