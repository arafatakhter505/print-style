import CustomerReview from "./CustomerReview";
import ImageReview from "./ImageReview";

const Reviews = () => {
  return (
    <div className="container mx-auto pt-5 mb-20">
      <h2 className="text-center font-bold text-2xl">Reviews with images</h2>
      <div className="mt-8 lg:flex items-center justify-between">
        <CustomerReview />
        <ImageReview />
      </div>
    </div>
  );
};

export default Reviews;
