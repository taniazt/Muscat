import { SecondaryButton } from '../Atoms/SecondaryButton';
import './Instagram.scss';
import Mobile from '../../images/insta-mobile.png';

export const Instagram = () => (
  <div className="insta-container">
    <div className="text-container">
      <p className="insta-name">Instagram </p>
      <p className="insta-text">
        Більше відео, фото товарів, інтер’єрного натхнення,
        <br />
        бекстейджів та нашого повсякденного життя.
      </p>
      <SecondaryButton text="Стежити" />
      <img src={Mobile} alt="Mobile Instagram" className="insta-image" />
    </div>
  </div>
);
