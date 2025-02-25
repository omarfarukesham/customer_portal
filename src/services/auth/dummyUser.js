const appMenu = [
  {
    label: 'Dashboard',
    link: '/admin/dashboard',
  },
  {
    label: 'Catalog',
    children: [
      {
        label: 'Products',
        link: '/admin/products',
      },
      // {
      //   label: 'Categories',
      //   link: '/admin/categories',
      // },
      // {
      //   label: 'Brands',
      //   link: '/admin/brands',
      // },
      // {
      //   label: 'Attributes',
      //   link: '/admin/attributes',
      // },
      // {
      //   label: 'Attribute Sets',
      //   link: '/admin/attribute-sets',
      // },
      // {
      //   label: 'Attribute Categories',
      //   link: '/admin/attribute-categories',
      // },
      // {
      //   label: 'Attributes Sub Categories',
      //   link: '/admin/attribute-sub-categories',
      // },
      // {
      //   label: 'Tax Rules',
      //   link: '/admin/tax-rules',
      // },
      // {
      //   label: 'Tax Categories',
      //   link: '/admin/tax-categories',
      // },
      // {
      //   label: 'Tax Sub Categories',
      //   link: '/admin/tax-sub-categories',
      // },
      // {
      //   label: 'Tax Rates',
      //   link: '/admin/tax-rates',
      // },
    ],
  },
  {
    label: 'Orders',
    link: 'http://103.78.54.180:4175/admin/order-list?sid=YWJjZGVmZ2hpamtsbW5vcHFyc3R3dXZ4eXo=',
  },
  {
    label: 'Settings',
    link: 'http://103.78.54.180:4176/admin/country?sid=YWJjZGVmZ2hpamtsbW5vcHFyc3R3dXZ4eXo=',
  },
  {
    label: 'Global Configuration',
    link: 'http://103.78.54.180:4177/admin/product-shelf?sid=YWJjZGVmZ2hpamtsbW5vcHFyc3R3dXZ4eXo=',
  },
  {
    label: 'Campaign',
    link: 'http://103.78.54.180:4178/admin/campaign?sid=YWJjZGVmZ2hpamtsbW5vcHFyc3R3dXZ4eXo=',
  },
  {
    label: 'Seller',
    link: 'http://103.78.54.180:4179/admin/seller?sid=YWJjZGVmZ2hpamtsbW5vcHFyc3R3dXZ4eXo=',
  },
];

const permissions = [
  'view_dashboard',
  'view_catalog',
  'view_product',
  'edit_product',
  'view_attribute',
  'edit_attribute',
  'view_tax',
  'edit_tax',
  'view_brand',
  'edit_brand',
];

const dummyUser = {
  name: 'Karim',
  email: 'admin@soldfy.com',
  role: {
    name: 'admin',
    appMenu: appMenu,
    permissions: permissions,
  },
  token: 'abcdefghijklmnopqrstuvwxyz',
};

export default dummyUser;
