import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <Header />
      <main className='box-border container ml-3'  {...props}>{children}</main>
      <Footer />
    </>
  );
};
