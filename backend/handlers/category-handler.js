const Category = require("../db/category");

async function addCategory(model) {
    let category = new Category({
        name: model.name,
    });
    await category.save();
    return category.toObject();
}

async function updateCategory(id, model) {
   await Category.findOneAndUpdate({_id: id}, model);
   return
}

async function getCategories() {
   let categories = await Category.find();
    return categories.map(category => category.toObject());
}

async function getCategoryById(id) {
   let category = await Category.findById(id);
   return category.toObject();
}

async function deleteCategory(id) {
   await Category.deleteOne({_id: id});
   return;
}

module.exports = { addCategory, updateCategory, getCategories, deleteCategory, getCategoryById };