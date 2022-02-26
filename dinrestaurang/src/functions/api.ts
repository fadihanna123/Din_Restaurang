import { request } from 'api';
import { AxiosResponse } from 'axios';
import { Food } from 'typings';
import { food_api } from 'utils';

export const getFoodData = async (): Promise<void | AxiosResponse<
  Food[],
  any
>> => await request.get<Food[]>(food_api as string);
