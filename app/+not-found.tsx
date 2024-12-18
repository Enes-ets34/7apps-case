import {Link, Stack} from 'expo-router';
import {StyleSheet, Text, View} from 'react-native';

const PRIMARY_COLOR = '#2e78b7';

export default function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Stack.Screen options={{title: 'Oops!'}} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesnt exist.</Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: PRIMARY_COLOR,
  },
});
