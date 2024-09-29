import { Link } from "react-router-dom";
import './card.css';

function Card(props) {

    const href = "/"

    return (
        <Link to={href} style={{textDecoration: 'none'}}>
            <div className="card-container">
                <div className="card-text-container">
                    <div className="first-row">
                        <h2><strong>{props.orgName}</strong></h2>
                        <h2 id="price">${props.price}</h2>
                        <h2 id="org-name">{props.eventName}</h2>
                    </div>
                    <hr />
                    <div className="second-row">
                        <h3>| {props.description} |</h3>
                        <h3>{props.cuisine}</h3>
                        <h3>Calories Per $: {props.caloriePerDollar}</h3>
                    </div>
                    <div className="third-row">
                        <h3>{props.address}</h3>
                        <h3 id="date">{props.date}</h3>
                        <h3 id="date">{props.time}</h3>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;
