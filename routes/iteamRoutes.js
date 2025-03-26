const express = require('express') ;
const { iteamRegistraction , getIteam, deleteIteam } = require('../controllers/iteamController');
const router = express.Router();

router.route('/addIteam').post(iteamRegistraction) ;
router.route('/getIteam').get(getIteam) ;
router.route('/deleteIteam').delete(deleteIteam);

module.exports = router ;