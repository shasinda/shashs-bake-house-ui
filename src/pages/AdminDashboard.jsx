import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PortfolioManager from '../components/PortfolioManager';
import NotesManager from '../components/NotesManager';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('portfolio'); // portfolio, notes

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <span className="text-xl font-serif font-bold text-primary">Admin Dashboard</span>
                        </div>
                        <div className="flex items-center">
                            <button onClick={handleLogout} className="text-gray-600 hover:text-dark">Logout</button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex space-x-4 mb-8">
                    <button
                        onClick={() => setActiveTab('portfolio')}
                        className={`px-4 py-2 rounded-md ${activeTab === 'portfolio' ? 'bg-primary text-white' : 'bg-white text-gray-600'}`}
                    >
                        Portfolio Items
                    </button>
                    <button
                        onClick={() => setActiveTab('notes')}
                        className={`px-4 py-2 rounded-md ${activeTab === 'notes' ? 'bg-primary text-white' : 'bg-white text-gray-600'}`}
                    >
                        Notes / Blog
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    {activeTab === 'portfolio' && <PortfolioManager />}
                    {activeTab === 'notes' && <NotesManager />}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
