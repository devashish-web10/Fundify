const router = require('express').Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const {
  create,
  listApproved,
  getById,
  fakeContribute,
  listPending,
  approve
} = require('../controllers/campaignController');

// public
router.get('/', listApproved);
router.get('/:id', auth, getById);

// logged in users
router.post('/', auth, create);
router.post('/:id/contribute', auth, fakeContribute);

// admin
router.get('/admin/pending', auth, admin, listPending);
router.put('/admin/:id/approve', auth, admin, approve);

module.exports = router;
