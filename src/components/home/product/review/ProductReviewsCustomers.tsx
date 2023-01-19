import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/24/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductReviewsCustomers() {
  let [categories] = useState({
    Avis: [
      {
        id: 1,
        content:
          'Does drinking coffee make you smarter? Ask Me Anything: 10 answers to your questions about coffee',
      },
      {
        id: 2,
        content: "So you've bought coffee... now what?",
      },
    ],
    FAQ: [
      {
        id: 1,
        content: 'Is tech making coffee better or worse?',
      },
      {
        id: 2,
        content: 'The most innovative things happening in coffee',
      },
    ],
    Tendance: [
      {
        id: 1,
        content: 'Ask Me Anything: 10 answers to your questions about coffee',
      },
      {
        id: 2,
        content: "The worst advice we've ever heard about coffee",
      },
    ],
  });
  const reviews = { average: 4 };

  return (
    <div className="w-full mt-8">
      <Tab.Group>
        <Tab.List className="flex">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium text-gray-700',
                  selected
                    ? 'border-b-2 border-blue-600 focus:outline-none text-blue-600'
                    : 'border-b border-gray-200'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-4">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx}>
              <ul className="flex flex-col space-y-6">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="flex space-x-4 mt-4 pb-6 border-b last:border-none"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <div className="leading-5">
                        <span className="font-medium">Antony Cochet</span>
                        <div className="text-sm text-gray-400 font-normal">
                          Joined in August 2014
                        </div>
                      </div>
                      <div className="flex -ml-1 my-3">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              reviews.average > rating
                                ? 'text-blue-600'
                                : 'text-gray-200',
                              'h-5 w-5 *'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <ul>
                        <li className="text-sm text-gray-400 font-normal">
                          {post.content}
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
