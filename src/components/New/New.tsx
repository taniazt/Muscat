import { useState, useEffect } from 'react';
import './New.scss';
import UpArrow from '../../images/up-arrow.svg';
import { Slider } from './Slider';
export const New = () => {
  let scrollStartPosition = 200;
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > scrollStartPosition) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div id="new" className="margin-container">
      <div className="relative-container">
        <div className="new-container">
          <a href="#logo">
            <img
              src={UpArrow}
              alt=""
              className={visible ? 'new-image' : 'new-image-hidden'}
            />
          </a>
          <h2 className="new-header">Новинки</h2>
          <Slider />
        </div>
      </div>
    </div>
  );
};
