import { Storage } from 'aws-amplify';
import { CheckIcon } from '@heroicons/react/24/solid';

import ImageGallery from '../../../../components/home/product/image/ImageGallery';
import ProductReviews from '../../../../components/home/product/review/ProductReview';
import ProductFullDetails from '../../../../components/home/product/details/ProductAccordionDetails';
import ProductColorChoices from '../../../../components/home/product/details/color/ProductColorChoices';
import ProductSizeChoices from '../../../../components/home/product/details/size/ProductSizeChoices';
import Link from 'next/link';
import { getProduct } from '../../../../graphql/queries';
import { API, withSSRContext } from 'aws-amplify';
import { NextPageContext } from 'next';
import { IProduct } from '../../../../ts/interfaces/dashboard/Product/IProduct';
import ProductReviewsCustomers from '../../../../components/home/product/review/ProductReviewsCustomers';

const reviews = { href: '#', average: 5, totalCount: 100 };

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface IProductOverview {
  data: IProduct;
}

export default function ProductOverview({ data }: IProductOverview) {
  //const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  //const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  console.log(data);

  return (
    <div className="bg-white">
      <div className="pt-6 max-w-7xl mx-auto px-8">
        <Link
          href={'/dashboard/products/'}
          className="rounded-md bg-indigo-600 text-white px-4 py-2 font-medium text-sm"
        >
          Retour à la liste des produits
        </Link>
        <div className="flex flex-row justify-between">
          {/* Image gallery */}
          <div className="flex flex-col w-5/12">
            <ImageGallery product={data} />
            <ProductReviewsCustomers />
          </div>
          {/* Product info */}
          <div className="w-6/12 pt-8 pb-16 sm:px-6 lg:border-r lg:border-gray-200">
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {data.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Information produit</h2>
              <p className="text-2xl tracking-tight text-gray-900">
                {data.price} €
              </p>

              {/* Reviews */}
              <ProductReviews reviews={reviews} classNames={classNames} />

              {/* Description and details */}
              <div className="mt-10">
                <p className="text-base text-gray-600 font-medium">
                  {data.fullDescription}
                </p>
              </div>

              <form className="mt-10">
                {/* Colors
                  {product.ExtraField && product.ExtraField.colors && (
                    <ProductColorChoices
                      product={product}
                      setSelectedColor={setSelectedColor}
                      selectedColor={selectedColor}
                      classNames={classNames}
                    />
                  )}
                */}

                {/* Sizes
                  {product.ExtraField && product.ExtraField.sizes && (
                    <ProductSizeChoices
                      product={product}
                      setSelectedSize={setSelectedSize}
                      selectedSize={selectedSize}
                      classNames={classNames}
                    />
                  )}
                */}

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
              {/* Full Details Accordion
                <ProductFullDetails product={data} />
                 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  // Fetch data from external API
  const SSR = withSSRContext();

  const idProduct = context.query.id;

  const apiData = await SSR.API.graphql({
    query: getProduct,
    variables: { id: idProduct },
  });

  //sign image from aws s3
  const imageSigned = await Storage.get(apiData.data.getProduct.image);

  const data = apiData.data.getProduct;
  data.image = imageSigned;

  return { props: { data } };
}
