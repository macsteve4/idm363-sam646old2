import React from 'react';
import AdminCategories from '../components/AdminCategories/admincategories';
import Contbar from '../components/Contentbar/contentbar';

export default function Admin() {
    

    return (
      <>
        <Contbar />
       <h1 className="opener"><b>Edit Listings (Admin)</b></h1>
        <AdminCategories />
      </>
    );
}