import { FaSearch } from "react-icons/fa";
import { FcPlus } from "react-icons/fc";
import { BsQuestionLg } from "react-icons/bs";

export const SearchIcon = ({ color, size }) => {
  return <FaSearch color={color} size={size} />;
};

export const MoreIcon = ({ color, size }) => {
  return <FcPlus color={color} size={size} cursor="pointer" />;
};

export const QuestionIcon = ({ color, size }) => {
  return <BsQuestionLg color={color} size={size} cursor="pointer" />;
};

