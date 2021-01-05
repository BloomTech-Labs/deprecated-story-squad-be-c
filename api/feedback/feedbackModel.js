const db = require('../../data/db-config');
const { formatTeam } = require('../../lib');
const { points, faceoff } = require('./gameHelpers');

/**
 * Takes a child ID and returns the child's current squad
 * @param {number} ChildID unique integer id of a child
 * @returns {Promise} returns a promise that resovles to an ID
 */
const getSquadIDFromChildID = (ChildID) => {
  return db('Squads AS S')
    .join('Teams AS T', 'S.ID', 'T.SquadID')
    .join('Members AS M', 'T.ID', 'M.TeamID')
    .join('Submissions AS Sub', 'Sub.ID', 'M.SubmissionID')
    .join('Children AS C', 'C.ID', 'Sub.ChildID')
    .where('C.ID', ChildID)
    .select(['S.ID', 'M.ID AS MemberID']);
};

module.exports = {};
