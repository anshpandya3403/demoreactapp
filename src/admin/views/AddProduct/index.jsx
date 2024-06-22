import React from  'react';
import ProductForm from "../../components/ProductForm";
import axios from 'axios';
import AdminNav from '../../components/AdminNav';

const AddProduct = () => {
    

    const AddCallBack = async (childData) => {
        console.log(childData);
        const res = await axios.post('http://localhost:5000/api/admin/products',childData)
        .then(console.log(res.data));

            };


    return(
        <div>
            <AdminNav/>
            <ProductForm callbackFunction={AddCallBack}/>
        </div>
    );
};

export default AddProduct;
