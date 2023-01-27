import * as React from 'react';
import { useMotionValue, Reorder, useDragControls } from 'framer-motion';
import {
  Bars4Icon,
  BeakerIcon,
  QueueListIcon,
  SwatchIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid';

interface Props {
  item: { type: string };
}

export const Item = ({ item }: Props) => {
  const y = useMotionValue(0);
  const controls = useDragControls();

  const getExtraFieldsIcon = (type: string) => {
    let result;
    switch (type) {
      case 'capacity':
        result = (
          <>
            <BeakerIcon className="w-4 h-4" />
            <span className="font-semibold cursor-pointer hover:text-indigo-600 ">
              Capacité
            </span>
          </>
        );
        break;
      case 'color':
        result = (
          <>
            <SwatchIcon className="w-4 h-4" />
            <span className="font-semibold cursor-pointer hover:text-indigo-600 ">
              Couleur
            </span>
          </>
        );
        break;
      case 'highlight':
        result = (
          <>
            <QueueListIcon className="w-4 h-4" />
            <span className="font-semibold cursor-pointer hover:text-indigo-600 ">
              Plus de détails
            </span>
          </>
        );
        break;
    }
    return result;
  };

  return (
    <Reorder.Item
      className="bg-white py-4 px-8 rounded-md flex items-center justify-between"
      dragListener={false}
      dragControls={controls}
      value={item}
      style={{ y }}
    >
      <div className="space-x-2 flex items-center">
        <Bars4Icon
          className="reorder-handle w-4 h-4 text-slate-400 cursor-grab mr-6"
          onPointerDown={(e) => controls.start(e)}
        />
        <div className="select-none flex items-center space-x-4">
          {getExtraFieldsIcon(item.type)}
        </div>
      </div>
      <div className="space-x-3 flex items-center">
        <XCircleIcon className="w-4 h-4 text-red-500 cursor-pointer" />
      </div>
    </Reorder.Item>
  );
};
