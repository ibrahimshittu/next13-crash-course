import courses from "./data.json";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(courses);
}

export async function POST(req: {
    json: () => Promise<{ title: any; description: any; level: any; link: any }>;
}) {
    const { title, description, level, link } = await req.json();
    const newCourse = {
        id: courses.length + 1,
        title,
        description,
        level,
        link,
    };
    courses.push(newCourse);
    return NextResponse.json(newCourse);
}
