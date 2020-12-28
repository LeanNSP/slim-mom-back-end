const dayModel = require('./day.model');

const {
   checkEatenProduct,
   updateExistingDay,
   createNewDay,
   updateCurrentDay,
} = require('./helpers');

module.exports = class ProductService {
   static async addProductPerDay(reqBody, reqUser) {
      const { date, productId, weight } = reqBody;
      const userId = reqUser._id;
      const userDays = reqUser.days;
      const dailyRate = reqUser.userData.dailyRate;

      try {
         const eatenProduct = await checkEatenProduct(productId);

         const isSuchDay = userDays.find(day => day.date === date);

         const currentDay = isSuchDay
            ? updateExistingDay(eatenProduct, weight, isSuchDay.id, dailyRate)
            : createNewDay(eatenProduct, weight, userId, dailyRate, date);

         return currentDay;
      } catch (error) {
         throw error;
      }
   }

   static async deleteProductPerDay(dayId, eatenProductId) {
      try {
         const currentDay = await dayModel.findById(dayId);
         const { eatenProducts, daySummary } = currentDay;
         console.log('currentDay', currentDay);
         const updatedEatenProducts = eatenProducts.filter(product => {
            return String(product._id) !== eatenProductId;
         });
         console.log('updetedEatenProducts', updatedEatenProducts);
         console.log('eatenProductId', eatenProductId);

         return updateCurrentDay(dayId, updatedEatenProducts, daySummary);
      } catch (error) {
         throw error;
      }
   }
};
