import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // await axios.post(`${API_BASE_URL}/api/contact`, formData);

            // Mock success
            setTimeout(() => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            }, 1000);
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-serif font-bold text-dark mb-8 text-center">Get in Touch</h1>
            <p className="text-center text-gray-600 mb-12">
                Have a question or want to place a custom order? Send us a message!
            </p>

            <div className="bg-white shadow-lg rounded-lg p-8">
                {status === 'success' ? (
                    <div className="text-center py-12">
                        <h3 className="text-2xl font-serif text-green-600 mb-4">Message Sent!</h3>
                        <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-6 text-primary hover:underline"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-md transition-colors disabled:opacity-70"
                        >
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'error' && (
                            <p className="text-red-500 text-center text-sm">Something went wrong. Please try again.</p>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;
