"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { QuestionIcon } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";

const Navbar = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Shop", link: "/shop" },
    { name: "Clothing", link: "/clothing" },
    { name: "Bags", link: "/bags" },
    { name: "Photo Gifts", link: "/photo-gifts" },
    { name: "Accessories", link: "/accessories" },
    { name: "Corporate Gift Sets", link: "/corporate-gift-sets" },
  ];

  return (
    <nav className="container mx-auto pb-5 flex items-center justify-between">
      {/* navigation menu */}
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map((menu) => (
            <NavigationMenuItem key={menu.name} className="pr-5">
              <Link href={menu.link}>{menu.name}</Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      
      {/* toogle */}
      <div className="flex items-center gap-2">
        <Image src={QuestionIcon} alt="icon" />
        <Switch />
      </div>
    </nav>
  );
};

export default Navbar;
