import { Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/layouts/GuestLayout";

interface Post {
    id: number;
    title: string;
    author: string;
    body: string;
    created_at?: string;
    updated_at?: string;
}

export default function Show({ post }: { post: Post }) {

    const { data, setData, put, processing, errors } = useForm({
        author: post.author || "",
        title: post.title || "",
        body: post.body || "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        put(`/posts/${post.id}`);
    };
    return (
        <GuestLayout>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-8 text-left">
                    <h1 className="mx-auto text-xl">Update {post.title}</h1>
                    <label>
                        Title
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="block w-full rounded-md border-0 p-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-50"
                        />
                        {errors.title && <p className="text-red-400 text-sm">{errors.title}</p>}
                    </label>
                    <label>
                        Author
                        <input
                            type="text"
                            value={data.author}
                            onChange={(e) => setData("author", e.target.value)}
                            className="block w-full rounded-md border-0 p-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-50"
                        />
                        {errors.author && <p className="text-red-400 text-sm">{errors.author}</p>}
                    </label>
                    <label>
                        Main Content
                        <textarea
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                            className="block w-full rounded-md border-0 p-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-50"
                        >
                        </textarea>
                        {errors.body && <p className="text-red-400 text-sm">{errors.body}</p>}
                    </label>
                </div>
                <div className="flex gap-4">
                    <Link
                        href="/"
                        className="inline-block px-4 py-2 mt-4 text-black bg-gray-100 border rounded-md hover:bg-gray-400"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={processing}
                        className="px-4 py-2 mt-4 text-white bg-purple-500 rounded-md hover:bg-purple-600 cursor-pointer"
                    >
                        Update
                    </button>
                </div>
            </form>
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
        </GuestLayout>
    )
}