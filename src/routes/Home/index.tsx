import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function Home() {

    return (        
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}