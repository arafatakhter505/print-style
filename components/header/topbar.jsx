"use client";

import { CartIcon, HeartIcon, Logo, SearchIcon, UserIcon } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Topbar = () => {
  return (
    <div className="container mx-auto py-3 flex items-center justify-between">
      {/* logo */}
      <Link href={"/"}>
        <Image src={Logo} alt="print-style" className="w-[100px]" />
      </Link>

      {/* search form */}
      <div className="text-black lg:w-full lg:px-20">
        <form>
          <div className="flex items-center border border-gray-300 rounded-l-md pl-3 lg:w-full bg-[#D5C4EB]">
            <Image src={SearchIcon} alt="icon" />
            <Input
              type="text"
              placeholder="Search for Products"
              className="bg-transparent outline-none border-none active:outline-none"
            />
            <Select>
              <SelectTrigger className="w-[220px] text-primary rounded-none border-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="text-primary">
                <SelectItem value="men">Men</SelectItem>
                <SelectItem value="women">Women</SelectItem>
                <SelectItem value="baby">Baby</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>

      {/* icon button */}
      <div className="flex items-center gap-7">
        <Link href={"/"}>
          <Image src={CartIcon} alt="icon" width={40} />
        </Link>
        <Link href={"/"}>
          <Image src={HeartIcon} alt="icon" width={40} />
        </Link>
        <Link href={"/"}>
          <Image src={UserIcon} alt="icon" width={40} />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
