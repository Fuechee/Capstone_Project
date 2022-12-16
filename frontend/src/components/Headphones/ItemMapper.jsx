import React from 'react'

const ItemMapper = ({data, itemName, itemComponent:ItemComponent}) => {
    return ( 
        <ul>
            {data.map(el => <ItemComponent key={el.id} {...{[itemName]:el}}/>)}
        </ul>
     );
}
 
export default ItemMapper;