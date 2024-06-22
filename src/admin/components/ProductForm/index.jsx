import React, { useState ,useEffect} from 'react';



const ProductForm = ({callbackFunction,product,type}) => {
    console.log("Product Form rendered");
    console.log(product);
    
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [rating, setRating] = useState(0);
    
    

    useEffect(() => {
        if(type === 'edit'){
            console.log("Initilizing")
            setTitle(product.title);
            setPrice(product.price);
            setDescription(product.description);
            setThumbnail(product.thumbnail);
            setCategory(product.category);
            setBrand(product.brand);
            setRating(product.rating);
           
        }
    }, [product]);

   


    const handleSubmit = () => {        
            const newProductData = {
                title,
                price,
                description,
                thumbnail,
                category,
                brand,
                rating,
               
            };
            callbackFunction(newProductData);
            setTitle('');
            setPrice(0);
            setDescription('');
            setThumbnail('');
            setCategory('');
            setBrand('');
            setRating(0);
            
            //window.location.reload();
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" default value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <br/>
            <label>
                Price:
                <input type="number" default value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <br/>
            <label>
                Description:
                <input type="text" default value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <br/>
            <label>
                Thumbnail:
                <input type="text" default value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
            </label>
            <br/>
            <label>
                Category:
                <input type="text" default value={category} onChange={(e) => setCategory(e.target.value)} />
            </label>
            <br/>
            <label>
                Brand:
                <input type="text" default value={brand} onChange={(e) => setBrand(e.target.value)} />
            </label>
            <br/>
            <label>
                Rating:
                <input type="number" default value={rating} onChange={(e) => setRating(e.target.value)} pattern='[0-5]{1}'/>
            </label>
            <br/>
           
            <button type="submit">{(type==='edit')?"Edit":"Add Product"}</button>
        </form>
    );
};

export default ProductForm;