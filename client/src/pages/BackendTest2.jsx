import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

//create new item functionality//
export default function BackendTest2(){
    const [name,setName] =useState('');
    const [category,setCategory] = useState('');
    const [price,setPrice] = useState('');
    const [description,setDescription] = useState('');
    const [photo,setPhotos] = useState('');
    const [redirect, setRedirect] =useState(false);


    //posts the new item to database, will throw an error if the price is not a number, etc//
    async function handleAddItem(e){
        e.preventDefault();
        try{
            await axios.post('/menu', {
                name,
                category,
                price,
                description,
                photo,
            })
            setRedirect(true)
        } catch(e){
            alert("Error adding items")
        }
    } if (redirect){
        return <Navigate to={'/'}/>
    }
    return(
        <div>
            
            <span>
            <form onSubmit={handleAddItem}>
                <input type='text' placeholder='Name' value={name} onChange={ev => setName(ev.target.value)}/>
                <input type='text' placeholder='Category'value={category} onChange={ev => setCategory(ev.target.value)}/>
                <input type='text' placeholder='Price'value={price} onChange={ev => setPrice(ev.target.value)}/>
                <input type='text' placeholder='Description' value={description} onChange={ev => setDescription(ev.target.value)}/>
                <input type='text' placeholder='Link a photo' value={photo} onChange={ev => setPhotos(ev.target.value)} />
            <button>Submit</button>
            </form>
            </span>           
        </div>
    )
}