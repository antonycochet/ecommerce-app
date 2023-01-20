import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IProduct } from '../../../../../../ts/interfaces/dashboard/Product/IProduct';

const imageMimeType = /image\/(png|jpg|jpeg)/i;

interface IOverviewGallery {
  setProduct: Dispatch<SetStateAction<IProduct>>;
  product: IProduct | {};
}

export default function OverviewGallery({
  setProduct,
  product,
}: IOverviewGallery) {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileDataURL, setFileDataURL] = useState<string | null>(null);
  const inputRef = useRef<any>(null);

  // handle drag events
  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true);
    } else if (event.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      changeHandler(event.dataTransfer.files[0]);
    }
  };

  // triggers when file is selected with click
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      // at least one file has been selected so do something
      changeHandler(event.target.files[0]);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const changeHandler = (file: File) => {
    if (!file.type.match(imageMimeType)) {
      alert('Image non valide');
      return;
    }
    setFile(file);
    setProduct((prevState) => ({
      ...prevState,
      image: file,
    }));
  };

  const removePreview = () => {
    setFileDataURL(null);
    setFile(null);
    setProduct((prevState) => ({
      ...prevState,
      image: null,
    }));
  };

  useEffect(() => {
    let fileReader: any,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e: { target: { result: any } }) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <div className="flex flex-col w-5/12">
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        className="flex items-center justify-center w-full"
      >
        {fileDataURL ? (
          <div className="relative">
            <img
              src={fileDataURL}
              alt="preview"
              className="h-96 object-cover w-full rounded-lg"
            />
            <button
              className="bg-indigo-600 rounded-md px-4 py-2 text-white absolute bottom-6 text-sm transform -translate-x-1/2 left-1/2"
              onClick={removePreview}
            >
              Je choisi une autre image
            </button>
          </div>
        ) : (
          <>
            <input
              ref={inputRef}
              type="file"
              id="input-file-upload"
              className="hidden"
              multiple={true}
              onChange={handleChange}
            />
            <label
              id="label-file-upload"
              htmlFor="input-file-upload"
              className={`${
                dragActive ? 'border-gray-300 border-4' : ''
              } flex flex-col items-center justify-center w-full h-96 rounded-lg bg-gray-100`}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <CloudArrowUpIcon
                  onClick={onButtonClick}
                  className="w-32 h-32 text-gray-400 mb-6 hover:text-gray-500 cursor-pointer"
                />
              </div>
            </label>
          </>
        )}
      </div>
    </div>
  );
}
