const router = require('express').Router();

//const { ops } = require('../../lib');
const { authRequired } = require('../middleware');

//Not using this yet, will be used for DB access
//const Feedback = require('./feedbackModel');

//Need to add swagger documentation here at top outlining data types of the Feedback router when the routes are complete (as in gameRouter)

//swagger documention below for routes
/**
 * @swagger
 * /feedback:
 *  get:
 *    summary: Test route that returns the current router name within a JSON object
 *    security:
 *      - okta: []
 *    tags:
 *      - Feedback
 *    responses:
 *      200:
 *        description: Confirms the base router is connected & functioning
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                Endpoint:
 *                  type: string
 *                  description: The name of the endpoint
 *              example:
 *                Endpoint: 'Feedback Router'
 */

//Test route
router.get('/', authRequired, (req, res) => {
  res.status(200).json({ Endpoint: 'Feedback Router' });
});

//Need to edit this swagger documentation to match the route below when it's complete
/**
 * @swagger
 * /feedback:
 *  post:
 *    summary: When complete, this will be used to post emoji feedback data
 *    security:
 *      - okta: []
 *    tags:
 *      - Feedback
 *    responses:
 *      200:
 *        description: Currently only confirms that the endpoint is working. This endpoint needs to be completed for posting emoji feedback to the backend.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                Endpoint:
 *                  type: string
 *                  description: The name of the endpoint
 *              example:
 *                Endpoint: 'Post emoji feedback'
 */

//This endpoint will be used to post emoji feedback for a submission
//May need a submission id in the route, depending how you set it up
router.post('/', authRequired, (req, res) => {
  res.status(200).json({ Endpoint: 'Post emoji feedback' });

  //An ops function will be used for posting to the backend, ex:
  //ops.postMult();
});

module.exports = router;
