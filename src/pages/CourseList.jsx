import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Mock data for now, replace with API call later
        // const fetchCourses = async () => {
        //   const response = await axios.get('http://127.0.0.1:8000/api/courses/');
        //   setCourses(response.data);
        // };
        // fetchCourses();
        setCourses([
            { id: 1, title: 'Mathematics 101', description: 'Basic Algebra and Geometry', instructor: 'Mr. Sharma' },
            { id: 2, title: 'Physics for JEE', description: 'Complete Physics for JEE Mains', instructor: 'Dr. Verma' },
        ]);
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Available Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <Link to={`/courses/${course.id}`} key={course.id} className="block">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold mb-2 text-blue-600">{course.title}</h2>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                            <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CourseList;
