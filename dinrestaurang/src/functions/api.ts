import { request } from 'api';
import { Food } from 'models';
import { food_api } from 'utils/envs';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Get all food items from api.
 *
 *@function getFoodData
 * @async
 * @returns Promise contains food array
 */
export const getFoodData = async () =>
  await request.get<Food[]>(food_api as string);
