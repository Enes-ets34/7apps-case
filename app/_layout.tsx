import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';
import '../global.css';
import {verifyInstallation} from 'nativewind';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import Loading from '@/components/loading/Loading';
import {useLoadingStore} from './store/loading/loadingStore';
import Toast from '@/components/toast/Toast';
export {ErrorBoundary} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout(): JSX.Element {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) {
      console.error('Font yüklenirken hata oluştu:', error);
      SplashScreen.hideAsync();
    }
  }, [error]);

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => {
        SplashScreen.hideAsync();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  if (!loaded) {
    return (
      <View style={styles.container}>
        <LottieView
          source={require('../assets/animations/loading.json')}
          autoPlay
          loop
          style={styles.lottie}
        />
      </View>
    );
  }

  return <RootLayoutNav />;
}

function RootLayoutNav(): JSX.Element {
  const queryClient = new QueryClient();
  const {isLoading} = useLoadingStore();
  verifyInstallation();

  return (
    <QueryClientProvider client={queryClient}>
      <Toast />
      <Loading isLoading={isLoading} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="modal" options={{presentation: 'modal'}} />
      </Stack>
    </QueryClientProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 300,
    height: 300,
  },
});
