import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CircleList } from '@components';
import { HomeStackParams, homeStackScreens } from '@navigator';
import { theme } from '@theme';

type TCircleListScreenProps = NativeStackScreenProps<HomeStackParams, typeof homeStackScreens.CIRCLE>;

export const CircleListScreen: FC<TCircleListScreenProps> = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <CircleList />
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
});
