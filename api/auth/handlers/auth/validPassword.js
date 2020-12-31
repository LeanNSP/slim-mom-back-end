const { hash } = require('../../helpers');
const { getHashPassword } = hash;

module.exports = validPassword = async (pass, user) => {
   try {
      const { password } = user;

      const isPasswordValid = await getHashPassword(pass, password);

      if (!isPasswordValid) {
         throw new Error('Email or password is wrong').code(401);
      }

      return isPasswordValid;
   } catch (error) {
      throw error;
   }
};
