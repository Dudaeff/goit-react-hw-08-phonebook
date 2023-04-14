import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useError } from 'hooks';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const notify = () =>
  toast('Enter valid data please!', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });

const RegisterPage = () => {
  const { authError } = useError();

  useEffect(() => {
    if (authError === 'Request failed with status code 400') notify();
  }, [authError]);

  return <RegisterForm />;
};

export default RegisterPage;
