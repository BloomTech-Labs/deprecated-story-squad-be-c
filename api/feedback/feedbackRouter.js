const router = require('express').Router();

//const { ops } = require('../../lib');
const { authRequired } = require('../middleware');

//Not using this yet, will be used for DB access
//const Feedback = require('./feedbackModel');

//Need to add swagger documentation for the routes

//Test route
router.get('/', authRequired, (req, res) => {
  res.status(200).json({ endpoint: 'Feedback Router' });
});

//This endpoint will be used to post emoji feedback for a submission
//May need a submission id in the route, depending how you set it up
router.post('/', authRequired, (req, res) => {
  res.status(200).json({ endpoint: 'Post emoji feedback' });

  //An ops function will be used for posting to the backend, ex:
  //ops.postMult();
});

module.exports = router;
