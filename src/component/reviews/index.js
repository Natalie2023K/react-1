import "./index.css";
import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";
export default function Reviews({list}) {
return <div className="guest__block">
    <Heading>Відгуки клієнтів</Heading>
    <div className="guest__list">
        {list.map(({id, ...rest}) => (
            <Fragment key={id}>
               <Item {...rest}/>
            </Fragment>
        ))}
    </div>
</div>
}
function Item ({guestName, rating = 0, review}) {
    return (
        <Box className='guest'>
            <span className="guest__name">{guestName}</span>
            <span className="guest__rating">Рейтинг:  {rating}</span>
            <span className="guest__review">
                {review}
               
            </span>
        </Box>
    )
}