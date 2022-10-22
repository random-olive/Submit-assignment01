import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

export const socialLogin = async (event) => {
  // const {
  //   target: { name },
  // } = event;

  let provider;

  const auth = getAuth();

  // if (auth!==undefined && name === "google") {
  provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  // const credential = GoogleAuthProvider.credentialFromResult(result);
  // const token = credential.accessToken;
  const user = {
    aT: result.user.accessToken,
    rT: result.user.refreshToken,
    displayName: result.user.displayName,
    email: result.user.email,
  };

  return user;
  // }
};

export const logout = () => {
  const auth = getAuth();
  signOut(auth).then(()=>{
    alert(`로그아웃 되었습니다.`)
  })
};
