import StarIcon from '@heroicons/react/24/solid/StarIcon';

interface IProductReview {
  reviews: { average: number; href: string; totalCount: number };
  classNames: (...classes: string[]) => string;
}

export default function ProductReview({ reviews, classNames }: IProductReview) {
  return (
    <div className="mt-6">
      <h3 className="sr-only">Avis</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                reviews.average > rating ? 'text-blue-600' : 'text-gray-200',
                'h-5 w-5 flex-shrink-0'
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{reviews.average} sur 5 étoiles</p>
        <a
          href={reviews.href}
          className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          {reviews.totalCount} avis
        </a>
      </div>
    </div>
  );
}
