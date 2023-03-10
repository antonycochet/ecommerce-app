import React, { useEffect } from 'react';
import { useState } from 'react';
import { Reorder } from 'framer-motion';
import { IExtraFields } from '../../../../../ts/interfaces/dashboard/Product/IProduct';
import { Item } from './Item';

interface IDragAndDrop {
  extraFields: IExtraFields[] | any;
}

export default function DragAndDrop({ extraFields }: IDragAndDrop) {
  const [items, setItems] = useState<IExtraFields[]>([]);

  useEffect(() => {
    setItems(extraFields);
  }, [extraFields]);

  return (
    <Reorder.Group
      axis="y"
      className="space-y-3 pt-4"
      onReorder={setItems}
      values={items}
    >
      {items.map((item: { type: string; inputs: {}[] }) => (
        <Item key={item.type} item={item} />
      ))}
    </Reorder.Group>
  );
}
