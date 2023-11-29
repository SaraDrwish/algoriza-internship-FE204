import { ref } from 'vue';
export const isAuthen = ref(false);
// export const SignIn = () => {
//   isAuthen.value = true;
// };
// export const logout = () => {
//   isAuthent.value = false;
// };
// export const authService = {
//   checkUserSignIn() {
//     const userToken = localStorage.getItem('userToken');
//     return !!userToken; 
//   },
// };
// ////////////////////
const userTokenKey = 'userToken';
const generateToken = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const tokenLength = 32;
  let token = '';
  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
    console.log( "userTokenKey:::" , userTokenKey , "token:::", token )

  }
  console.log( "userTokenKey::;" , userTokenKey , "token:::", token )
  return token;
};
export const SignIn = () => {
  const userToken = generateToken();
  localStorage.setItem(userTokenKey, userToken);
  isAuthen.value = true;
  console.log("userToken::" , userToken)
};
export const logout = () => {
  localStorage.removeItem(userTokenKey);
  isAuthen.value = false;
};
export const authService = {
  checkUserSignIn() {
    const userToken = localStorage.getItem(userTokenKey);
    return !!userToken; 
  },
};

