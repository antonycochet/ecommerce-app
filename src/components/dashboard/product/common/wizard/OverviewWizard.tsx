import {
  CameraIcon,
  CheckCircleIcon,
  PencilIcon,
  RocketLaunchIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';
import { title } from 'process';
import { useEffect, useState } from 'react';
import { IProduct } from '../../../../../ts/interfaces/dashboard/Product/IProduct';

interface IOverviewWizard {
  handleSubmit: () => void;
  product: IProduct;
}

const listStepsWizard = [
  {
    type: 'image',
    content: 'Image',
    isCompleted: false,
  },
  {
    type: 'content',
    content: 'Contenu',
    isCompleted: false,
  },
];

export default function OverviewWizard({
  handleSubmit,
  product,
}: IOverviewWizard) {
  const [stepSettings, setStepSettings] = useState(listStepsWizard);

  const handleWizardStep = (
    image: string | File | null,
    content: {
      title: string;
      price: number;
      stock: number;
      fullDescription: string;
    }
  ) => {
    const newArray = [...stepSettings];

    if (image) newArray[0].isCompleted = true;
    else newArray[0].isCompleted = false;

    if (content) {
      if (
        content.title &&
        content.price &&
        content.stock &&
        content.fullDescription
      ) {
        newArray[1].isCompleted = true;
      } else {
        newArray[1].isCompleted = false;
      }
    }

    setStepSettings(newArray);
  };

  useEffect(() => {
    let { image, title, price, stock, fullDescription } = product;
    let content = { title, price, stock, fullDescription };
    handleWizardStep(image, content);
  }, [product]);

  const handleValidation = (
    stepSettings: {
      type: string;
      content: string;
      isCompleted: boolean;
    }[]
  ) => {
    let renderButtonValisation;
    if (stepSettings[0].isCompleted && stepSettings[1].isCompleted) {
      renderButtonValisation = (
        <button
          onClick={handleSubmit}
          type="submit"
          className={`${
            stepSettings[0].isCompleted && stepSettings[1].isCompleted
              ? 'bg-indigo-600 cursor-pointer'
              : 'bg-slate-200 cursor-not-allowed'
          } rounded-md text-white px-4 py-2 font-medium text-sm`}
        >
          Valider
        </button>
      );
    } else {
      renderButtonValisation = (
        <button
          type="submit"
          className="bg-slate-200 cursor-not-allowed rounded-md text-white px-4 py-2 font-medium text-sm"
        >
          Valider
        </button>
      );
    }
    return renderButtonValisation;
  };

  return (
    <div className="w-6/12 flex flex-row items-center space-x-2 justify-between">
      <ol className="flex items-center w-full text-sm font-medium text-center sm:text-base">
        {stepSettings.map(
          (
            elem: { type: string; content: string; isCompleted: boolean },
            index
          ) => {
            return (
              <li
                key={index}
                className={`flex md:w-full items-center text-white sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-1 xl:after:mx-2`}
              >
                <div
                  className={`${
                    elem.isCompleted
                      ? 'bg-blue-300 shadow-blue-300/50'
                      : 'bg-gray-200 shadow-gray-300/50'
                  } py-1 px-4 rounded-md`}
                >
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200">
                    <span> {elem.content}</span>
                    {elem.isCompleted ? (
                      <CheckCircleIcon className="w-6 h-6 text-white ml-2" />
                    ) : (
                      <XCircleIcon className="w-6 h-6 text-white ml-2" />
                    )}
                  </span>
                </div>
              </li>
            );
          }
        )}
        <li className="flex items-center">
          {handleValidation(stepSettings)}
          {/* <Link
            href={'/dashboard/products/overview/4'}
            className="rounded-md bg-slate-800 text-white px-4 py-2 font-medium text-sm"
          >
            Aperçu
          </Link> */}
        </li>
      </ol>
    </div>
  );
}
