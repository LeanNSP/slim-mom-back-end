const { authorize, validateIdQuery } = require('../../../middleware');

const AuthController = require('../controllers/AuthController');
const validateSingIn = require('../middleware/validateSingIn');
const validateCreateUser = require('../middleware/validateCreateUser');

//CRUD
const authList = [
   {
      app: 'post',
      urn: '/register',
      middleware: [validateCreateUser, AuthController.createUser],
   },
   {
      app: 'get',
      urn: '/register',
      middleware: [AuthController.createUser],
   },

   {
      app: 'put',
      urn: '/login',
      middleware: [validateSingIn, AuthController.login],
   },
   {
      app: 'patch',
      urn: '/:id/logout',
      middleware: [validateIdQuery, authorize, AuthController.logout],
   },
   {
      app: 'get',
      urn: '/refresh',
      middleware: [authorize, AuthController.getRefreshUser],
   },
];

module.exports = authList;