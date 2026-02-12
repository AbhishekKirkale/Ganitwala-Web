import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Video, TrendingUp, Users, ChevronRight, Star, CheckCircle, GraduationCap, Layout as LayoutIcon, Atom, Award, Clock, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
            {/* 1. Navbar */}
            <nav className="flex justify-between items-center px-6 md:px-12 py-5 bg-white shadow-sm sticky top-0 z-50">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                     <img src="https://pbs.twimg.com/profile_images/1380130464929697795/rw1VErsX_400x400.jpg" alt="Ganitwala Logo" style={{ border: "2px solid #171717" }} className="w-12 h-12 rounded-xl object-cover"/>
                    {/* <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                        <GraduationCap size={24} />
                    </div> */}
                    <div className="flex flex-col leading-tight">
                        <span className="font-black text-xl text-gray-900 tracking-tight">Ganitwala</span>
                        <span className="text-xs text-gray-500 font-medium">Coaching Institute</span>
                    </div>
                </div>

                <div className="hidden md:flex gap-8 font-medium text-gray-600 text-sm" style={{ fontSize: "22px" }}>
                    <a href="#" className="hover:text-indigo-600 transition-colors bg-indigo-50 px-3 py-1 rounded-full text-indigo-700">Home</a>
                    <a href="#courses" className="hover:text-indigo-600 transition-colors py-1">Courses</a>
                    <a href="#" className="hover:text-indigo-600 transition-colors py-1">About</a>
                    <a href="#" className="hover:text-indigo-600 transition-colors py-1">Counseling</a>
                    <a href="#" className="hover:text-indigo-600 transition-colors py-1">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/login')}
                        className="font-semibold text-gray-600 hover:text-indigo-600 transition-all text-sm"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => navigate('/register')}
                        className="px-6 py-2.5 rounded-full font-bold text-white bg-indigo-700 hover:bg-indigo-800 transition-all shadow-lg shadow-indigo-200 text-sm"
                    >
                        Enroll Now
                    </button>
                </div>
            </nav>

            {/* 2. Hero Section */}
            <div className="relative bg-[#1a1b41] text-white py-20 px-6 overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 Q 50 50 100 100" stroke="white" strokeWidth="0.5" fill="none" />
                        <path d="M0 0 Q 50 50 100 0" stroke="white" strokeWidth="0.5" fill="none" />
                        <circle cx="80" cy="20" r="10" stroke="white" strokeWidth="0.5" fill="none" />
                        <rect x="10" y="50" width="10" height="10" stroke="white" strokeWidth="0.5" fill="none" transform="rotate(45 15 55)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block bg-orange-500/10 text-orange-400 border border-orange-500/20 px-4 py-1 rounded-full text-xs font-bold mb-6 flex items-center gap-2 w-fit">
                            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse animate-duration-2000"></span>
                            Admissions Open for 2025-26
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Master Mathematics <br /> with <span className="text-orange-400">Ganitwala</span>
                        </h1>
                        <p className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed">
                            Pune's premier coaching institute for JEE, NEET, and competitive exams.
                            Experience personalized learning, expert guidance, and proven results.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/register')}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-lg font-bold text-lg shadow-lg shadow-orange-900/20 transition-all flex items-center gap-2"
                            >
                                Start Your Journey <ChevronRight size={20} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border border-gray-600 hover:border-white text-white px-8 py-3.5 rounded-lg font-bold text-lg transition-all flex items-center gap-2"
                            >
                                <LayoutIcon size={20} /> Explore Courses
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Geometric Hero Image/Illustration Placement */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        {/* Simulated 3D Shapes based on screenshot */}
                        <div className="relative w-full h-[400px]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/30 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3771/3771278.png"
                                alt="Math Geometry"
                                className="absolute right-10 top-10 w-24 opacity-80 animate-bounce"
                                style={{ animationDuration: '3s' }}
                            />
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2641/2641457.png"
                                alt="Pyramid"
                                className="absolute left-20 bottom-20 w-32 opacity-80"
                            />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/5 text-9xl font-black select-none">
                                ∫dx
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 3. Benefits & Stats Section */}
            <div className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Text Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                            Why Ganitwala?
                        </div>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                            Where Mathematics Meets <span className="text-teal-600">Excellence</span>
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            At Ganitwala, we don't just teach—we inspire. Our unique approach combines rigorous academics with personalized mentoring to bring out the best in every student.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: <Atom size={20} />, title: 'Result-Oriented Teaching', desc: 'Our proven methodology focuses on conceptual clarity and exam-oriented preparation.' },
                                { icon: <Users size={20} />, title: 'Personalized Learning', desc: 'Small batch sizes ensure individual attention and customized learning paths.' },
                                { icon: <Award size={20} />, title: 'Expert Faculty', desc: 'Learn from IIT/NIT alumni and experienced educators with decades of expertise.' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex shrink-0 items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Blue Stats Card */}
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                            <h3 className="text-2xl font-bold mb-8 relative z-10">Our Track Record Speaks</h3>

                            <div className="grid grid-cols-2 gap-6 relative z-10">
                                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                    <div className="text-4xl font-black mb-1">15+</div>
                                    <div className="text-indigo-200 text-sm">Years of Excellence</div>
                                </div>
                                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                    <div className="text-4xl font-black mb-1">500+</div>
                                    <div className="text-indigo-200 text-sm">IIT Selections</div>
                                </div>
                                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                    <div className="text-4xl font-black mb-1">98%</div>
                                    <div className="text-indigo-200 text-sm">Pass Rate</div>
                                </div>
                                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                    <div className="text-4xl font-black mb-1">50+</div>
                                    <div className="text-indigo-200 text-sm">Top 100 Rankers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Courses Section */}
            <div id="courses" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                            Our Programs
                        </div>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                            Courses Designed for <span className="text-indigo-600">Your Success</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Choose from our carefully crafted courses designed by expert educators to help you achieve your academic goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Course 1 */}
                        <CourseCard
                            color="bg-indigo-600"
                            tag="Most Popular"
                            title="JEE Main & Advanced"
                            desc="Comprehensive preparation for IIT-JEE with expert faculty and proven strategies."
                            meta={['2 Years', '1200+ Students', '4.9']}
                            classInfo="Class 11-12"
                        />
                        <CourseCard
                            color="bg-teal-500"
                            tag="High Success"
                            title="NEET Preparation"
                            desc="Master Physics, Chemistry & Biology for medical entrance with our specialized curriculum."
                            meta={['2 Years', '800+ Students', '4.8']}
                            classInfo="Class 11-12"
                        />
                        <CourseCard
                            color="bg-orange-400"
                            tag="Fast Track"
                            title="MHT-CET Crash Course"
                            desc="Intensive preparation for Maharashtra Common Entrance Test with focused practice."
                            meta={['6 Months', '500+ Students', '4.7']}
                            classInfo="Class 12"
                        />
                        <CourseCard
                            color="bg-sky-400"
                            tag="Best Start"
                            title="Foundation Course"
                            desc="Build strong fundamentals in Maths & Science for future competitive exams."
                            meta={['1 Year', '600+ Students', '4.9']}
                            classInfo="Class 8-10"
                        />
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors">
                            View All Courses →
                        </button>
                    </div>
                </div>
            </div>

            {/* 5. Testimonials Section */}
            <div className="py-24 px-6 bg-indigo-50/50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                        Success Stories
                    </div>
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
                        What Our <span className="text-indigo-600">Students Say</span>
                    </h2>

                    <div className="bg-white p-12 rounded-3xl shadow-xl relative">
                        <div className="absolute top-8 left-8 text-indigo-100">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21L14.017 18C14.017 16.896 14.914 16 16.017 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H15.017C14.465 8 14.017 8.448 14.017 9H11.017C11.017 7.343 12.36 6 14.017 6H19.017C19.569 6 20.017 5.552 20.017 5V3H14.017C10.703 3 8.017 5.686 8.017 9V19C8.017 20.105 8.914 21 10.017 21H14.017ZM5.017 21L5.017 18C5.017 16.896 5.914 16 7.017 16H10.017C10.569 16 11.017 15.552 11.017 15V9C11.017 8.448 10.569 8 10.017 8H6.017C5.465 8 5.017 8.448 5.017 9H2.017C2.017 7.343 3.36 6 5.017 6H10.017C10.569 6 11.017 5.552 11.017 5V3H5.017C1.703 3 -0.983 5.686 -0.983 9V19C-0.983 20.105 -0.086 21 1.017 21H5.017Z" />
                            </svg>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Student"
                                className="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-6"
                            />
                            <div className="flex gap-1 text-yellow-400 mb-6">
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                            </div>
                            <p className="text-xl text-gray-700 italic mb-8 relative z-10">
                                "Ganitwala transformed my approach to problem-solving. The faculty's dedication and the structured curriculum helped me crack JEE Advanced with an excellent rank. Forever grateful!"
                            </p>
                            <div className="text-center">
                                <h4 className="font-bold text-lg text-gray-900">Priya Sharma</h4>
                                <p className="text-indigo-600 font-medium text-sm">JEE Advanced 2023 - AIR 234</p>
                                <p className="text-gray-400 text-xs mt-1">Student of 2-Year Classroom Program</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 6. CTA Section - Ready to Begin */}
            <div className="py-24 px-6 bg-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
                    <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
                        🗓️ Limited Seats Available
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                        Ready to Begin Your <span className="text-orange-400">Success Journey?</span>
                    </h2>

                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                        Take the first step towards your dream college. Book a free counseling session with our experts and discover the perfect learning path for you.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/register')}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-orange-900/20 w-full sm:w-auto flex justify-center items-center gap-2"
                        >
                            Enroll Now <ArrowRight size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg w-full sm:w-auto flex justify-center items-center gap-2 backdrop-blur-sm"
                        >
                            <Phone size={20} /> Book Free Counseling
                        </motion.button>
                    </div>

                    <div className="text-blue-200 text-sm font-medium">
                        Join 5000+ students who trusted Ganitwala for their success
                    </div>
                </div>
            </div>

            {/* 7. Footer Section */}
            <footer className="bg-[#0f172a] text-gray-300 pt-20 pb-10 px-6 border-t border-gray-800">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white">
                                <GraduationCap size={24} />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="font-black text-xl text-white tracking-tight">Ganitwala</span>
                                <span className="text-xs text-gray-400 font-medium">Coaching Institute, Pune</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Empowering students to achieve their dreams through quality education in Mathematics and Science. Your success is our mission.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin size={20} className="text-orange-500 shrink-0 mt-1" />
                                <span className="text-sm">Pune, Maharashtra, India</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={20} className="text-orange-500 shrink-0" />
                                <span className="text-sm">+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={20} className="text-orange-500 shrink-0" />
                                <span className="text-sm">info@ganitwala.edu</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Courses</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Our Courses */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Our Courses</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-orange-500 transition-colors">JEE Main & Advanced</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">NEET Preparation</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">MHT-CET</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Foundation (8-10)</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Support</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Counseling</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Student Login</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Enroll Now</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">FAQs</a></li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Ganitwala Coaching Institute. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all">
                            <Youtube size={18} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const CourseCard = ({ color, tag, title, desc, meta, classInfo }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group cursor-pointer"
    >
        <div className={`${color} h-28 relative p-6 flex items-start justify-between`}>
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                {tag}
            </span>
            <BookOpen className="text-white/30 w-16 h-16 absolute -bottom-4 -right-4 rotate-12 group-hover:scale-110 transition-transform" />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-500 text-sm mb-6 line-clamp-2">{desc}</p>

            <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 border-b border-gray-100 pb-6">
                <div className="flex items-center gap-1"><Clock size={14} /> {meta[0]}</div>
                <div className="flex items-center gap-1"><Users size={14} /> {meta[1]}</div>
                <div className="flex items-center gap-1 text-yellow-500 font-bold"><Star size={14} fill="currentColor" /> {meta[2]}</div>
            </div>

            <div className="flex justify-between items-center">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-xs font-semibold">
                    {classInfo}
                </span>
                <span className="text-indigo-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ChevronRight size={16} />
                </span>
            </div>
        </div>
    </motion.div>
);

export default Home;
