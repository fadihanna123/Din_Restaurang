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
 * @apiSuccess {String} title
 * @apiSuccess {String} Sorts
 * @apiSuccess {Number} price
 * @apiSuccess {String} image
 * @apiSuccess {String} included
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
 * @apiSuccess {String} title
 * @apiSuccess {String} Sorts
 * @apiSuccess {Number} price
 * @apiSuccess {String} image
 * @apiSuccess {String} included
 * @apiParam {Number} id
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
 * @apiBody {String} title
 * @apiBody {String} Sorts
 * @apiBody {Number} price
 * @apiBody {String} image
 * @apiBody {String} included
 * @apiSuccess {String} title
 * @apiSuccess {String} Sorts
 * @apiSuccess {Number} price
 * @apiSuccess {String} image
 * @apiSuccess {String} included
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
 * @apiParam {Number} id
 * @apiBody {String} title
 * @apiBody {String} Sorts
 * @apiBody {Number} price
 * @apiBody {String} image
 * @apiBody {String} included
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
 * @apiParam {Number} id
 * @apiSuccessExample Success-Response:
 *                    Deleted
 */
