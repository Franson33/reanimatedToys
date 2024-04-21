import { StyleSheet, Text, View } from 'react-native';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withDecay } from 'react-native-reanimated';

import 'react-native-reanimated';
import { ListItem } from '@components';
import { theme } from '@theme';

import { ANGLE_STEP, ITEM_SIZE, listConfig, RADIUS, WIDTH } from './constants';

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
    borderRadius: theme.scale(120),
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
