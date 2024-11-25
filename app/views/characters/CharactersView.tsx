import {Text, View} from 'react-native';
import {CharactersProps} from './characters.types';
import {charactersStyles} from './characters.styles';

export default function CharactersView({
  name = '',
}: CharactersProps): JSX.Element {
  return (
    <View className={charactersStyles.container}>
      <Text className="text-2xl">{name}</Text>
      <View className="bg-primary border-primary p-5 border rounded-borderRadiusXL">
        <Text className="text-4xl text-indigo">First Container</Text>
      </View>
      <View className="bg-secondary border border-secondary p-5 rounded-xl">
        <Text className="text-4xl text-text">Second Container</Text>
      </View>
      <View className="bg-accent border border-accent p-5 rounded-xl">
        <Text className="text-4xl text-indigo">Third Container</Text>
      </View>
    </View>
  );
}
