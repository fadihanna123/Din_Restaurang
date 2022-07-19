import { request } from 'api';
import { AxiosResponse } from 'axios';
import { Food } from 'models';
import { food_api } from 'utils/envs';

export const getFoodData = async (): Promise<void | AxiosResponse<
  Food[],
  any
>> => await request.get<Food[]>(food_api as string);
