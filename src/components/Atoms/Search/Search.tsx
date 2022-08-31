import './Search.scss';
import SearchIcon from '../../../images/icon-search.svg';

export const Search = () => (
  <div className="search-container">
    <img src={SearchIcon} alt="search" className="icon" />
    <input type="text" className="search" placeholder="Я шукаю..." />
  </div>
);
