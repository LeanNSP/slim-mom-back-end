//mocha api/auth/handlers/auth/getEmail.test.js
const sinon = require('sinon');
const should = require('should');

const userModule = require('../../../users/user.model');
const { RequestError } = require('../../../helpers');
const getEmail = require('./getEmail');
const connectionOnDB = require('../../../connectionOnDB');

tes();
describe('getEmail', () => {
   let testEmail;
   beforeEach(() => {
      connectionOnDB();
      testEmail = getEmail('bip@bip.com');
   });

   it('Get user by email from database', () => {
      should(testEmail).be.eql({ email: 'bip@bip.com' });
   });

   it('Get user by email from ', () => {
      const email = { email: '' };
      should(testEmail).should.be.fulfilledWith(email);
   });

   it('Return throw', () => {
      getEmail('Not Valid Name').should.be.rejected();
   });
});

// async function getEmail(email) {
//    try {
//       const user = await userModule.findUserByEmail(email);

//       if (!user) {
//          throw new RequestError('Email or password is wrong', 401);
//       }
//       return user;
//    } catch (error) {
//       throw error;
//    }
// }

// module.exports = getEmail;
