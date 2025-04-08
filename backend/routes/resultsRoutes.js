const express = require('express')
const router = express.Router()
const { getResults, getResult, setResult, updateResult } = require('../controllers/resultsController')

router.route('/').get(getResults).post(setResult)
router.route('/:id').put(updateResult)
router.route('/result/:id').get(getResult)

module.exports = router