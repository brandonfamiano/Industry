import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Backend(){
    //use to get menu items from database//
    const [menu, setMenu] = useState([]);
    useEffect(() =>{
        axios.get('/menu').then(({ data }) =>{
            setMenu(data);
        })
        .catch((error) => {
            console.log('error'), error;
        })
    },[]);

    //assigns menu items to a card, view button links to an individual page about the item with more details//
    return (
        <div className='menu'>
            Menu
            <div className="container">
                {menu.length > 0 && 
                menu.map((item) =>(
                    <div className='card'>
                        <img src={item.photo} alt="" />
                        <h3>{item.name}</h3>
                        <h2>{item.category}</h2>
                        <h2>{item.price}</h2>
                        <Link to={'`/menu/${item._id'}>View</Link>
                    </div>
                ))}  
            </div>
        </div>
    )
}

