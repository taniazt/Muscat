import './Footer.scss';

export const Footer = () => (
  <div className="footer">
    <div className="footer-block">
      <div>
        <p className="footer-name">Phone</p>
        <p className="footer-text">+380 66 77 18 999</p>
      </div>
      <div>
        <p className="footer-name">Email</p>
        <p className="footer-text">muscat.home@yahoo.com</p>
      </div>
      <div>
        <p className="footer-name">Instagram</p>
        <p className="footer-text">@muscat.home</p>
      </div>
    </div>
    <div>
      <div className="footer-address">
        <p className="footer-name">Адреса</p>
        <p className="footer-text">Україна, м. Львів</p>
      </div>
      <div>
        <p className="footer-name">Режим роботи</p>
        <p className="footer-text">
          Пн-Пт: 10:00-18:00
          <br />
          Сб-Нд: вихідні
        </p>
      </div>
    </div>
  </div>
);
