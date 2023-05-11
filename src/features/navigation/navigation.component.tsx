import { NavDesktop } from 'features/navigation/desktop';
import { NavMobile } from 'features/navigation/mobile';

const Navbar  = () => (
  <div className={'container'} style={{ width: '100vw' }}>
    <NavDesktop />
             <NavMobile/>
  </div>
);

export default Navbar;
