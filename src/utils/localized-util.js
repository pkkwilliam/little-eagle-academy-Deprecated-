import logo from "@assets/img/logo/logo.png";
import logo_zh_CN from "@assets/img/logo/logo_zh_CN.png";
import logo_zh_HK from "@assets/img/logo/logo_zh_HK.png";
import {
  LANGUAGE_CHINESE_SIMPLIFIED,
  LANGUAGE_CHINESE_TRADITIONAL,
  LANGUAGE_ENGLISH_US,
} from "src/enum/languages";

export const getServerLocalizedLabel = (localizedObject, selectedLanguage) => {
  return (
    localizedObject?.localized?.[
      selectedLanguage ?? LANGUAGE_ENGLISH_US.code
    ] ?? {}
  );
};

export const getLogo = (selectedLanguage) => {
  switch (selectedLanguage) {
    case LANGUAGE_CHINESE_SIMPLIFIED.code:
      return logo_zh_CN;
    case LANGUAGE_CHINESE_TRADITIONAL.code:
      return logo_zh_HK;
    default:
      return logo;
  }
};
