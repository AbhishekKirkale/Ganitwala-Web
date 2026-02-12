import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('STUDENT');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await axios.post('http://127.0.0.1:8000/api/register/', {
                username,
                password,
                email,
                role
            });
            alert('Registration successful! Please login.');
            navigate('/login');
        } catch (err) {
            console.error('Registration failed', err);
            if (err.response && err.response.data) {
                // Display specific error messages from Django
                const errorData = err.response.data;
                let errorMessage = 'Registration failed: ';
                // If it's a list (like non_field_errors), join them
                if (Array.isArray(errorData)) {
                    errorMessage += errorData.join(', ');
                } else if (typeof errorData === 'object') {
                    // If it's a dictionary of field errors
                    for (const key in errorData) {
                        errorMessage += `${key}: ${errorData[key]} `;
                    }
                } else {
                    errorMessage += JSON.stringify(errorData);
                }
                setError(errorMessage);
            } else {
                setError('Registration failed. Please check your connection and try again.');
            }
        }
    };

    return (
        <div className="flex h-screen w-full overflow-hidden">
            {/* Left Side - Artistic Background */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-900 via-purple-900 to-black relative justify-center items-center overflow-hidden"
            >
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30 -top-20 -left-20"></div>
                <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30 bottom-0 right-0"></div>

                <div className="z-10 text-center p-12">
                    <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">
                        Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Mathematics</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-md mx-auto leading-relaxed">
                        Join Ganitwala today and unlock your potential with world-class coaching and personalized guidance.
                    </p>
                </div>
            </motion.div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex justify-center items-center bg-gray-50 relative">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-md p-8"
                >
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <h2 className="text-3xl font-bold mb-2 text-gray-900">Create Account</h2>
                        <p className="text-gray-500 mb-8">Sign up to get started with your learning journey.</p>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 text-sm rounded"
                                role="alert"
                            >
                                <p>{error}</p>
                            </motion.div>
                        )}

                        <form onSubmit={handleRegister} className="space-y-5">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2 text-sm">Username</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2 text-sm">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                                    placeholder="john@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2 text-sm">Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2 text-sm">I am a</label>
                                <div className="relative">
                                    <select
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all appearance-none"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        <option value="STUDENT">Student</option>
                                        <option value="FACULTY">Faculty</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                type="submit"
                                className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 mt-4"
                            >
                                Create Account
                            </motion.button>
                        </form>
                        <p className="mt-8 text-center text-gray-500 text-sm">
                            Already have an account? <a href="/login" className="text-indigo-600 font-bold hover:underline">Log In</a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;
