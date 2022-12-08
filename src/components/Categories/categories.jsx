import React from "react";
import { db } from '../../firestore';
import { collection, getDocs, } from 'firebase/firestore';
import { useState, useEffect } from "react";
import RamenListing from "../../components/RamenListing/ramenlisting";
import './categories.css';

export default function Categories(){
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
        <div className="listing-box">
        
        <div className="ramenListings">
                {ramenproducts.map((product) => {
                    console.log(product)
                    return <RamenListing key={product.id} item={product} />
                })}
            </div>
            </div>
    )
  }