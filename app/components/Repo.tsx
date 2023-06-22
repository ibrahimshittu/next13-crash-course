import { NextPage } from "next";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

type PageProps = {
    name: string;
};

const getRepos = async (name: string) => {
    const response = await fetch(`https://api.github.com/repos/ibrahimshittu/${name}`, {
        next: {
            revalidate: 60,
        },
    });
    const data = await response.json();
    return data;
};

const Repo: NextPage<PageProps> = async ({ name }) => {
    const repo = await getRepos(name);

    console.log(repo);

    return (
        <>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <div className="card-stats">
                <div className="card-stat">
                    <span>
                        <FaStar />
                        {repo.stargazers_count}
                    </span>
                </div>
                <div className="card-stat">
                    <span>
                        <FaCodeBranch />
                        {repo.forks_count}
                    </span>
                </div>
                <div className="card-stat">
                    <span>
                        <FaEye />
                        {repo.watchers_count}
                    </span>
                </div>
            </div>
        </>
    );
};

export default Repo;
