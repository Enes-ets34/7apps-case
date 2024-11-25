import {Text, View} from 'react-native';

import {EpisodesProps} from './episodes.types';
import {episodesStyles} from './episodes.styles';

export default function EpisodesView({name = ''}: EpisodesProps): JSX.Element {
  return (
    <View className={episodesStyles.container}>
      <Text>{name}</Text>
    </View>
  );
}
