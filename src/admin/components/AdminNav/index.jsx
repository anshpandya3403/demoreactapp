import {NavLink} from 'react-router-dom';

const AdminNav = () => {
    return (

    <header>
    <nav>
 <div className="navbar">  
    <ul>

        <li>
            <NavLink to="/admin">Home</NavLink>
        </li>

        <li>
            <NavLink to="/admin/orders">Orders</NavLink>
        </li>

        <li>
            <NavLink to="/admin/product">Products</NavLink>
        </li>
        
    </ul>
</div>
</nav>
</header>

    );
};
export default AdminNav;