import React, { useEffect, useState } from 'react';
import Titles from '../../Components/Shared/Titles';

const Recomand = () => {
    const [card, setCard] = useState([])
    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
            .then(data =>
                setMenu(data))
    },[])
    return (
        <div>
            <Titles subHeading={"Should Try"} heading={"CHEF RECOMMENDS"}></Titles>
            <div>
                
            </div>
        </div>
    );
};

export default Recomand;