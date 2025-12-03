import { usePage } from '@inertiajs/react';

type Flash = {
  success?: string;
};

type PageProps = {
  flash?: Flash;
};

export default function FlashMessage() {
  const { flash } = usePage<PageProps>().props;

  if (!flash?.success) return null;
  return (
    <div className="px-4 py-2 my-4 text-sm font-semibold text-white bg-green-600 rounded-md shadow-md">
      {flash.success}
    </div>
  );
}