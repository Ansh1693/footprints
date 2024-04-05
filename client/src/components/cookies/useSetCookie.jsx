import Cookies from 'js-cookie';

const useSetCookie = () => {
  const setCookie = (name, value, options = {}) => {
    Cookies.set(name, value, options);
  };

  return setCookie;
};

export default useSetCookie;
