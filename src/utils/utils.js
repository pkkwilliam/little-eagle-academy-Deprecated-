export const animationCreate = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW({ live: false }).init();
};

export const removeLineBreakTag = (value, toReplaceValue = " ") => {
  if (!value) {
    return value;
  }
  return value
    .replaceAll("<br/>", toReplaceValue)
    .replaceAll("<br />", toReplaceValue);
};
