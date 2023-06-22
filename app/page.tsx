"use client";
import Courses from "./components/Courses";
import { useState, useEffect } from "react";
import loadingPage from "./loading";
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCourses = async () => {
            const response = await fetch("/api/courses");
            const data = await response.json();
            setCourses(data);
            setLoading(false);
        };
        getCourses();
    }, []);

    if (loading) {
        return loadingPage;
    }

    return (
        <>
            <h1>Welcome to Next.js!</h1>
            <CourseSearch
                getSearchedCourses={(result: any) => {
                    setCourses(result);
                }}
            />
            <Courses courses={courses} />
        </>
    );
};

export default HomePage;
