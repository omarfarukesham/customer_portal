import PageInnerContainer from '@/components/layout/PageInnerContainer';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import Button from '@/components/ui/Button';
import { useState } from 'react';
import UserActivatedModal from './UserActivatedModal';

const CustomerViewTable = ({ data }) => {
  const [isUserActivated, setIsUserActivated] = useState(false);
  // console.log(data?.id);
  const userStatusActivated = () => {
    setIsUserActivated(true);
  };
  return (
    <PageInnerContainer className='p-8'>
      <Table className='border border-separate border-gray-2'>
        <TableBody>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableData>{data?.username}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Email</TableHead>
            <TableData>{data?.email}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Verified</TableHead>
            <TableData>{data?.isVerified ? 'Yes' : 'No'}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Activated</TableHead>
            <TableData>{data?.activated ? 'Yes' : 'No'}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Phone</TableHead>
            <TableData>{data?.phone}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Calling Code</TableHead>
            <TableData>{data?.callingCode}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableData>{data?.personName}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>User Type</TableHead>
            <TableData>{data?.userType}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Status Activation</TableHead>
            <Button
              variant='secondary'
              size='small'
              onClick={userStatusActivated}
              className='m-2'
            >
              User Activation
            </Button>
          </TableRow>
        </TableBody>
      </Table>

      {isUserActivated && (
        <UserActivatedModal
          isOpen={isUserActivated}
          setIsOpen={setIsUserActivated}
          data={data}
        />
      )}
    </PageInnerContainer>
  );
};

export default CustomerViewTable;
