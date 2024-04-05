import Cookies from 'js-cookie';

const useGetCookie = () => {
  const getCookie = (name) => {
    return Cookies.get(name);
  };

  return getCookie;
};

export default useGetCookie;
