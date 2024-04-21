import { theme } from '@theme';

export const listConfig = [
  { title: 'Title 1', description: 'Description 1' },
  { title: 'Title 2', description: 'Description 2' },
  { title: 'Title 3', description: 'Description 3' },
  { title: 'Title 4', description: 'Description 4' },
  { title: 'Title 5', description: 'Description 5' },
  { title: 'Title 6', description: 'Description 6' },
];

export const RADIUS = theme.scale(110);
export const WIDTH = RADIUS * 2;
export const ANGLE_STEP = 360 / (listConfig.length - 1);
export const ITEM_SIZE = theme.scale(80);
