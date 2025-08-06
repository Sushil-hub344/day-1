import { IoHome } from "react-icons/io5";
import { MdRoundaboutRight } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { MdMovieCreation } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { CiLogin } from "react-icons/ci";


const Navitem = [
    {
        id:1,
        title: "Home",
        to: "/",
        icon: IoHome,
    },
     {
        id:2,
        title: "About",
        to: "/about",
        icon: MdRoundaboutRight ,
    },
     {
        id:3,
        title: "Contact",
        to: "/contact",
        icon: IoIosContact ,
    },
     {
        id:4,
        title: "Movies",
        to: "/moviespage",
        icon: MdMovieCreation ,
    },
     {
        id:5,
        title: "Blog",
        to: "/blog",
        icon: FaBloggerB ,
    },
    {
        id:6,
        title: "Register",
        to: "/register",
        icon: GiArchiveRegister,
    },
    {
        id:7,
        title: "Login",
        to: "/login",
        icon: CiLogin,
    }
];
  
export default Navitem