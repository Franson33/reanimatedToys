import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { homeStackScreens } from '@navigator';
import { CircleListScreen, MainScreen } from '@screens';

export type HomeStackParams = {
  [homeStackScreens.HOME]: undefined;
  [homeStackScreens.CIRCLE]: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParams>();

export const HomeStack = () => (
  <Stack.Navigator initialRouteName={homeStackScreens.HOME}>
    <Stack.Screen name={homeStackScreens.HOME} component={MainScreen} />
    <Stack.Screen name={homeStackScreens.CIRCLE} component={CircleListScreen} />
  </Stack.Navigator>
);
