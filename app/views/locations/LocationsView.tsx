import {Text, View} from 'react-native';

import {LocationsProps} from './locations.types';
import {locationsStyles} from './locations.styles';

export default function LocationsView({
  name = '',
}: LocationsProps): JSX.Element {
  return (
    <View className={locationsStyles.container}>
      <Text>{name}</Text>
    </View>
  );
}
