import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
import Footer from '../Footer';

const Layout = () => {
    return (
        <div className="App">
            <><Sidebar /></>
            <div className='Page'>
                <span className='tags top-tags'>&lt;body&gt;</span>

                <Outlet />

                <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br />
                <span className='bottom-tag-html'>&lt/html&gt;</span>
                </span>  
                  
                <Footer />
            </div>
        </div>

    )
}


export default Layout