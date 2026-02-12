import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        // Mock data
        setCourse({
            id: id,
            title: 'Mathematics 101',
            description: 'Basic Algebra and Geometry',
            chapters: [
                { id: 1, title: 'Algebra Basics', contents: [{ id: 1, title: 'Introduction', type: 'VIDEO' }] },
                { id: 2, title: 'Geometry Basics', contents: [{ id: 2, title: 'Shapes', type: 'PDF' }] }
            ]
        });
    }, [id]);

    if (!course) return <div>Loading...</div>;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{course.title}</h1>
            <p className="text-lg text-gray-600 mb-8">{course.description}</p>

            <div className="space-y-6">
                {course.chapters.map((chapter) => (
                    <div key={chapter.id} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-blue-600">{chapter.title}</h2>
                        <ul className="space-y-2">
                            {chapter.contents.map((content) => (
                                <li key={content.id} className="flex items-center text-gray-700">
                                    <span className="mr-2">{content.type === 'VIDEO' ? '🎥' : '📄'}</span>
                                    {content.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseDetail;
