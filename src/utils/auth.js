import profpic from "../static/profpic.jpg";

const isBrowser = typeof window !== `undefined`;

const getUser = () =>
  window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {};

const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user));

export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return false;

  if (username === "mmilet01" && password === "mileta123") {
    return setUser({
      username: "mmilet01",
      firstName: "John",
      lastName: "Doe",
      email: "mmilet01@fesb.hr",
      job: "skipper",
      dob: "10-04-1982",
      pictureUrl: profpic
    });
  }

  return false;
};

export const isLoggedIn = () => {
  if (!isBrowser) return false;

  const user = getUser();

  return !!user.email;
};

export const handleRegister = ({
  username,
  email,
  password,
  repeatPassword
}) => {
  if (!isBrowser) return false;
};

export const getCurrentUser = () => isBrowser && getUser();

export const logout = callback => {
  if (!isBrowser) return;

  setUser({});
  callback();
};
