const Brand = require("../db/brand");

async function addBrand(model) {
    let brand = new Brand({
        name: model.name,
    });
    await brand.save();
    return brand.toObject();
}

async function updateBrand(id, model) {
   await Brand.findOneAndUpdate({_id: id}, model);
   return
}

async function getBrands() {
   let brands = await Brand.find();
    return brands.map(brand => brand.toObject());
}

async function getBrandById(id) {
   let brand = await Brand.findById(id);
   return brand.toObject();
}

async function deleteBrand(id) {
   await Brand.deleteOne({_id: id});
   return;
}

module.exports = { addBrand, updateBrand, getBrands, deleteBrand, getBrandById };