import { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Plus, X } from 'lucide-react';
import { API_BASE_URL } from '../config';

const NotesManager = () => {
    const [notes, setNotes] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [newNote, setNewNote] = useState({
        title: '',
        content: ''
    });

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/notes`);
            setNotes(response.data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewNote({ ...newNote, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_BASE_URL}/api/notes`, newNote);
            setIsAdding(false);
            setNewNote({ title: '', content: '' });
            fetchNotes();
        } catch (error) {
            console.error("Error adding note:", error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this note?")) return;
        try {
            await axios.delete(`${API_BASE_URL}/api/notes/${id}`);
            fetchNotes();
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Manage Notes</h2>
                <button
                    onClick={() => setIsAdding(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center gap-2"
                >
                    <Plus size={20} /> Add New Note
                </button>
            </div>

            {isAdding && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-md w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">Add New Note</h3>
                            <button onClick={() => setIsAdding(false)} className="text-gray-500 hover:text-dark"><X size={24} /></button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Title</label>
                                <input type="text" name="title" value={newNote.title} onChange={handleInputChange} required className="w-full border rounded px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Content</label>
                                <textarea name="content" value={newNote.content} onChange={handleInputChange} required rows="5" className="w-full border rounded px-3 py-2"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90">
                                Add Note
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <div className="space-y-4">
                {notes.map(note => (
                    <div key={note.id} className="bg-white border rounded-lg p-4 shadow-sm flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-lg">{note.title}</h4>
                            <p className="text-gray-600 mt-1">{note.content}</p>
                            <span className="text-xs text-gray-400 mt-2 block">{note.dateCreated}</span>
                        </div>
                        <button
                            onClick={() => handleDelete(note.id)}
                            className="text-red-500 hover:bg-red-50 p-2 rounded"
                        >
                            <Trash2 size={20} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotesManager;
