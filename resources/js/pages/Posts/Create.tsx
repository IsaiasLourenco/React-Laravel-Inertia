import { Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/layouts/GuestLayout";

export default function Create() {
    
    const { data, setData, post, processing, errors} = useForm ({
        author : "",
        title : "",
        body : "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post("/posts");
    };
    return (
        <GuestLayout>
            <form onSubmit={ handleSubmit }>
                <div className="flex flex-col space-y-8 text-left">
                    <h1 className="mx-auto text-xl">Create a New Post</h1>
                    <label>
                        Title
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="block w-full rounded-md border-0 p-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-50"
                        />
                    </label>
                    <label>
                        Author
                        <input
                            type="text"
                            value={data.author}
                            onChange={(e) => setData("author", e.target.value)} 
                            className="block w-full rounded-md border-0 p-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-50"
                        />
                    </label>
                    <label>
                        Main Content
                        <textarea 
                            value={data.body} 
                            onChange={(e) => setData("body", e.target.value)}
                            className="block w-full rounded-md border-0 p-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-50"
                        >
                        </textarea>
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
                        Create Post
                    </button>
                </div>
            </form>
        </GuestLayout>
    )
}