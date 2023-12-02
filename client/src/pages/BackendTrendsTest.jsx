import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function BackendTrendsTest(){
    //use to get trend items from database//
    const [trends, setTrends] = useState([]);
    useEffect(() =>{
        axios.get('/trends').then(({ data }) =>{
            setTrends(data);
        })
        .catch((error) => {
            console.log('error'), error;
        })
    },[]);

    //assigns trend items to a card, view button links to an individual page about the item with more details//
    return (
        <div className='trends'>
            Trends
            <div className="container">
                {trends.length > 0 && 
                trends.map((item) =>(
                    <div className='card'>
                        <img src={item.photo} alt="" />
                        <h3>{item.name}</h3>
                        <h2>{item.price}</h2>
                        <h2>{item.description}</h2>
                        <Link to={'`/trends/${item._id'}>View</Link>
                    </div>
                ))}  
            </div>
        </div>
    )
}

