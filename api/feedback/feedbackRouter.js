const router = require('express').Router();

const { ops } = require('../../lib');
const { authRequired } = require('../middleware');

const Game = require('./gameModel');

/**
 * @swagger
 * /game/points:
 *  post:
 *    summary: Send a child's point assignments to the server to be stored
 *    security:
 *      - okta: []
 *    tags:
 *      - Gamification
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
router.post('/points', authRequired, (req, res) => {
    const points = req.body;
  
    ops.postMult(res, Game.assignPoints, 'Submission', points);
  });

module.exports = router;