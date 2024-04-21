import { StyleSheet, View } from 'react-native';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
} from 'react-native-reanimated';

import 'react-native-reanimated';
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
  const rotation = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate(event => {
      rotation.value += -event.translationY / 1000;
      event.translationX = 0;
    })
    .onEnd(event => {
      rotation.value = withDecay({
        velocity: -event.velocityX / 100,
      });
    });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <View style={styles.listContainer}>
          {listConfig.map(({ title, description }, index) => {
            if (index === 0) {
              return (
                <ListItem containerStyle={[styles.centerItem, styles.item]} title={title} description={description} />
              );
            } else {
              const animatedStyle = useAnimatedStyle(() => {
                const angle = ((ANGLE_STEP * (index - 1) + rotation.value * (180 / Math.PI)) * Math.PI) / 180;
                const x = RADIUS * Math.cos(angle) + RADIUS - ITEM_SIZE / 2;
                const y = RADIUS * Math.sin(angle) + RADIUS - ITEM_SIZE / 2;

                return { top: y, left: x };
              });

              return (
                <Animated.View key={title} style={animatedStyle}>
                  <ListItem containerStyle={styles.item} title={title} description={description} />
                </Animated.View>
              );
            }
          })}
        </View>
      </GestureDetector>
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
