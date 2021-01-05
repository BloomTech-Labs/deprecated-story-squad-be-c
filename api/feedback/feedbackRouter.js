const router = require('express').Router();

const { ops } = require('../../lib');
const { authRequired } = require('../middleware');

//Not using this yet
//const Feedback = require('./feedbackModel');

//Need to finish editing this swagger documentation
/**
 * @swagger
 * /feedback/:
 *  post:
 *    summary: Send emoji feedback for a writing or drawing
 *    security:
 *      - okta: []
 *    tags:
 *      - Feedback
 *    requestBody:
 *      description: An array containing two points objects, one for each submission on
 *                   the team (the child's and their teammate's). It is highly recommended
 *                   to send both up together.
 *      content:
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/PointsObject'
 *    responses:
 *      201:
 *        description: Returns an array of the id references to the new votes
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              example: [ 1, 2 ]
 *      400:
 *        $ref: '#/components/responses/InvalidFormat'
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      403:
 *        $ref: '#/components/responses/DuplicateError'
 *      404:
 *        $ref: '#/components/responses/NotFound'
 *      500:
 *        $ref: '#/components/responses/DatabaseError'
 */

//Test route
router.get('/', (req, res) => {
  res.status(200).json({ status: 'Success!' });
});

//Need to add back authRequired middleware when done testing
router.post('/', (req, res) => {
  const feedback = req.body;

  res.status(200).json({ feedback: feedback, status: 'Success!' });

  //need to write a custom ops function to use here, I think in crudOps.js
  //ops.postMult(res, Game.assignPoints, 'Submission', points);
});

module.exports = router;
