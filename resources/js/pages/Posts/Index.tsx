import { useState } from "react";
import { Link } from "@inertiajs/react";

type Post = {
  id: number;
  title: string;
  author?: string;
  body?: string;
};

interface PostsProps {
  posts: Post[];
}

export function Index({ posts }: PostsProps) {
  const [postList, setPostList] = useState<Post[]>(posts ?? []);

  function handleDeletePost(id: number) {
    // TODO: implementar chamada Inertia para deletar (ex.: Inertia.delete(`/posts/${id}`))
    // Por enquanto, só remove localmente:
    setPostList((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <>
      <div className="flex text-white">
        <Link
          href="/posts/create"
          className="px-4 py-2 mt-4 text-gray-100 bg-purple-500 rounded-md hover:bg-purple-600"
        >
          Create New Post
        </Link>
      </div>

      {postList
        .slice()
        .reverse()
        .map((post) => (
          <div
            key={post.id}
            className="p-5 my-5 text-left border rounded-md shadow-sm text-gray-100"
          >
            <Link href={`/posts/${post.id}`}>
              <h2 className="py-3 mb-5 font-bold hover:underline">{post.title}</h2>
            </Link>

            {post.author && <p className="font-bold my-5">{post.author}</p>}
            {post.body && <p>{post.body}</p>}

            <div className="space-x-5">
              <Link
                href={`/posts/${post.id}/edit`}
                className="px-4 py-2 my-5 text-white bg-purple-500 rounded-md hover:bg-purple-600 inline-block"
              >
                Edit Post
              </Link>

              <button
                onClick={() => handleDeletePost(post.id)}
                className="px-4 py-2 text-white bg-gray-400 rounded-md hover:bg-gray-500 inline-block"
              >
                Delete Post
              </button>
            </div>
          </div>
        ))}
    </>
  );
}