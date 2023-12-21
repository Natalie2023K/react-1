import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import bedRoom from './bed.room.svg';
import bathRoom from './bath-room.svg';
import bed from './bed.svg';
import guest from './guest.svg'


export default function Details({title, property__details}) {
    return (
        <Box shadow className='details__block'>
            <Heading border>{title}</Heading>
           <List  {...property__details}/>
        </Box>
    )
}
function List ({guests = 0, bedrooms = 0, beds = 0, baths = 0}) {
    return (
        <ul className="details__description">
            <ListItem imageSrc={guest}>
            <span>{guests}</span>
            <span>Гостей</span>
            </ListItem>
      
       
         <ListItem imageSrc={bedRoom}>
         <span>{bedrooms}</span>
         <span>Спальня</span>
         </ListItem>

         <ListItem imageSrc={bed}>
         <span>{beds}</span>
         <span>Ліжка</span>
         </ListItem>


         <ListItem imageSrc={bathRoom}>
         <span>{baths}</span>
         <span>Ванна кімната</span>
         </ListItem>



         </ul>
    )
}