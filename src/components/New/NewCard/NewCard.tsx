import './NewCard.scss';
import Slide from '../../../images/slides/slide1.jpg';
import CardBusket from '../../../images/card-basket.svg';

export const NewCard = ({
  imageSrc,
  category,
  name,
  price,
}: {
  imageSrc: string;
  category: string;
  name: string;
  price: string;
}) => (
  <div className="card-container">
    <div>
      <img src={imageSrc} alt="slide" className="card-image" />
      <p className="card-category">{category}</p>
      <p className="card-name">{name}</p>
    </div>
    <div className="card-price-block">
      <p className="card-price">{price}</p>
      <img src={CardBusket} alt="" />
    </div>
  </div>
);
