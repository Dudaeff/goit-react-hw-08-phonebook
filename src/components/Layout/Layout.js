import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppBar } from 'components/AppBar/AppBar';
import { Wrapper } from '../CommonStyles/Wrapper';
import { Section } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />
      <Section>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Section>
      <ToastContainer />
    </Wrapper>
  );
};
