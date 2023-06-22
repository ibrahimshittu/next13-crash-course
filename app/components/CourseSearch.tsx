"use client";
import { NextPage } from "next";
import React, { useState } from "react";

type Props = {
    getSearchedCourses: (data: any) => void;
};

const CourseSearch: NextPage<Props> = ({ getSearchedCourses }) => {
    const [search, setSearch] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch(`/api/courses/search?query=${search}`);
        const data = await res.json();
        getSearchedCourses(data);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="search-input"
                placeholder="Search Courses"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>
    );
};

export default CourseSearch;
