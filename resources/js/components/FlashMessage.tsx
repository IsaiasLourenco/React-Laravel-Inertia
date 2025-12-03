import { usePage } from "@inertiajs/react";

export default function FlashMessage() {
    const { flash }: any = usePage().props;

    if (!flash?.success) return null; // não mostra nada se não houver mensagem

    return (
        <div className="px-4 py-2 my-4 text-sm font-semibold text-white bg-green-600 rounded-md shadow-md">
            {flash.success}
        </div>
    );
}
