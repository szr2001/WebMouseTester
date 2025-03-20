import './PhoneWarning.css'
import phoneImg from '../../assets/pc.png'

function PhoneWarning() {
  return (
      <div className="phoneWarning">
          <img className="phoneWarning-img" src={phoneImg} />
          <p className="phoneWarning-text">Only available on desktop devices!</p>
      </div>
  );
}

export default PhoneWarning;