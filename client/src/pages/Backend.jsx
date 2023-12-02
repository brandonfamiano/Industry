import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Backend(){
    const [menu, setMenu] = useState([]);
    useEffect(() =>{
        axios.get('/menu').then(({ data }) =>{
            setMenu(data);
        })
        .catch((error) => {
            console.log('error'), error;
        })
    },);


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
                    </div>
                ))}  
            </div>
        </div>
    )
}

