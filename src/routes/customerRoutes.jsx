/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import permissions from '@/configuration/permissions';
import { lazy } from 'react';

const Customers = lazy(() => import('@/pages/customers/Customers'));
const CustomerView = lazy(() =>
  import('@/pages/customers/customer-view/CustomerView'),
);

const customerRoutes = [
  {
    path: 'customers',
    element: (
      <RouteAuthorization
        element={Customers}
        permission={permissions.VIEW_USER}
      />
    ),
  },
  {
    path: 'customers/:id',
    element: (
      <RouteAuthorization
        element={CustomerView}
        permission={permissions.VIEW_USER}
      />
    ),
  },
];

export default customerRoutes;
