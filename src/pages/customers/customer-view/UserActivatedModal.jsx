import Form from '@/components/form/Form';
import FormSwitch from '@/components/form/FormSwitch';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import { useEditUser } from '@/services/user/useUser';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserActivatedModal = ({ isOpen, setIsOpen, data }) => {
  const { isLoading, mutate } = useEditUser();
  const { id } = useParams();
  const activatedUser = (formData) => {
    mutate(
      {
        id: id,
        userType: 'CUSTOMER',
        ...formData,
      },
      {
        onSuccess: () => {
          toast.success('Successfully updated');
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
  };
  const defaultValues = {
    activated: data?.activated,
  };

  /* const activateOptions = [
    { label: 'Activate', value: true },
    { label: 'Deactivate', value: false },
  ]; */

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-5 p-8 max-w-[400px]'
    >
      <p className='text-center  my-2'>User Activation</p>
      <Form
        showErrorToast={false}
        onSubmit={activatedUser}
        stopPropagation={true}
        defaultValues={defaultValues}
        className='flex-1 flex flex-col gap-5'
      >
        <FormSwitch
          name='activated'
          label='Activated'
          className='bg-white'
          value={data?.activated}
        />

        {/* <FormRadioButtonGroup
          label='Activation'
          name='activated'
          options={activateOptions}
        /> */}

        <div className='flex justify-center mt-5'>
          <Button type='submit' loading={isLoading}>
            Confirm
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default UserActivatedModal;
