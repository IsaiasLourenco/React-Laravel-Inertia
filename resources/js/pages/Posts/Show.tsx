import { Link } from "@inertiajs/react";
import GuestLayout from "@/layouts/GuestLayout"

interface Post {
    id: number;
    title: string;
    author: string;
    body: string;
    created_at?: string;
    updated_at?: string;
}

export default function Show({ post }: { post: Post }) {
    return (
        <GuestLayout>
            <div className="max-w-2xl mx-auto flex flex-col space-y-6">
                <h1 className="text-2xl font-bold">{post.title}</h1>

                <p className="text-gray-100">
                    <span className="font-semibold">Autor:</span> {post.author}
                </p>

                <div className="leading-7">{post.body}</div>

                <Link
                    href="/"
                    className="px-4 py-2 text-white bg-gray-400 rounded-md hover:bg-gray-500 inline-block w-auto self-center"
                >
                    Go Back
                </Link>
            </div>
        </GuestLayout>
    )
}