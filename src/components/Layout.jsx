import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar';

const Layout = () => (
  <>
    <header className="headerWrapper">
      <h1>Math Magicians</h1>
      <Navbar />
    </header>
    <Outlet />
  </>
);

export default Layout;
