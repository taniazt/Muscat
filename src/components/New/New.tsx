import './New.scss';
import { Slider } from './Slider';
export const New = () => (
  <div id="new" className="margin-container">
    <div className="relative-container">
      <div className="new-container">
        <h2 className="new-header">Новинки</h2>
        <Slider />
      </div>
    </div>
  </div>
);
