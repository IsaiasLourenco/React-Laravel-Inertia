import { Link, router, usePage } from "@inertiajs/react";

type Post = {
  id: number;
  title: string;
  author?: string;
  body?: string;
};

interface PostsProps {
  posts: Post[];
}

interface Flash {
  success?: string;
}

interface PageProps {
  flash?: Flash;
  [key: string]: unknown; // assinatura exigida pelo Inertia
}

export function Index({ posts }: PostsProps) {
  function deletePost(id: number) {
    if (confirm("Are you sure you want to delete this post?")) {
      router.delete(`/posts/${id}`);
    }
  }

  const { flash } = usePage<PageProps>().props;

  return (
    <>
      {/* Flash Message */}
      {flash?.success && (
        <div className="bg-green-600 text-white p-3 rounded mb-4 text-center">
          {flash.success}
        </div>
      )}

      <div className="flex text-white">
        <Link
          href="/posts/create"
          className="px-4 py-2 mt-4 text-gray-100 bg-purple-500 rounded-md hover:bg-purple-600"
        >
          Create New Post
        </Link>
      </div>

      {posts
        .slice()
        .reverse()
        .map((post) => (
          <div
            key={post.id}
            className="p-5 my-5 text-left border rounded-md shadow-sm text-gray-100"
          >
            <Link href={`/posts/${post.id}`}>
              <h2 className="py-3 mb-5 font-bold hover:underline">
                {post.title}
              </h2>
            </Link>

            {post.author && <p className="font-bold my-5">{post.author}</p>}
            {post.body && <p>{post.body}</p>}

            <div className="space-x-5 mt-4">
              <Link
                href={`/posts/${post.id}/edit`}
                className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600 inline-block"
              >
                Edit Post
              </Link>

              <button
                onClick={() => deletePost(post.id)}
                className="px-4 py-2 text-white bg-gray-400 rounded-md hover:bg-gray-500 inline-block cursor-pointer"
              >
                Delete Post
              </button>
            </div>
          </div>
        ))}

      <footer className="mt-14 text-sm text-gray-500 text-center">
        ©
        <a
          href="https://www.vetor256.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-200 transition-colors ml-1"
        >
          Vetor256.
        </a>{" "}
        {new Date().getFullYear()} - Built for learning and professional growth.
      </footer>
    </>
  );
}