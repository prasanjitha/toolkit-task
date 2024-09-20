
import {
    Outlet,
} from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Styles from './Root.module.css';

const RootLayout = () => {

    return (
        <div 
           className={Styles.rootLayout}
        >
           <Navbar/>
            <main className={Styles.mainLayout}>
                <Outlet />
            </main>
           <Footer/>
        </div>
    );
};

export default RootLayout