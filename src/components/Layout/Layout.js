import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapprer } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <Wrapprer>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Wrapprer>
  );
};
