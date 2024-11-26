import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from './loading.styles';
import { LoadingProps } from './loading.types';

export default function Loading({ isLoading }: LoadingProps): JSX.Element | null {
  if (!isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/animations/loading.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
}
