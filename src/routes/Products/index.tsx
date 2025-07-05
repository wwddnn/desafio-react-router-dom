import { NavLink, Outlet } from 'react-router-dom';
import './styles.css';

export default function Products() {

    return(
        <main>
        <section>
                <nav className="card-top container mt20">
                    <NavLink to="/products/computers" className={({isActive}) => isActive ? "text-card menu-active" : "text-card"} >
                        <p>Computadores</p>       
                    </NavLink>
                    <NavLink to="/products/electronics" className={({isActive}) => isActive ? "text-card menu-active" : "text-card"}>
                        <p>Eletrônicos</p>       
                    </NavLink>
                    <NavLink to="/products/books" className={({isActive}) => isActive ? "text-card menu-active" : "text-card"}>
                        <p>Livros</p>       
                    </NavLink>
                </nav>
        </section>

        <section>
            <Outlet />  
        </section>        
        </main>
    );
}