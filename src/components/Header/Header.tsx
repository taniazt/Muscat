import './Header.scss';
import { Search } from '../Atoms/Search';

import Logo from '../../images/muscat.svg';
import Busket from '../../images/busket-icon.svg';

export const Header = () => {
  return (
    <div className="header-container">
      <header className="container">
        <img src={Logo} alt="muscat logo" />
        <nav className="nav">
          <a href="#" className="nav-link">
            Каталог
          </a>
          <a href="#new" className="nav-link">
            Новинки
          </a>
          <a href="#delivery" className="nav-link">
            Доставка і оплата
          </a>
          <a href="#review" className="nav-link">
            Відгуки
          </a>
          <a href="#about" className="nav-link">
            Про нас
          </a>
        </nav>
        <Search />
        <a href="#" className="busket">
          <img src={Busket} alt="busket" />
        </a>
      </header>
    </div>
  );
};
