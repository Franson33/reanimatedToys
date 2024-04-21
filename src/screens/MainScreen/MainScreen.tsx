import React, { FC } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HomeStackParams, homeStackScreens } from '@navigator';
import { theme } from '@theme';

type TMainScreenProps = NativeStackScreenProps<HomeStackParams, typeof homeStackScreens.HOME>;

const toysConfig = [
  { title: 'Circle List ', description: `Try to spin it, it's fun`, navigateTo: homeStackScreens.CIRCLE },
];

export const MainScreen: FC<TMainScreenProps> = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={toysConfig}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.navigateTo)}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
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
  contentContainer: {
    flex: 1,
    width: theme.scale(300),
  },
  item: {
    padding: theme.small,
    backgroundColor: theme.colors.PINK_LIGHT,
    borderRadius: theme.scale(10),
  },
  title: {
    fontSize: theme.scale(18),
    fontWeight: '700',
    color: theme.colors.PURPLE,
  },
  description: {
    fontSize: theme.scale(16),
    fontWeight: '400',
    color: theme.colors.PURPLE,
  },
});
