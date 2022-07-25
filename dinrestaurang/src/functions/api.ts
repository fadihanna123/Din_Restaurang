import { request } from 'api';
import { Food } from 'models';
import { food_api } from 'utils/envs';

export const getFoodData = async () =>
  await request.get<Food[]>(food_api as string);
