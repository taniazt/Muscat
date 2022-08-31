import { Button } from '../../Atoms/Button';
import './Offer.scss';

export const Offer = () => {
  return (
    <>
      <div className="offer-background">
        <div className="offer-header">
          MUSCAT.<span className="offer-header__home">home</span>
        </div>
        <div className="offer-text">Подарунки для твоєї домівки</div>
        <Button text="Каталог" />
      </div>
    </>
  );
};
