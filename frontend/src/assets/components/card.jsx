import { Link } from "react-router-dom";
import './card.css'

function Card(props) {

    const href = "/"

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
    const date_format = {
        day: dayNames[props.date.getDay()],
        month: monthNames[props.date.getMonth()],
        date: props.date.getDate()
    }

    const cardStyle = {
        backgroundColor: 'beige'
    };

    return (
        <Link to={href} style={{textDecoration: 'none'}}>
            <div className={'card-container'}>
                <div className="card-text-container">
                    <h2>{props.eventName}</h2>
                    <hr />
                    <p id="org-name">{props.orgName}</p>
                    <h3>{date_format.day + ", " + date_format.month + " " + date_format.date}</h3>
                </div>
            </div>
        </Link>
    );
}

export default Card;