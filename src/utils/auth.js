import Cookies from "js-cookie";

export const checkAuthentication = (router, route, page) => {
  const authtoken = Cookies.get("authtoken");
  const userid = Cookies.get("userid");

  if (!authtoken || !userid) {
    if (page === "home") {
      router.push(route);
    }
  } else {
    if (page === "login" || page === "signin") {
      router.push(route);
    }
  }
};
