import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
export default function BackendItemPageTest(){
    const {itemId} = useParams();
    const [itemDetails, setItemDetails] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const handleDeleteItem = async () =>{
        try {
            await axios.delete(`/trends/${itemId}`);
            setIsDeleted(true);
        } catch(error) {
            console.log("error")
        }
    };

    useEffect(()=>{
        axios.get(`/wardrobe/${itemId}`).then(({data})=>{
            setItemDetails(data);
        })
    },{itemId});
    if(isDeleted){
        return <Navigate to ='/trends'/>
    }
    if (!itemDetails){
        return <div>loading...</div>
    }
    return(
        <div className="itempage">
            <h1>{itemDetails.name}</h1>
            <img src={itemDetails.photo} alt="" />
            <h2>{itemDetails.price}</h2>
            <p>{itemDetails.description}</p>
            <button onClick={handleDeleteItem}>Delete Item</button>
        </div>
    )
}