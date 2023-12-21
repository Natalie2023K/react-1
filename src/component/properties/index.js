import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
export default function Properties({title, properties }) {
    return (
       <Box shadow className='prop'>
        <Heading border>{title}</Heading>
        <List {...properties}/>

       </Box>
    )
}
function List ({
    house_rules = '',
    cancellation_policy = '',
    local_transportation = '',
    host_language,
    special_offers ,
    "check-in_instructions" :checkin,

}) {
    // host_language = host_language.join(", ")
    return (
        <ul className="properties__details">
      { house_rules &&(<ListItem title='Правила дому'>
        <span>{house_rules}</span>
        </ListItem>
        )}



      { cancellation_policy &&(<ListItem title='Політика скасування'>
        <span>{cancellation_policy}</span>
        </ListItem>
        )}

{ local_transportation &&(<ListItem title='Місцевий транспорт'>
        <span>{local_transportation}</span>
        </ListItem>
        )}



{ host_language &&(<ListItem title='Мови хоста'>
        <span>{host_language}</span>
        </ListItem>
        )}



{ special_offers &&(<ListItem title='Спеціальні пропозиції:'>
        <span>{special_offers}</span>
        </ListItem>
        )}



{ checkin &&(<ListItem title='Інструкції щодо реєстрації'>
        <span>{checkin}</span>
        </ListItem>
        )}
        </ul>
    )
}