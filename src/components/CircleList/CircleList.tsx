import { StyleSheet, Text, View } from 'react-native';

import { ListItem } from '@components';
import { theme } from '@theme';

const listConfig = [
  { title: 'Title 1', description: 'Description 1' },
  { title: 'Title 2', description: 'Description 2' },
  { title: 'Title 3', description: 'Description 3' },
  { title: 'Title 4', description: 'Description 4' },
  { title: 'Title 5', description: 'Description 5' },
  { title: 'Title 6', description: 'Description 6' },
];

const RADIUS = theme.scale(110);
const WIDTH = RADIUS * 2;
const ANGLE_STEP = 360 / (listConfig.length - 1);
const ITEM_SIZE = theme.scale(80);

export const CircleList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {listConfig.map(({ title, description }, index) => {
          if (index === 0) {
            return (
              <ListItem containerStyle={[styles.centerItem, styles.item]} title={title} description={description} />
            );
          } else {
            const angle = (ANGLE_STEP * (index - 1) * Math.PI) / 180;
            const x = RADIUS * Math.cos(angle) + RADIUS - ITEM_SIZE / 2;
            const y = RADIUS * Math.sin(angle) + RADIUS - ITEM_SIZE / 2;
            const itemPosition = { top: y, left: x };
            return <ListItem containerStyle={[styles.item, itemPosition]} title={title} description={description} />;
          }
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.scale(300),
    height: theme.scale(300),
    backgroundColor: theme.colors.PINK_LIGHT,
  },
  listContainer: {
    width: WIDTH,
    height: WIDTH,
  },
  item: {
    position: 'absolute',

    justifyContent: 'center',
    alignItems: 'center',
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderRadius: theme.scale(35),
    backgroundColor: theme.colors.PINK,
  },
  centerItem: {
    top: WIDTH / 2 - ITEM_SIZE / 2,
    left: WIDTH / 2 - ITEM_SIZE / 2,
  },
});
