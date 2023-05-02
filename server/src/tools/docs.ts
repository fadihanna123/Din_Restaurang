/**
 * @api {get} /food Get all food items
 * @apiName Get food
 * @apiGroup Food
 * @apiSampleRequest https://localhost:5000/food
 * @apiHeader apiKey
 * @apiHeader Authorization Bearer XXXX
 * @apiError (503) Forbidden
 * @apiErrorExample Error-response:
 *                  FORBIDDEN
 * @apiSuccess {string} title
 * @apiSuccess {string} Sorts
 * @apiSuccess {number} price
 * @apiSuccess {string} image
 * @apiSuccess {string} included
 * @apiSuccessExample Success-Response:
 *    [
 *      {
 *           "title": "Kebab",
 *           "sorts": "",
 *           "price": 10,
 *           "image": "a.jpg",
 *          "included": ""
 *
 *      }
 *    ]
 */

/**
 * @api {get} /food/:id Get requested food item by id.
 * @apiName Get food by id
 * @apiGroup Food
 * @apiSampleRequest https://localhost:5000/food/:id
 * @apiHeader apiKey
 * @apiHeader Authorization Bearer XXXX
 * @apiError (503) Forbidden
 * @apiErrorExample Error-response:
 *                  FORBIDDEN
 * @apiSuccess {string} title
 * @apiSuccess {string} Sorts
 * @apiSuccess {number} price
 * @apiSuccess {string} image
 * @apiSuccess {string} included
 * @apiParam {number} id
 * @apiSuccessExample Success-Response:
 *    [
 *      {
 *           "title": "Kebab",
 *           "sorts": "",
 *           "price": 10,
 *           "image": "a.jpg",
 *          "included": ""
 *
 *      }
 *    ]
 */

/**
 * @api {post} /food/add Add a food item.
 * @apiName Add food data
 * @apiGroup Food
 * @apiSampleRequest https://localhost:5000/food/add
 * @apiHeader apiKey
 * @apiHeader Authorization Bearer XXXX
 * @apiError (503) Forbidden
 * @apiErrorExample Error-response:
 *                  FORBIDDEN
 * @apiBody {string} title
 * @apiBody {string} Sorts
 * @apiBody {number} price
 * @apiBody {string} image
 * @apiBody {string} included
 * @apiSuccess {string} title
 * @apiSuccess {string} Sorts
 * @apiSuccess {number} price
 * @apiSuccess {string} image
 * @apiSuccess {string} included
 * @apiSuccessExample Success-Response:
 *    [
 *      {
 *           "title": "Kebab",
 *           "sorts": "",
 *           "price": 10,
 *           "image": "a.jpg",
 *          "included": ""
 *
 *      }
 *    ]
 */

/**
 * @api {put} /food/:id Update a food item based on id
 * @apiName Update food data.
 * @apiGroup Food
 * @apiSampleRequest https://localhost:5000/food/:id
 * @apiHeader apiKey
 * @apiHeader Authorization Bearer XXXX
 * @apiError (503) Forbidden
 * @apiErrorExample Error-response:
 *                  FORBIDDEN
 * @apiParam {number} id
 * @apiBody {string} title
 * @apiBody {string} Sorts
 * @apiBody {number} price
 * @apiBody {string} image
 * @apiBody {string} included
 * @apiSuccessExample Success-Response:
 *                    Changed
 */

/**
 * @api {delete} /food/:id Delete a food item based on id
 * @apiName Delete food data.
 * @apiGroup Food
 * @apiSampleRequest https://localhost:5000/food/:id
 * @apiHeader apiKey
 * @apiHeader Authorization Bearer XXXX
 * @apiError (503) Forbidden
 * @apiErrorExample Error-response:
 *                  FORBIDDEN
 * @apiParam {number} id
 * @apiSuccessExample Success-Response:
 *                    Deleted
 */
