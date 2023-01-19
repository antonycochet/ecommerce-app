import { TCategory } from '../../../../ts/types/category/tcategory';
import Label from '../Label/label';

interface IDashboardFormMultipleCheckbox {
  register: any;
  labelTitle: string;
  value: string;
  categories: TCategory[];
}

export default function DashboardFormMultipleCheckbox({
  register,
  labelTitle,
  value,
  categories,
}: IDashboardFormMultipleCheckbox) {
  return (
    <>
      <Label isRequired={false} labelTitle={labelTitle} />
      <ul className="flex flex-wrap space-x-2">
        {categories.map((category) => {
          return (
            <li key={category.id} className="text-gray-400 -mt-4">
              <input
                type="checkbox"
                id={category.id + category.title}
                value={category.title}
                className="hidden peer"
                onChange={(e) => console.log(e.target.value)}
              />
              <label
                htmlFor={category.id + category.title}
                className="inline-flex text-sm justify-between items-center px-2 py-1 w-full rounded-md border border-gray-400 cursor-pointer peer-checked:border-blue-700 peer-checked:text-blue-700"
              >
                <div className="block">
                  <div className="w-full">{category.title}</div>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
