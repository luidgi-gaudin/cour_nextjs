/* eslint-disable react/no-unescaped-entities */

export default function AboutPage(){
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8">À propos de moi</h1>
            <div className="grid gap-8 md:grid-cols-2 items-center">
                {/* Section texte */}
                <div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Bonjour ! Je m'appelle Luidgi, et je suis un passionné de développement web et d'innovation technologique.
                        Mon objectif est de créer des solutions élégantes et performantes pour répondre aux besoins de mes clients.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Avec une solide expérience en développement frontend et backend, j'ai travaillé sur plusieurs projets variés, allant des sites
                        vitrine aux applications web complexes. J'aime explorer de nouvelles technologies et améliorer mes compétences en permanence.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        En dehors du développement, j'aime partager mes connaissances, apprendre de nouvelles choses, et collaborer avec des personnes
                        passionnées pour réaliser des projets innovants.
                    </p>
                </div>
            </div>

            {/* Section compétences */}
            <div className="mt-12">
                <h2 className="text-3xl font-bold mb-6">Mes compétences</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Développement frontend avec React, Next.js, et Tailwind CSS</li>
                    <li>Création de RESTful APIs et GraphQL avec Node.js et Express</li>
                    <li>Gestion de bases de données avec Prisma, MongoDB, et PostgreSQL</li>
                    <li>Automatisation et outils de scraping avec Puppeteer</li>
                    <li>Optimisation de performances et déploiement sur des plateformes cloud</li>
                </ul>
            </div>

            {/* Section contact */}
            <div className="mt-12 text-center">
                <h2 className="text-3xl font-bold mb-6">Envie de collaborer ?</h2>
                <p className="text-gray-700 mb-6">
                    Si vous êtes intéressé par mes compétences ou souhaitez discuter d'un projet, n'hésitez pas à me contacter.
                </p>
                <a
                    href="/contact"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Contactez-moi
                </a>
            </div>
        </div>
    );
}