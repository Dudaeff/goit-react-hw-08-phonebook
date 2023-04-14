import { useEffect, useState } from 'react';
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
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(authError);
    if (error) notify();
  }, [authError]);

  return <RegisterForm />;
};

export default RegisterPage;
