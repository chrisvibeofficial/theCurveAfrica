const categoryModel = require('../models/category');
const userModel = require('../models/user');
const { Op, where } = require('sequelize');

exports.createCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const checkUserId = await userModel.findOne({ where: { id: id } });

    if (!checkUserId) {
      return res.status(404).json('User is not found. Cannot create category for unknown user');
    }

    const { category } = req.body;

    if (!category) {
      return res.status(400).json({ message: 'Category is required' });
    }

    const checkCategoryWithId = await categoryModel.findOne({
      where: {
        userId: checkUserId.dataValues.id,
        category: category
      }
    });

    console.log(checkCategoryWithId);

    if (checkCategoryWithId) {
      return res.status(400).json(`Category for ${category} has already been created for this user`);
    }

    const randomNum = Math.floor(Math.random() * 1000);
    const categoryId = 'Cat' + randomNum;

    const userCategory = {
      id: categoryId,
      userId: checkUserId.dataValues.id,
      category
    };

    const newCategpry = await categoryModel.create(userCategory);
    res.status(201).json({
      message: `Category for ${category} has been created successfully`,
      data: newCategpry
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
}

exports.getCategories = async (req, res) => {
  try {
    const allCategories = await categoryModel.findAll();
    res.status(200).json({
      message: 'All categories below',
      total: allCategories.length,
      data: allCategories
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
}

exports.getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const checkUserId = await userModel.findOne({ where: { id: id } });

    if (!checkUserId) {
      return res.status(404).json('User is not found. Cannot find category for unknown user');
    }

    const getCategory = await categoryModel.findAll({ where: { userId: id } });
    res.status(200).json({
      message: 'Category for user',
      total: getCategory.length,
      data: getCategory
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
}

exports.updateCategory = async (req, res) => {
  try {
    const { id, category } = req.params;
    const checkCategory = await categoryModel.findOne({ where: { userId: id, category: category } });

    if (!checkCategory) {
      return res.status(404).json(`User with ${category} category not found`)
    }

    const data = req.body.category;
    await checkCategory.update({ category: data })
    const update = await categoryModel.findOne({ where: { userId: id } });
    res.status(200).json({
      message: 'Category updated successfully',
      update
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
}


exports.deleteAllCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const checkCategory = await categoryModel.findOne({ where: { userId: id } });

    if (!checkCategory) {
      return res.status(404).json(`User not found`)
    }

    await categoryModel.destroy({ where: { userId: id } });
    res.status(200).json('category has been deleted successfully')
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
}


exports.deleteOneCategory = async (req, res) => {
  try {
    const { id, category } = req.params;
    const checkCategory = await categoryModel.findOne({ where: { userId: id, category: category } });

    if (!checkCategory) {
      return res.status(404).json(`User with category found`)
    }

    await categoryModel.destroy({ where: { userId: id, category:category } });
    res.status(200).json('category has been deleted successfully')
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
}