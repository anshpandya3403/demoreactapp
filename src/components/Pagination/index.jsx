import React,{useState,useEffect} from 'react';


const Pagination = ({itemsPerPage}) => {
    const [totalItems,setTotalItems] = useState(194);
    const [limit,setLimit] = useState(0);
    const [skip,setSkip] = useState(0);
    const [currentPage,setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const pages = [];
    for(let i=1; i<=totalPages; i++){
        pages.push(i);
    }
    console.log(currentPage);
    useEffect(() =>{
     setLimit(itemsPerPage);
     setSkip((currentPage-1)*itemsPerPage);
    },[currentPage]);
    return(
        <div>
            <ul>
            {pages.map((page)=>{
                return(
                    <li key={page} onClick={()=>setCurrentPage(page)}>{page}</li>
                )
            })}
            </ul>
        </div>
        

    )
};
export default Pagination;