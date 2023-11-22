"use client";

import Feature from "@/components/feature/feature";
import ProductDetails from "@/components/productDetails/productDetails";
import RelatedProducts from "@/components/relatedProducts/relatedProducts";
import Reviews from "@/components/reviews/reviews";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <ProductDetails />
      <Feature />
      <RelatedProducts />
      <Separator />
      <Reviews />
    </main>
  );
}
