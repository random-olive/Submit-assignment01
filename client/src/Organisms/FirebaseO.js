import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Loading from "../Molecules/Loading";

export const socialLogin = async (event) => {
  // const {
  //   target: { name },
  // } = event;

  let provider;

  const auth = getAuth();

  // if (name === "google") {
  provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  console.log(result);
  // }
};
