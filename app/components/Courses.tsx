import { NextPage } from "next";
import Link from "next/link";

type PageProps = {
    courses: {
        id: React.Key;
        title: string;
        description: string;
        link: string;
        level: string;
    }[];
};

const Courses: NextPage<PageProps> = async ({ courses }) => {
    return (
        <div className="courses">
            <h2>Courses</h2>
            {courses.map(
                (course: {
                    id: React.Key;
                    title: string;
                    description: string;
                    link: string;
                    level: string;
                }) => (
                    <div key={course.id} className="card">
                        <h3>{course.title}</h3>
                        <small>{course.level}</small>
                        <p>{course.description}</p>
                        <Link href={course.link} target="_blank" className="btn">
                            Go to course
                        </Link>
                    </div>
                )
            )}
        </div>
    );
};

export default Courses;
