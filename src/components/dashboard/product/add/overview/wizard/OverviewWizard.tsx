import {
  CameraIcon,
  PencilIcon,
  RocketLaunchIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';

interface IOverviewWizard {
  handleSubmit: () => void;
  product: any;
}

export default function OverviewWizard({
  handleSubmit,
  product,
}: IOverviewWizard) {
  return (
    <div className="w-6/12 flex flex-row items-center space-x-2">
      <ol className="flex items-center w-full max-w-md">
        <li className="flex w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-600 after:border-4 after:inline-block">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full lg:h-10 lg:w-10 shrink-0">
            <CameraIcon className="w-4 h-4 text-white lg:w-5 lg:h-5" />
          </div>
        </li>
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-4 after:inline-block">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full lg:h-10 lg:w-10  shrink-0">
            <PencilIcon className="w-4 h-4 text-white lg:w-5 lg:h-5" />
          </div>
        </li>
        <li className="flex items-center w-full">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full lg:h-10 lg:w-10  shrink-0">
            <RocketLaunchIcon className="w-4 h-4 text-white lg:w-5 lg:h-5" />
          </div>
        </li>
      </ol>
      <Link
        href={'/dashboard/products/overview/4'}
        className="rounded-md bg-slate-800 text-white px-4 py-2 font-medium text-sm"
      >
        Aperçu
      </Link>
      <button
        onClick={handleSubmit}
        type="submit"
        className="rounded-md bg-slate-200 text-white px-4 py-2 font-medium text-sm"
      >
        Valider
      </button>
    </div>
  );
}
