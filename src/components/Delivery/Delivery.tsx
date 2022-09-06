import './Delivery.scss';

import Delivery1 from '../../images/delivery1.jpg';
import Delivery2 from '../../images/delivery2.jpg';
import Delivery3 from '../../images/delivery3.jpg';
import DelNum1 from '../../images/del-num1.svg';
import DelNum2 from '../../images/del-num2.svg';
import DelNum3 from '../../images/del-num3.svg';

export const Delivery = () => (
  <div className="delivery" id="delivery">
    <h2 className="delivery-header">Доставка і оплата</h2>
    <div className="delivery-container">
      <div className="delivery-block">
        <img src={Delivery1} alt="Оформлюй" className="delivery-image" />
        <img src={DelNum1} alt="" className="delivery-number" />
        <p className="delivery-name">Оформлюй замовлення</p>
        <p className="delivery-text">
          будь-яким зручним способом: через сайт, в дірект інстаграм, у Viber...
          Оплачуй замовлення та отримай фіскальний чек на покупку
        </p>
      </div>
      <div className="delivery-block">
        <img src={Delivery2} alt="Відправимо" className="delivery-image" />
        <img src={DelNum2} alt="" className="delivery-number" />
        <p className="delivery-name" id="delivery-name">
          Ми усе упакуємо і відправимо
        </p>
        <p className="delivery-text">
          службою доставки “Нова Пошта” протягом 2 робочих днів. Посилка
          застраховується на повну суму твого замовлення
        </p>
      </div>
      <div className="delivery-block">
        <img src={Delivery3} alt="Отримуй" className="delivery-image" />
        <img src={DelNum3} alt="" className="delivery-number" />
        <p className="delivery-name">Отримуй замовлення</p>
        <p className="delivery-text">
          та перевіряй цілісність товарів разом працівником пошти. Насолоджуйся
          красивими та{' '}
          <span id="delivery-text"> практичними речима для твоєї оселі</span>
        </p>
      </div>
    </div>
    <div className="return-container">
      <p className="return-name">Повернення</p>
      <p className="return-text">
        Повернути товар у магазин (або обміняти його на інший) можна протягом 14
        днів із дня здійснення покупки. <br /> Це правило поширюється на товари
        належної якості, тобто невикористані та непошкоджені.
      </p>
    </div>
  </div>
);
