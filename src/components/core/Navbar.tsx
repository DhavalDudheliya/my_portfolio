import Image from "next/image";
import Link from "next/link";

import { navItems } from "@/config/Navbar";

import Container from "./Container";
import { ThemeToggleButton } from "./ThemeSwitch";

const Navbar = () => {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-baseline gap-4">
          <Link href="/">
            <Image
              className="h-10 w-10 rounded-full border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-yellow-300"
              src={"/assets/me.jpg"}
              alt="me"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4">
          {navItems.map((item) => (
            <Link className="group relative" key={item.label} href={item.href}>
              {item.label}
              <span className="bg-primary absolute -bottom-0.5 left-1/2 h-0.5 w-0 transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full" />
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
