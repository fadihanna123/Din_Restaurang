declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_BACKEND_URL: string;
      REACT_APP_FOOD_API: string;
      REACT_APP_API_KEY: string;
      REACT_APP_AUTHORIZATION_KEY: string;
      NODE_ENV: 'development' | 'production';
    }
  }

  interface Food {
    id: string;
    title: string;
    sorts: string;
    price: number;
    image: string;
    included: string;
  }

  router.get('/food/:id', getFoodById);

  // Add food item.
  router.post('/food/add', addFood);

  // Update a food item.
  router.put('/food/:id', updateFoodById);

  // Delete a food item.
  router.delete('/food/:id', deleteFoodById);

  type Paths = 'food' | 'food/add' | `food/${number}`;
}

export {};
