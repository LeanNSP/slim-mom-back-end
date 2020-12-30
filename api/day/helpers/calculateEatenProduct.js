module.exports = calculateEatenProduct = (eatenProduct, weight) => {
   const { title, calories } = eatenProduct;
   const kcal = (calories * weight) / eatenProduct.weight;

   return { title: title.ru, weight, kcal };
};
