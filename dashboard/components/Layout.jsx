import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
    return (
        <div className="container">
            <Sidebar />

            <div className="content">
                <Navbar />

                {children}
            </div>
        </div>
    );
}
