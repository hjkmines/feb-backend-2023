const express = require('express'); 
const router = express.Router();
const {
    getCategories, 
    createCategory, 
    deleteCategories, 
    putCategory, 
    getCategory, 
    deleteCategory
} = require('../controllers/categoryController')

router.route('/')
    .get(getCategories)
    .post(createCategory)
    .delete(deleteCategories)

router.route('/:categoryId')
    .get(getCategory)
    .put(putCategory)
    .delete(deleteCategory)

module.exports = router;