import { useEffect, useState } from "react";
import Titles from "../../Components/Shared/Titles";
import MenuItem from "../../Components/Shared/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="mb-12">
            <Titles
                heading="From Our Menu"
                subHeading="Popular Items"
            ></Titles>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
            <button className="btn btn-outline border-0 border-b-4 mt-5 uppercase">View Full Menu</button>

            </div>
        </section>
    );
};

export default PopularMenu;