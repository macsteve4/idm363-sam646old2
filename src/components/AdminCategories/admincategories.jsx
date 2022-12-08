import React from "react";
import { db } from '../../firestore';
import { collection, getDocs, } from 'firebase/firestore';
import { useState, useEffect } from "react";
import RamenEdit from "../../components/RamenEdit/ramenedit";
import './admincategories.css';

export default function AdminCategories(){
    const [ramenproducts, setProducts] = useState([])
    useEffect(() => {
        const getProducts = () => {
            const productsList = []
            getDocs(collection(db, "noodles")).then((QuerySnapshot) => {
                QuerySnapshot.forEach((doc) => {
                    const productData = {
                        keyName: doc.id,
                        ...doc.data(),
                    }
                    productsList.push(productData);
                })
                setProducts(productsList)
            }).catch((error) => {
                console.log(error.message)
            })
        }
        getProducts()
    },[]    
    )
    
    useEffect(() => {
        console.log(ramenproducts);
        }, [ramenproducts])  
  
    return (
        <div className="edit-box">
        
        <div className="ramenEdits">
                {ramenproducts.map((product) => {
                    console.log(product)
                    return <RamenEdit key={product.id} item={product} />
                })}
            </div>
            </div>
    )
  }