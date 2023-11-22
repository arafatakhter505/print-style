import { RatingIcon, UserBlackIcon } from "@/public";

import Image from "next/image";
import Link from "next/link";

const TopReviews = () => {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-5">Top reviews</h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-14 md:mx-5">
        <div>
          <div className="flex items-center gap-2">
            <Image src={UserBlackIcon} alt="icon" />
            <h4>Akshat</h4>
          </div>
          <div className="flex items-center gap-1">
            <Image src={RatingIcon} alt="icon" width={15} />
            <Image src={RatingIcon} alt="icon" width={15} />
            <Image src={RatingIcon} alt="icon" width={15} />
            <Image src={RatingIcon} alt="icon" width={15} />
          </div>
          <p>Looks good, material is good</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Image src={UserBlackIcon} alt="icon" />
            <h4>Akshat</h4>
          </div>
          <div className="flex items-center gap-1">
            <Image src={RatingIcon} alt="icon" width={15} />
            <Image src={RatingIcon} alt="icon" width={15} />
            <Image src={RatingIcon} alt="icon" width={15} />
            <Image src={RatingIcon} alt="icon" width={15} />
          </div>
          <p>Looks good, material is good</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Image src={UserBlackIcon} alt="icon" />
            <h4>Akshat</h4>
          </div>
          <div className="flex items-center gap-1">
            <Image src={RatingIcon} alt="icon" width={15} />
            <Image src={RatingIcon} alt="icon" width={15} />
            <Image src={RatingIcon} alt="icon" width={15} />
            <Image src={RatingIcon} alt="icon" width={15} />
          </div>
          <p>Looks good, material is good</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Image src={UserBlackIcon} alt="icon" />
            <h4>Akshat</h4>
          </div>
          <div className="flex items-center gap-1">
            <Image src={RatingIcon} alt="icon" width={15} />
            <Image src={RatingIcon} alt="icon" width={15} />
            <Image src={RatingIcon} alt="icon" width={15} />
            <Image src={RatingIcon} alt="icon" width={15} />
          </div>
          <p>Looks good, material is good</p>
        </div>
      </div>
      <div className="text-center mt-12">
        <Link href={"/"}>Load More</Link>
      </div>
    </div>
  );
};

export default TopReviews;
