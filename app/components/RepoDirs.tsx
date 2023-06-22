import { NextPage } from "next";
import Link from "next/link";
import React from "react";

type PageProps = {
    name: string;
};

const getRepoContents = async (name: string) => {
    const response = await fetch(`https://api.github.com/repos/ibrahimshittu/${name}/contents`, {
        next: {
            revalidate: 60,
        },
    });
    const data = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return data;
};

const RepoDirs: NextPage<PageProps> = async ({ name }) => {
    const contents = await getRepoContents(name);

    const dirs = contents.filter((content: { type: string }) => content.type === "dir");
    return (
        <>
            <h3>
                {dirs.map((dir: { id: React.Key; path: string }) => (
                    <li key={dir.id}>
                        <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
                    </li>
                ))}
            </h3>
        </>
    );
};

export default RepoDirs;
