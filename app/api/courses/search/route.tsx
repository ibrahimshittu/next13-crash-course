import { NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(req: { url: string }) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    const filteredCourses = courses.filter((course: { title: string }) => {
        return course.title.toLowerCase().includes(query?.toLocaleLowerCase() || "");
    });
    return NextResponse.json(filteredCourses);
}
