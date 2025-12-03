import { Index as Posts } from "../pages/Posts/Index";
import GuestLayout from "@/layouts/GuestLayout";

interface HomeProps {
  posts: any[];
}

export default function Home({ posts }: HomeProps) {
    return (
        <GuestLayout>
            <h1 className="my-5 text-xl font-semibold text-center text-gray-100">
                Welcome to my Blog
            </h1>

            <Posts posts={posts}/>
        </GuestLayout>
    )
}