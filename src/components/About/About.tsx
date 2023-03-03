import './About.scss';

import About1 from '../../images/about1.png';
import About2 from '../../images/about2.png';
import About3 from '../../images/about3.png';

export const About = () => (
  <div id="about" className="about">
    <h1 className="about-header">Про нас</h1>
    <div className="about-container">
      <div className="about-block">
        <img src={About1} alt="" className="about-image" />
        <div>
          <p className="about-name">
            Привіт, я Яра— засновниця <br />
            MUSCAT.home.
          </p>
          <p className="about-text">
            Справжній візуал і любитель своєї справи.
            <br />
            Ми з невеличкою командою намагаємося створити тут затишний куточок,
            <br />
            де кожен може знайти красу для свого дому.
            <br />
            Історія Мускату розпочалася ще з 2018р з облаштування власного
            житла.
            <br />
            Але усі ідеї, деталі і стилі, просто, не вмістилися б в один
            інтер'єр.
            <br />
            Тепер уся ця краса є в нашому асортименті.
            <br />
            Радію кожній новій колекції, та, надіюся, що Ви користуєтеся нашими
            <br />
            товарами з задоволенням.
          </p>

          <p className="about-text" id="about-text0">
            Справжній візуал і любитель своєї справи. Ми з невеличкою командою
            намагаємося створити тут затишний куточок, де кожен може знайти
            красу для свого дому. Історія Мускату розпочалася ще з 2018р з
            облаштування власного житла. Але усі ідеї, деталі і стилі, просто,
            не вмістилися б в один інтер'єр. Тепер уся ця краса є в нашому
            асортименті. Радію кожній новій колекції, та, надіюся, що Ви
            користуєтеся нашими товарами з задоволенням.
          </p>
        </div>
      </div>
      <div className="about-block">
        <img src={About2} alt="" className="about-image" id="about-image-2" />
        <div className="about-textblock">
          <div>
            <p className="about-name" id="about-name">
              Усі товари в наявності у нас на складі
            </p>
            <p className="about-text">
              Концентрація красивих та практичних речей у цьому місці просто
              зашкалює. <br /> Саме тут ми усе бережно упаковуємо і готуємо до
              відправки.
            </p>
            <p className="about-text" id="about-text1">
              Концентрація красивих та практичних речей у цьому місці просто
              зашкалює. Саме тут ми усе бережно упаковуємо і готуємо до
              відправки.
            </p>
          </div>
          <div>
            <p className="about-text" id="about-text2">
              А це наша маленька помічниця, але скоріше бешкетниця.
              <br />
              Допомагає упаковувати ваші замовлення і заносити на пошту
            </p>
          </div>
        </div>
        <img src={About3} alt="" className="about-image-small" />
      </div>
    </div>
  </div>
);
