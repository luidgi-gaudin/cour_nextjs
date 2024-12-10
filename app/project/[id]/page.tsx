'use client';

import { useRouter } from "next/navigation";
import { projects } from "@/app/project/projects";
import React from "react";

export default function DetailsProject({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();

    const [resolvedParams, setResolvedParams] = React.useState<{ id: string } | null>(null);

    React.useEffect(() => {
        params.then((data) => {
            setResolvedParams(data);
        });
    }, [params]);

    if (!resolvedParams) {
        return <div>Loading...</div>;
    }

    const projet = projects.find((project) => project.id === Number(resolvedParams.id));

    return (
        <div className="p-8 font-sans">
            <h2>{projet?.title}</h2>
            <p>{projet?.description}</p>
            <p>{projet?.details}</p>
            <br />
            <a
                onClick={() => router.back()}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
                revenir aux projets
            </a>
        </div>
    );
}
