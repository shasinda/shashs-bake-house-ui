import { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Plus, X } from 'lucide-react';
import { API_BASE_URL } from '../config';

const PortfolioManager = () => {
    const [items, setItems] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [newItem, setNewItem] = useState({
        title: '',
        description: '',
        category: 'Cake',
        image: null
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/portfolio`);
            setItems(response.data);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleImageChange = (e) => {
        setNewItem({ ...newItem, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('title', newItem.title);
        formData.append('description', newItem.description);
        formData.append('category', newItem.category);
        formData.append('image', newItem.image);

        try {
            await axios.post(`${API_BASE_URL}/api/portfolio`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setIsAdding(false);
            setNewItem({ title: '', description: '', category: 'Cake', image: null });
            fetchItems();
        } catch (error) {
            console.error("Error adding item:", error);
            alert("Failed to add item. Please check backend logs.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
        try {
            await axios.delete(`${API_BASE_URL}/api/portfolio/${id}`);
            fetchItems();
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Manage Portfolio</h2>
                <button
                    onClick={() => setIsAdding(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center gap-2"
                >
                    <Plus size={20} /> Add New Item
                </button>
            </div>

            {isAdding && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-md w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">Add New Item</h3>
                            <button onClick={() => setIsAdding(false)} className="text-gray-500 hover:text-dark"><X size={24} /></button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Title</label>
                                <input type="text" name="title" value={newItem.title} onChange={handleInputChange} required className="w-full border rounded px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea name="description" value={newItem.description} onChange={handleInputChange} required className="w-full border rounded px-3 py-2"></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Category</label>
                                <select name="category" value={newItem.category} onChange={handleInputChange} className="w-full border rounded px-3 py-2">
                                    <option value="Cake">Cake</option>
                                    <option value="Pastry">Pastry</option>
                                    <option value="Bread">Bread</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Image</label>
                                <input type="file" onChange={handleImageChange} required className="w-full" />
                            </div>
                            <button type="submit" disabled={loading} className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 disabled:opacity-50">
                                {loading ? 'Uploading...' : 'Add Item'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(item => (
                    <div key={item.id} className="bg-white border rounded-lg overflow-hidden shadow-sm relative group">
                        <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h4 className="font-bold">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.category}</p>
                        </div>
                        <button
                            onClick={() => handleDelete(item.id)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioManager;
