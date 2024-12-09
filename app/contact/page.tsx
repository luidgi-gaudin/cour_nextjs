export default function ContactPage() {
    return (
        <div className="p-8 bg-gray-50 min-h-screen flex justify-center items-center">
            <form
                action="https://formspree.io/f/xwpkbjqn"
                method="POST"
                className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg"
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contactez-nous</h2>

                <div className="mb-4">
                    <label
                        htmlFor="firstname"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Prénom :
                    </label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
                        placeholder="Entrez votre prénom"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="lastname"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Nom :
                    </label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
                        placeholder="Entrez votre nom"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Votre email :
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
                        placeholder="Entrez votre adresse email"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Sujet :
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
                        placeholder="Entrez le sujet de votre message"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Votre message :
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
                        placeholder="Entrez votre message"
                        required
                    ></textarea>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    );
}
