import CustomerActionBtn from './CustomerActionBtn';

const CustomerTableColumns = [
  {
    label: 'SL No.',
    key: 'serial',
  },
  {
    label: 'Username',
    key: 'username',
  },
  {
    label: 'Full Name',
    key: 'userFullName',
  },
  {
    label: 'Email',
    key: 'email',
  },

  {
    label: 'Phone',
    key: 'phone',
  },

  {
    label: 'User Type',
    key: 'userType',
  },
  // {
  //   label: 'Verified',
  //   key: 'isVerified',
  //   content: (value) => (
  //     <span className={value ? 'text-success' : 'text-danger'}>
  //       {value ? 'Yes' : 'No'}
  //     </span>
  //   ),
  // },
  {
    label: 'Activated',
    key: 'activated',
    content: (value) => (
      <span className={value ? 'text-success' : 'text-danger'}>
        {value ? 'Activated' : 'Inactivated'}
      </span>
    ),
  },
  {
    label: <div className='text-center'>Action</div>,
    content: (_, data) => <CustomerActionBtn data={data} />,
  },
];

export default CustomerTableColumns;
