import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
export default function Navigation() {
    return (
        <nav className="pb-5 mb-5 border-b">
            <ul className="flex justify-end space-x-5">
                <li className="text-gray-100">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-gray-100">
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}