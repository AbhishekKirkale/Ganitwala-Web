import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Bell, LogOut } from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        navigate('/login');
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white p-8">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex justify-between items-center mb-12 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl"
            >
                <h1 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Ganitwala Dashboard
                </h1>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 bg-red-500/20 hover:bg-red-500/40 text-red-200 px-6 py-2 rounded-full border border-red-500/30 transition-all duration-300"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    onClick={() => navigate('/courses')}
                    className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-2xl cursor-pointer group hover:bg-white/20 transition-all"
                >
                    <div className="bg-blue-500/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/50 transition-colors">
                        <BookOpen className="text-blue-200" size={28} />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-white">My Courses</h2>
                    <p className="text-blue-100/70">Access your enrolled courses and continue learning where you left off.</p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-2xl group hover:bg-white/20 transition-all"
                >
                    <div className="bg-green-500/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/50 transition-colors">
                        <TrendingUp className="text-green-200" size={28} />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-white">Progress</h2>
                    <p className="text-green-100/70">Track your performance and view your learning analytics.</p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-2xl group hover:bg-white/20 transition-all"
                >
                    <div className="bg-purple-500/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/50 transition-colors">
                        <Bell className="text-purple-200" size={28} />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-white">Announcements</h2>
                    <p className="text-purple-100/70">Stay updated with the latest news, exams, and schedule changes.</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Dashboard;
