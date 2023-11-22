import Details from "./details";
import ImgGallery from "./imgGallery";

const ProductDetails = () => {
  return (
    <div className="container mx-auto my-20 lg:flex justify-between">
      <ImgGallery />
      <Details />
    </div>
  );
};

export default ProductDetails;
