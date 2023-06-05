import { Typography } from "@material-tailwind/react";
import Logo from "../assets/logo.png";
 
export default function Footer() {
  return (
    <footer className="w-full bg-transparent p-8">
      <div className="flex flex-row flex-wrap  mt-[80rem] mx-10 items-center justify-center  gap-y-7 gap-x-12 bg-platinum text-center ">
        <img src={Logo} alt="logo-ct" className="w-16 " />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-white focus:text-white"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-white focus:text-white"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-white focus:text-white"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-white focus:text-white"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Archit Wankhade
      </Typography>
    </footer>
  );
}