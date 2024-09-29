import { Link } from "react-router-dom";
import './card.css'

function Card(props) {

    const href = "/"

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
                    <h3>{props.date}</h3>
                </div>
            </div>
        </Link>
    );
}

export default Card;