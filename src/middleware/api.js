const LOCAL_DOMAIN = "http://localhost:8081";
const PROD_DOMAIN = "https://api.googlyland.com";

export const GET_CLASSES = {
  requestUrl: getDomain() + "/public/reactive/clazz/v1",
  method: "GET",
};

export const GET_INSTRUCTORS = {
  requestUrl: getDomain() + "/public/reactive/instructor/v1",
  method: "GET",
};

function getDomain() {
  return process.env.NODE_ENV === "development" ? PROD_DOMAIN : PROD_DOMAIN;
}
