import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { authService } from "../Firebase";

export const googleLogin = async (event) => {
  const {
    target: { name },
  } = event;
  let provider;
  if (name && name === "google") {
    console.log(name)
    provider = new GoogleAuthProvider();
    // await new signInWithRedirect(authService, provider);
    await new signInWithPopup(authService, provider);
    // const result = await getRedirectResult(authService);
    // if (result) {
      // console.log(result);
    // }
    return;
  }
};
