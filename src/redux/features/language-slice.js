import { createSlice } from "@reduxjs/toolkit";
import ZH_CN_LABEL from "@assets/labels/zh-CN.json";
import ZH_HK_LABEL from "@assets/labels/zh-HK.json";
import EN_US_LABEL from "@assets/labels/en-US.json";
import {
  LANGUAGE_CHINESE_SIMPLIFIED,
  LANGUAGE_CHINESE_TRADITIONAL,
  LANGUAGE_ENGLISH_US,
} from "../../enum/languages";
import { toast } from "react-toastify";

const initialState = {
  selectedLanguage: undefined,
  languageLabel: getLabel(LANGUAGE_ENGLISH_US.code),
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    selectLanguage: (state, { payload }) => {
      const label = getLabel(payload);
      state.selectedLanguage = payload;
      state.languageLabel = label;
    },
  },
});

function getLabel(selectedLanguage) {
  switch (selectedLanguage) {
    case LANGUAGE_CHINESE_SIMPLIFIED.code:
      return ZH_CN_LABEL;
    case LANGUAGE_CHINESE_TRADITIONAL.code:
      return ZH_HK_LABEL;
    default:
      return EN_US_LABEL;
  }
}

export const { selectLanguage } = languageSlice.actions;

export default languageSlice.reducer;
