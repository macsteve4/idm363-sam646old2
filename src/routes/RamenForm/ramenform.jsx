import React from 'react'
import './ramenform.css';
import { useState, useEffect } from 'react';
import { db } from '../../firestore';
import { getDoc, doc, updateDoc, } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Contbar from '../../components/Contentbar/contentbar';
import { Link } from "react-router-dom";

export const RamenForm = () => {
    const [ product, setProducts ] = useState({})
        const [productImage, setProductImage] = useState('')
        const [productName, setProductName] = useState('')
        const [productSpice, setProductSpice] = useState('')
        const [productPrice, setProductPrice] = useState('')

    async function updateProduct() {
        await updateDoc(doc(db, "noodles", documentId),
            {
                img: productImage || product.img,
                name: productName || product.name,
                spice: productSpice || product.spice,
                price: productPrice || product.price,
            });
    }

    const { documentId } = useParams()
        console.log(documentId)

async function getProductByDocumentId() {
    const docRef = doc(db, "noodles", documentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setProducts(docSnap.data())

        } else {
            // doc.data() will be undefined in this case
            console.log("Nothing's found...");
            }
        }

            useEffect (() => {
                getProductByDocumentId()
            }, [])

            if (!product) {
                return <h1>Loading...</h1>
            }

return(
    <>
        <Contbar />
        <h1>Edit Item</h1>
      <div className='editform'>
      <form>
          <div className='name'>
              <input 
                  name='name'
                  
                  placeholder='Flavor Here'
                  type='text'
                  value={productName || product.name} 
                  onChange={(e) => setProductName(e.target.value)}
              />
          </div>
          <div className='image'>
              <input 
                  name='image'
                  placeholder='Image URL Here'
                  type='text'
                  value={productImage || product.img} 
                  onChange={(e) => setProductImage(e.target.value)}
              />
          </div>
          <div className='spice'>
              <input 
                  name='spice'
                  placeholder='Spiciness Here'
                  type='text'
                  value={productSpice || product.spice} 
                  onChange={(e) => setProductSpice(e.target.value)}
              />
          </div>
          <div className='price'>
              <input 
                  name='price'
                  placeholder='9.99'
                  type='number'
                  value={productPrice || product.price} 
                  onChange={(e) => setProductPrice(e.target.value)}
              />
          </div>
      </form>
      <button onClick={updateProduct}>Update Listing</button>
      <button><Link to="/admin">Back</Link></button>
  </div>
    </>
)
}
    