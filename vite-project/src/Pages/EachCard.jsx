
import navIcon from '../images/navigation.png'
export default function EachCard(props) {
  return (
    <>
      <div className='each-card'>
        <img src={props.imageUrl} alt="Location Image" className='locationImage' />
        <div className='locationDetails'>
          <div className='header'>
            <div className='headerIcon'>
              <img className='navIcon' src={navIcon} alt="Navigation Icon" />
              <span>{props.location}</span>
            </div>
            <a href={props.googleMapUrls}>View on Google Map</a>
          </div>
          <h1>{props.title}</h1>
          <div className="date">
            <h3>{props.startDate} - {props.endDate}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>

    </>

  )
}