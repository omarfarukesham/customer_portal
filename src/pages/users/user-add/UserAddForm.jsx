import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import addAdminUserSchema from '@/services/schema/addAdminUserSchema';
import { useAddUser } from '@/services/user/useUser';
import { toast } from 'react-toastify';

const UserAddForm = ({ isOpen, setIsOpen }) => {
  const { isLoading, mutate } = useAddUser();

  const addUser = (data) => {
    mutate(
      {
        userType: 'ADMIN',
        ...data,
      },
      {
        onSuccess: () => {
          toast.success('Successfully User has created');
          setIsOpen(false);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-5 p-5 max-w-[500px]'
    >
      <p className='text-center my-2 text-xl font-bold'> Add User</p>
      <Form
        showErrorToast={false}
        onSubmit={addUser}
        stopPropagation={true}
        schema={addAdminUserSchema}
        className='flex-1 flex flex-col gap-10'
      >
        <FormInput
          name='username'
          label='Username'
          placeholder='Email/phone'
          validations={{ required: 'Please Write the user name' }}
        />
        <FormInput name='personName' label='Full Name' />
        <FormInput
          name='password'
          label='Password'
          type='password'
          validations={{ required: 'Please Write the Password' }}
        />
        <FormInput
          name='confirmPassword'
          label='Confirm Password'
          type='password'
        />

        <div className='flex justify-center gap-5'>
          <>
            <div className='flex justify-center gap-3 mt-5'>
              <Button type='submit' disabled={isLoading}>
                {isLoading ? <LoadingSpinner /> : 'Confirm'}
              </Button>
            </div>
            <div className='flex justify-center gap-3 mt-5'>
              <Button
                type='submit'
                onClick={closeModal}
                className='bg-secondary hover:bg-primary hover:text-white'
              >
                Cancel
              </Button>
            </div>
          </>
        </div>
      </Form>
    </Modal>
  );
};

export default UserAddForm;
