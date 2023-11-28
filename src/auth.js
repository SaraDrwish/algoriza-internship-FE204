import { ref } from 'vue';
export const isAuthen = ref(false);
export const SignIn = () => {
  isAuthen.value = true;
};
export const logout = () => {
  isAuthent.value = false;
};