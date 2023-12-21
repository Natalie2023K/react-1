import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import airport from './airport.svg';
import breakfast from './breakfast.svg';
import children from './children.svg';
import concierge from './concierge_service.svg';
import gym from './gym.svg';
import parking from './parking.svg';
import pets from './pets.svg';
import pool from './pool.svg';
import roomService from './room_service.svg';
import wifi from './wifi.svg';

export default function Amenities({title, amenities}) {
    return (
        <Box shadow className='amen__block'>
        <Heading border>{title}</Heading>
       <List  {...amenities}/>
    </Box>
    )
}
function List ({
    hasPool = true,
    hasGym = false,
    hasFreeBreakfast = true,
    hasFreeWiFi = true,
    hasParking = false,
    hasPetsAllowed = false,
    hasAirportShuttle = true,
    hasConciergeService = true,
    hasRoomService = false,
    hasChildFriendly = true,
}) {
    return (
        <ul className="amen__details">
            {hasPool && (
                <ListItem imageSrc={pool}>
                    <span>Басейн</span>
                </ListItem>
            )}
              {hasGym && (
                <ListItem imageSrc={gym}>
                    <span>Спортивний зал</span>
                </ListItem>
            )}
              {hasFreeBreakfast && (
                <ListItem imageSrc={breakfast}>
                    <span>Безкоштовний сніданок</span>
                </ListItem>
            )}
              {hasFreeWiFi && (
                <ListItem imageSrc={wifi}>
                    <span>Безкоштовний Wi-Fi</span>
                </ListItem>
            )}
              {hasParking && (
                <ListItem imageSrc={parking}>
                    <span>Безкоштовний вуличний паркінг</span>
                </ListItem>
            )}
              {hasPetsAllowed && (
                <ListItem imageSrc={pets}>
                    <span>Дозволено розміщення з домашніми тваринами</span>
                </ListItem>
            )}
              {hasAirportShuttle && (
                <ListItem imageSrc={airport}>
                    <span>Трансфер до/з аеропорту</span>
                </ListItem>
            )}
             {hasConciergeService && (
                <ListItem imageSrc={concierge}>
                    <span>Консьєрж-сервіс</span>
                </ListItem>
            )}
            
             {hasRoomService && (
                <ListItem imageSrc={roomService}>
                    <span>Обслуговування номерів</span>
                </ListItem>
            )}
             {hasChildFriendly && (
                <ListItem imageSrc={children}>
                    <span>Підходить для дітей</span>
                </ListItem>
            )}
        </ul>
    )
}
