import React,{useEffect,useState} from "react";
import axios from 'axios';
import ProductForm from '../../components/ProductForm';
import {useParams} from 'react-router-dom';
import AdminNav from "../../components/AdminNav";

const EditProduct = () => {
    console.log('Edit Page rendered');
    const [product, setProduct] = useState({});
    const {id} = useParams();
    console.log(id);
    
    useEffect(() => {
        const fetchProduct = async () => {
            console.log("Fetching product");
            const result = await axios.get(`http://localhost:5000/api/products/${id}`);
            setProduct(result.data);
            console.log(result.data);
        };
        fetchProduct();

    },[]);
    const EditCallBack = async (childData) => {
        console.log(childData);
        
        const res = await axios.put(`http://localhost:5000/api/admin/editproduct/${id}`,childData);
        console.log(res.data);
    //    window.location.reload();
    };

return(<div>
    <AdminNav/>
        <div>
        <ProductForm callbackFunction={EditCallBack} product={product} type={'edit'}/>
        </div>
    </div>);

};
export default EditProduct;
