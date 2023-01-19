import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/solid';

import Breadcrumb from './breadcrumb/Index';
import ImageGallery from './image/ImageGallery';
import ProductReviews from './review/ProductReview';
import ProductFullDetails from './details/ProductAccordionDetails';
import ProductReviewsCustomers from './review/ProductReviewsCustomers';
import ProductColorChoices from './details/color/ProductColorChoices';
import ProductSizeChoices from './details/size/ProductSizeChoices';

const product: any = {
  name: "Acqua D'Alfresco",
  price: '29 €',
  href: '#',
  breadcrumbs: [{ id: 1, name: 'Accueil', href: '/' }],
  images: [
    {
      src: 'https://images.pexels.com/photos/5205809/pexels-photo-5205809.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://images.pexels.com/photos/5205867/pexels-photo-5205867.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://images.pexels.com/photos/5205824/pexels-photo-5205824.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://images.pexels.com/photos/5205817/pexels-photo-5205817.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductOverview() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Breadcrumb */}
        <Breadcrumb product={product} />

        <div className="flex flex-row justify-between max-w-7xl mx-auto px-8">
          {/* Image gallery */}
          <div className="flex flex-col w-5/12">
            <ImageGallery product={product} />
            <ProductReviewsCustomers />
          </div>
          {/* Product info */}
          <div className="w-6/12 pt-8 pb-16 sm:px-6 lg:border-r lg:border-gray-200">
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Information produit</h2>
              <p className="text-2xl tracking-tight text-gray-900">
                {product.price}
              </p>

              {/* Reviews */}
              <ProductReviews reviews={reviews} classNames={classNames} />

              {/* Description and details */}
              <div className="mt-10">
                <p className="text-base text-gray-600 font-normal">
                  {product.description}
                </p>
              </div>

              <form className="mt-10">
                {/* Colors */}
                <ProductColorChoices
                  product={product}
                  setSelectedColor={setSelectedColor}
                  selectedColor={selectedColor}
                  classNames={classNames}
                />

                {/* Sizes */}
                <ProductSizeChoices
                  product={product}
                  setSelectedSize={setSelectedSize}
                  selectedSize={selectedSize}
                  classNames={classNames}
                />

                <div className="flex space-x-6 items-center w-full mt-8">
                  <button
                    type="submit"
                    className="flex w-8/12 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Ajouter au panier
                  </button>
                  <p className="flex items-center space-x-1">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-500">
                      Produit disponible
                    </span>
                  </p>
                </div>
              </form>
            </div>

            <div className="mt-8">
              {/* Full Details Accordion */}
              <ProductFullDetails product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
