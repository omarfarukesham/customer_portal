export const ENDPOINTS = {
  authenticate: '/authenticate',
  userInfo: '/user-info',
  sendOtp: '/send',
  verifyOtp: '/verify',
  resetPassword: '/users/reset-password',
  checkUser: '/users/check-user',
  registration: '/users/register',

  // User Service endpoints
  users: '/admin/users',
  addUser: '/admin/users',
  updatePassword: '/admin/users/update-password',
  user: (id) => `/admin/users/${id}`,
  editUser: (id) => `/admin/users/${id}`,
  // userDetails: (id) => `users/${id}/details`,
};
