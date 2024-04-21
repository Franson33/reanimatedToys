import { StyleSheet, Text, View } from 'react-native';

import { theme } from '@theme';

const listConfig = [
  { title: 'Title 1', description: 'Description 1' },
  { title: 'Title 2', description: 'Description 2' },
  { title: 'Title 3', description: 'Description 3' },
  { title: 'Title 4', description: 'Description 4' },
  { title: 'Title 5', description: 'Description 5' },
];

export const CircleList = () => {
  return (
    <View style={styles.container}>
      {listConfig.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: theme.scale(300),
    height: theme.scale(300),
    backgroundColor: '#ffd1dc',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.scale(80),
    height: theme.scale(80),
    margin: theme.smallest,
    borderRadius: theme.scale(35),
    backgroundColor: '#fc6c85',
  },
  title: {
    fontSize: theme.scale(16),
    fontWeight: '700',
  },
  description: {
    fontSize: theme.scale(12),
    fontWeight: '400',
  },
});
