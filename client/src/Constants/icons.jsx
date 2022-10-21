import { FaSearch } from "react-icons/fa";
import { FcPlus, FcGoogle } from "react-icons/fc";
import { BsQuestionLg } from "react-icons/bs";
import { IoLogInOutline } from "react-icons/io5";
import { RiArrowGoBackFill } from "react-icons/ri";

export const SearchIcon = ({ color, size }) => {
  return <FaSearch color={color} size={size} />;
};

export const MoreIcon = ({ color, size }) => {
  return <FcPlus color={color} size={size} cursor="pointer" />;
};

export const QuestionIcon = ({ color, size }) => {
  return <BsQuestionLg color={color} size={size} cursor="pointer" />;
};

export const GoogleIcon = ({ size }) => {
  return <FcGoogle size={size} cursor="pointer" />;
};

export const LoginIcon = ({ color, size }) => {
  return <IoLogInOutline color={color} size={size} cursor="pointer" />;
};

export const BackIcon = ({ color, size }) => {
  return <RiArrowGoBackFill color={color} size={size} cursor="pointer" />;
};
