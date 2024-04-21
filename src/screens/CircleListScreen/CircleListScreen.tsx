import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Animated from 'react-native-reanimated';

import { CircleList } from '@components';
import { HomeStackParams, homeStackScreens } from '@navigator';
import { theme } from '@theme';

type TCircleListScreenProps = NativeStackScreenProps<HomeStackParams, typeof homeStackScreens.CIRCLE>;

export const CircleListScreen: FC<TCircleListScreenProps> = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Animated.Text style={styles.title} sharedTransitionTag="Title">
        Circle List{' '}
      </Animated.Text>
      <CircleList />
      <Animated.Text style={styles.description} sharedTransitionTag="Description">
        Try to spin it, it's fun
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: theme.small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    top: theme.scale(100),
    fontSize: theme.scale(30),
  },
  description: {
    position: 'absolute',
    bottom: theme.scale(100),
    fontSize: theme.scale(20),
  },
});
