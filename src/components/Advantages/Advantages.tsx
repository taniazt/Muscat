import AvailabilityIcon from '../../images/availability-icon.svg';
import SupportIcon from '../../images/support-icon.svg';
import DeliveryIcon from '../../images/delivery-icon.svg';
import QualityIcon from '../../images/quality-icon.svg';

import './Advantages.scss';

export const Advantages = () => (
  <div className="container">
    <div className="advantages-container">
      <div className="advantages-block">
        <img src={QualityIcon} alt="quality" className="advantages-image" />
        <div>
          <p className="advantages-header">Висока якість</p>
          <p className="advantages-text">
            Виготовлено з натуральних матеріалів
          </p>
        </div>
      </div>
      <div className="advantages-block">
        <img src={DeliveryIcon} alt="delivery" className="advantages-image" />
        <div>
          <p className="advantages-header">Швидка доставка</p>
          <p className="advantages-text">Нова Пошта, 2 роб.дн.</p>
        </div>
      </div>
      <div className="advantages-block">
        <img src={SupportIcon} alt="support" className="advantages-image" />
        <div>
          <p className="advantages-header">Підтримка 24/7</p>
          <p className="advantages-text">
            Instagram, Viber, Telegram, Messenger
          </p>
        </div>
      </div>
      <div className="advantages-block">
        <img
          src={AvailabilityIcon}
          alt="availability"
          className="advantages-image"
        />
        <div>
          <p className="advantages-header">Товари в наявності</p>
          <p className="advantages-text">На складі у м.Львів</p>
        </div>
      </div>
    </div>
  </div>
);
