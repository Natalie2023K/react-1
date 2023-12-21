import "./index.css";
import ava from './Ellipse 3.png';
import ListItem from '../list-item';

export default function Contact({
    name,
    title,
    image,
    response_rate,
    response_time,
    info,
    phone,
}) {
    return (
       <div className="contact">
        <ListItem>
            <h1 className="contact__title">{title}</h1>
            <img className="contact__ava" src={ava} alt={name} height={80} width={80}/>
        </ListItem>
        <p className="contact__info">{info}</p>
        <div className="contact__sub--block">
            <div className="contact__sub--in">{phone}</div>
            <div className="contact__sub--in">{response_rate}</div>
            <div className="contact__sub--in">{response_time}</div>
        </div>

       </div>
    )
}