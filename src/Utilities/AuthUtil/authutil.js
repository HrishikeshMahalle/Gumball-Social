const setAuthData = (data) => {
  localStorage.setItem("auth", data);
  console.log("Saving Auth Data");
};
const getAuthData = () => {
  return localStorage.getItem("auth");
};
const removeAuthData = () => {
  return localStorage.removeItem("auth");
};

export { setAuthData, getAuthData, removeAuthData };
