import GuestLayout from "@/layouts/GuestLayout";

export default function About() {
    return (
        <GuestLayout>
            <div className="max-w-3xl mx-auto text-white space-y-8 py-10">

                <h1 className="text-2xl font-bold text-center text-purple-400">
                    Sobre o Projeto
                </h1>

                <p className="text-center text-gray-200">
                    Este sistema foi desenvolvido como demonstração prática de CRUD usando Laravel
                    combinado com um front-end em React utilizando Inertia.js.
                </p>

                <div className="bg-gray-800/40 p-6 rounded-lg shadow-md border border-gray-700">
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">Tecnologias Utilizadas</h2>

                    <ul className="list-disc list-inside space-y-1 text-gray-200">
                        <li>Laravel 11 — Backend e roteamento</li>
                        <li>PHP 8 — Base do servidor</li>
                        <li>Inertia.js — Ponte entre Laravel e React</li>
                        <li>React + TypeScript — UI dinâmica e tipada</li>
                        <li>TailwindCSS — Estilização rápida e componentizada</li>
                        <li>Ziggy — Geração de rotas Laravel no front</li>
                        <li>MySQL — Banco de dados relacional</li>
                    </ul>
                </div>

                <div className="bg-gray-800/40 p-6 rounded-lg shadow-md border border-gray-700">
                    <h2 className="text-xl font-semibold text-purple-300 mb-3">Funcionalidades</h2>

                    <ul className="list-disc list-inside space-y-1 text-gray-200">
                        <li>Cadastro, listagem, edição e exclusão de posts</li>
                        <li>Validação backend com FormRequest</li>
                        <li>Componentização e layouts reutilizáveis</li>
                        <li>SPA real com navegação instantânea via Inertia</li>
                    </ul>
                </div>

                <footer className="mt-14 text-sm text-gray-500 text-center">
                    ©
                    <a
                        href="https://www.vetor256.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-200 transition-colors ml-1"
                    >
                        Vetor256.
                    </a>
                    {" "}{new Date().getFullYear()} - Built for learning and professional growth.
                </footer>
            </div>
        </GuestLayout>
    );
}
