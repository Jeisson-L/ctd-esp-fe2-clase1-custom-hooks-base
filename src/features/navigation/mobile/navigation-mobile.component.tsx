import { FaBars, FaTimes } from 'react-icons/fa';
import { SearchBar } from 'features/search';
import {useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { LenguageContext } from 'contexts/languageContext';

const NavMobile = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen((value) => !value);
  const lenguageContext = useContext(LenguageContext);

  return (
    <div className={`container mobile-nav`}>
      <div className={'container'}>
        <NavLink to="/" className={'nav-link'}>
          <img className={'logo'} src={'/images/logo-dh.png'} />
        </NavLink>
        <button className={'icon-button'} aria-label="menu-button" onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className={'container'} style={{ flexDirection: 'column' }}>
          <div className={'container'} style={{ width: 400, flexDirection: 'column' }}>
            <NavLink to="/" className={'nav-link'}>
              <h3>{lenguageContext?.t('navigation.home')}</h3>
            </NavLink>
            <NavLink to="/following" className={'nav-link'}>
              <h3>{lenguageContext?.t('navigation.following')}</h3>
            </NavLink>
          </div>
          <SearchBar />
        </div>
      )}
    </div>
  );
};
export default NavMobile;
