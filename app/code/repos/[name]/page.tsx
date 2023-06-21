import { NextPage } from "next";
import Link from "next/link";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import { Suspense } from "react";

type PageProps = {
    params: {
        name: string;
    };
};

const Page: NextPage<PageProps> = ({ params }) => {
    const { name } = params;

    return (
        <div className="card">
            <Link href="/code/repos" className="btn btn-back">
                Back to Repos
            </Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    );
};

export default Page;
