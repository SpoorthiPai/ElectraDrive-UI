import './HomeSectionVideo.css';
import ElectraDriveVid from '../../assets/electradrive-vid.mp4';

export default function HomeSectionVideo() {
  return (
    <div>
      <video className="video-background" autoPlay muted loop>
        <source src={ElectraDriveVid} type="video/mp4" />
      </video>
      <div className="overlay">
        <div>
          <h1>Experience ElectraDrive</h1>
          <h5>Schedule a demo drive today</h5>
        </div>
        <div>
          <button>Demo Drive</button>
        </div>
      </div>
    </div>
  );
}
