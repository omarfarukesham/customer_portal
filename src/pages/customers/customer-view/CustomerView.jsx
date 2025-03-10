import PageContainer from '@/components/layout/PageContainer';
import PageError from '@/components/layout/PageError';
import PageHeader from '@/components/layout/PageHeader';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useGetUser } from '@/services/user/useUser';
import { useParams } from 'react-router-dom';
import CustomerViewTable from './CustomerViewTable';

const CustomerView = () => {
  const { id } = useParams();
  const { isFetching, error, data } = useGetUser(id);

  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Customer View' />
      {isFetching && <LoadingSpinner text='Loading Customers...' />}
      {!isFetching && data && !error && <CustomerViewTable data={data} />}
      {!isFetching && error && <PageError message={error.message} />}
    </PageContainer>
  );
};

export default CustomerView;
