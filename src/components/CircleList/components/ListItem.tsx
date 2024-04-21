import { FC } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

import { theme } from '@theme';

type TListItemProps = {
  containerStyle: ViewStyle | ViewStyle[];
  title: string;
  description: string;
};

export const ListItem: FC<TListItemProps> = ({ containerStyle, title, description }) => {
  return (
    <View key={title} style={containerStyle}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: theme.scale(16),
    fontWeight: '700',
  },
  description: {
    fontSize: theme.scale(11),
    fontWeight: '400',
  },
});
