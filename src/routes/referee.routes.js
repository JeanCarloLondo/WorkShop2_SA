const express = require('express');
const ctrl = require('../controllers/referee.controller');
const router = express.Router();

router.get('/:id/dashboard', ctrl.dashboard);
router.get('/:id/assignments', ctrl.assignments);
router.put('/:refId/assignments/:aId/accept', ctrl.accept);
router.put('/:refId/assignments/:aId/reject', ctrl.reject);
router.get('/:id/notifications', ctrl.notifications);

module.exports = router;