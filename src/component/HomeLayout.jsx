import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '.';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default HomeLayout;
