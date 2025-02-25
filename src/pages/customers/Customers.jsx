import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import CustomersBody from './CustomersBody';

const Customers = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Customers' backButton={false} />
      <CustomersBody />
    </PageContainer>
  );
};

export default Customers;
