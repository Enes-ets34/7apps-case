import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link, Tabs} from 'expo-router';
import {Pressable, StyleSheet} from 'react-native';

import Colors from '@/constants/Colors';
import {useColorScheme} from '@/components/useColorScheme';
import {useClientOnlyValue} from '@/components/useClientOnlyValue';

// Icon Component
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}): JSX.Element {
  return <FontAwesome size={28} style={styles.tabBarIcon} {...props} />;
}

// Main Component
export default function TabLayout(): JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({color}: {color: string}) => (
            <TabBarIcon name="code" color={color} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable style={styles.headerRightPressable}>
                {({pressed}: {pressed: boolean}) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    style={
                      pressed ? styles.pressedOpacity : styles.normalOpacity
                    }
                    color={Colors[colorScheme ?? 'light'].text}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({color}: {color: string}) => (
            <TabBarIcon name="code" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
  headerRightPressable: {
    marginRight: 15,
  },
  pressedOpacity: {
    opacity: 0.5,
  },
  normalOpacity: {
    opacity: 1,
  },
});
