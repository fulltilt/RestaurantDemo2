import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="container pt-6">
      <div className="flex justify-between md:justify-start items-center">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="logo"
          className="mr-5"
        />
        <ul className="hidden gap-8 items-center font-semibold text-[14px] md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Food</li>
          <li>Dish</li>
          <li>Contact</li>
          <Button className="bg-orange-500 text-white px-6 py-2 rounded-3xl">
            SignUp
          </Button>
        </ul>
        <AiOutlineMenu size={30} className="md:hidden text-orange-500" />
      </div>
    </div>
  );
};

export default Navbar;
