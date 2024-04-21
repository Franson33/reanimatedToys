import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CircleList } from '@components';
import { HomeStackParams } from '@navigator';
import { theme } from '@theme';

type IMainScreenProps = NativeStackScreenProps<HomeStackParams, 'Home'>;

export const MainScreen: FC<IMainScreenProps> = ({ route, navigation }) => {
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
