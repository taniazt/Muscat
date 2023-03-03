import { Button } from '../Atoms/Button';
import './Reviews.scss';

import Column11 from '../../images/review/column11.jpg';
import Column12 from '../../images/review/column12.jpg';
import Column21 from '../../images/review/column21.jpg';
import Column22 from '../../images/review/column22.jpg';
import Column31 from '../../images/review/column31.jpg';
import Column32 from '../../images/review/column32.jpg';
import Column41 from '../../images/review/column41.jpg';
import Column42 from '../../images/review/column42.jpg';
import Column51 from '../../images/review/column51.jpg';
import Column52 from '../../images/review/column52.jpg';
import MobileReview from '../../images/review-mobile.png';

export const Reviews = () => (
  <div id="review" className="review">
    <h2 className="review-header">Відгуки</h2>
    <div className="review-container">
      <div className="review-column">
        <img src={Column11} alt="" className="review-image" />
        <img src={Column12} alt="" className="review-image" />
      </div>
      <div className="review-column">
        <img src={Column21} alt="" className="review-image" />
        <img src={Column22} alt="" className="review-image" />
      </div>
      <div className="review-column">
        <img src={Column31} alt="" className="review-image" />
        <img src={Column32} alt="" className="review-image" />
      </div>
      <div className="review-column" id="column4">
        <img src={Column41} alt="" className="review-image" />
        <img src={Column42} alt="" className="review-image" />
      </div>
      <div className="review-column" id="column5">
        <img src={Column51} alt="" className="review-image" />
        <img src={Column52} alt="" className="review-image" />
      </div>
      <div className="review-mobile-container">
        <div className="review-mobile-text-container">
          <p className="review-mobile-name">@muscat.feedbacks</p>
          <p className="review-mobile-text">
            Більше 1000 відгуків задоволених клієнтів <br />
            зібрано у профілі
          </p>
          <Button variant="secondary" text="Дивитись більше" />
          <img
            src={MobileReview}
            alt="Mobile Instagram"
            className="review-mobile-image"
          />
        </div>
      </div>
    </div>
    <div className="review-mobile-small-text-container">
      <p className="review-mobile-small-name">@muscat.feedbacks</p>
      <p className="review-mobile-small-text">
        Більше 1000 відгуків задоволених клієнтів зібрано у профілі
      </p>
      <Button variant="secondary" text="Дивитись більше" />
    </div>
  </div>
);
