import { Outlet } from 'react-router-dom';
import LayoutBody from './LayoutBody.tsx';
import LayoutContainer from './LayoutContainer.tsx';
import LayoutFooter from './LayoutFooter.tsx';
import LayoutHeader from './LayoutHeader.tsx';

const Layout = () => {
  return (
    <LayoutContainer>
      <LayoutHeader />
      <LayoutBody>
        <Outlet />
      </LayoutBody>
      <LayoutFooter />
    </LayoutContainer>
  );
};

export default Layout;
