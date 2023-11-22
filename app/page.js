"use client";

import Feature from "@/components/feature/feature";
import RelatedProducts from "@/components/relatedProducts/relatedProducts";
import Reviews from "@/components/reviews/reviews";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <h2>Print Style</h2>
      <Feature />
      <RelatedProducts />
      <Separator />
      <Reviews />
    </main>
  );
}
