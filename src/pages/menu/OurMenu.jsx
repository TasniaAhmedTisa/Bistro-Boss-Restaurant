import { Helmet } from 'react-helmet-async';
import Titles from '../../Components/Shared/Titles';
import Cover from '../../Components/Shared/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from '../home/PopularMenu';
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'


const OurMenu = () => {
    return (
        <div>
       <Helmet>
        <title>Bistro Boss | Menu</title>
       </Helmet>  
       <Cover img={menuImg} title={"our menu"} subtitle={"Would you like to try a dish?"}></Cover>
       <Titles subHeading={"Don't Miss"} heading={"Todays Offer" }></Titles> 
       <PopularMenu></PopularMenu> 
       <Cover img={desertImg} title={"DESSERTS"} subtitle={"Would you like to try a dish?"}></Cover>
       <PopularMenu></PopularMenu> 

       <Cover img={saladImg} title={"Salad"} subtitle={"Would you like to try a dish?"}></Cover>
       <PopularMenu></PopularMenu> 
       <Cover img={pizzaImg} title={"pizza"} subtitle={"Would you like to try a dish?"}></Cover>
       <PopularMenu></PopularMenu> 
       <Cover img={soupImg} title={"soup"} subtitle={"Would you like to try a dish?"}></Cover>
       <PopularMenu></PopularMenu> 

   
        </div>
    );
};

export default OurMenu;