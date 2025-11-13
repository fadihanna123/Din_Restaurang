import { request } from '@api/request';
import { food_endpoint } from '@utils/envs';
import { errorHandler } from './helper';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Get all food items from API.
 *@function getFoodData
 * @async
 * @returns Promise contains food array
 */
export const getFoodData = async () => {
  try {
    return await request.get<Food[]>(food_endpoint as Paths);
  } catch (err) {
    errorHandler(err);
  }
};
