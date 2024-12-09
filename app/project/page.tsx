export default function ProjectsPage() {
    const projects = [
        {
            id: 1,
            title: 'Portfolio',
            description: 'Un portfolio moderne construit avec HTML et CSS.',
            link: 'https://luidgi-gaudin.fr',
            github: 'https://github.com/luidgi-gaudin/portfolio',
        },
        {
            id: 2,
            title: 'BMW AutoShow',
            description: 'Une application complète pour la gestion des tâches quotidiennes.',
            link: 'https://luidgi-gaudin.fr/page-portfolio/bmw%20autoshow/',
            github: 'https://github.com/luidgi-gaudin/TP-FINAL-HTML-CSS-JS',
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Projets</h1>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
                    >
                        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex space-x-4">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Visiter
                            </a>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}