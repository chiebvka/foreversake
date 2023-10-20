import React, { ReactNode, FC } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;