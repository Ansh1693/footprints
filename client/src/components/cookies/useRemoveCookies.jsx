import Cookies from 'js-cookie';

const useRemoveCookie = () => {
  const removeCookie = (name, options = {}) => {
    Cookies.remove(name, options);
  };

  return removeCookie;
};

export default useRemoveCookie;
