import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

export default function OverviewGallery() {
  return (
    <div className="flex flex-col w-5/12">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-96 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <CloudArrowUpIcon className="w-20 h-20 text-gray-400 mb-6" />
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      <div className="flex flex-row justify-between space-x-8 mt-6">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-40 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
          >
            <div className="flex flex-col items-center justify-center">
              <CloudArrowUpIcon className="w-10 h-10 text-gray-400" />
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-40 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
          >
            <div className="flex flex-col items-center justify-center">
              <CloudArrowUpIcon className="w-10 h-10 text-gray-400" />
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-40 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
          >
            <div className="flex flex-col items-center justify-center">
              <CloudArrowUpIcon className="w-10 h-10 text-gray-400" />
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
}
