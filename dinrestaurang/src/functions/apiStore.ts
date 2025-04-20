import { request } from '@api/request';
import { food_api } from '@utils/envs';
import { errorHandler } from './helper';

/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Get all food items from api.
 *@function getFoodData
 * @async
 * @returns Promise contains food array
 */
export const getFoodData = async () => {
  try {
    return await request.get<Food[]>(food_api as Paths);
  } catch (err) {
    errorHandler(err);
  }
};
