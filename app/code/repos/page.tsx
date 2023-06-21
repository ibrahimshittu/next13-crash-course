import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const getRepos = async () => {
    const response = await fetch("https://api.github.com/users/ibrahimshittu/repos");
    const data = await response.json();
    return data;
};

const ReposPage = async () => {
    const repos = await getRepos();

    console.log(repos);
    return (
        <div className="repos-container">
            <h2>Repositories</h2>
            <ul className="repos-list">
                {repos.map(
                    (repo: {
                        id: React.Key;
                        name: String;
                        full_name: String;
                        description: String;
                        stargazers_count: React.ReactNode;
                        forks_count: React.ReactNode;
                        watchers_count: React.ReactNode;
                    }) => (
                        <li key={repo.id}>
                            <Link href={`/repos/${repo.name}`}>
                                <h3>{repo.name}</h3>
                                <p>{repo.description}</p>
                                <div className="repo-details">
                                    <span>
                                        <FaStar />
                                        {repo.stargazers_count}
                                    </span>
                                    <div>
                                        <FaCodeBranch />
                                        {repo.forks_count}
                                    </div>
                                    <div>
                                        <FaEye />
                                        {repo.watchers_count}
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default ReposPage;
