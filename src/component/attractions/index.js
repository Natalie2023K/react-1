import "./index.css";
import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";
import ListItem from "../list-item";
export default function Attractions({title, attractions}) {
return  (
    <Box shadow className='att__block'>
        <Heading border>{title}</Heading>
        <div className="att__list">
            {attractions.map(({id, ...rest}) => (
                  <Fragment key={id}>
                  <List {...rest}/>
               </Fragment>
            )

            ) }
        </div>
    </Box>
)
}
function List ({name, link}) {
    return (
        <ul className="att__link">
            <ListItem>
                <a href={link}>{name}</a>
            </ListItem>
        </ul>
    )
}

    
