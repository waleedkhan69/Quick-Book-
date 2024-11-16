import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '.';
import Header from './Navbar/Header';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default HomeLayout;
