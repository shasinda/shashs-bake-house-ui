import { useState } from 'react';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (newPassword !== confirmPassword) {
            setError("New passwords don't match");
            return;
        }

        try {
            const username = localStorage.getItem('username') || 'admin';
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/auth/change-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, oldPassword, newPassword }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');
            } else {
                setError(data.error || 'Failed to change password');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-serif font-bold text-dark mb-4">Change Password</h3>
            {message && <p className="text-green-600 mb-4">{message}</p>}
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleChangePassword} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                    <input
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-secondary hover:bg-secondary/80 text-dark font-medium py-2 px-4 rounded-md transition-colors"
                >
                    Update Password
                </button>
            </form>
        </div>
    );
};

export default ChangePassword;
