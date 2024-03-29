import React from "react";
import { useDispatch } from "react-redux";
import { selectLanguage } from "src/redux/features/language-slice";
import LANGUAGES from "src/enum/languages";

const LanguageDropdownSelector = () => {
  const dispatch = useDispatch();
  const LanguageOptions = LANGUAGES.sort((l1, l2) => l2.weight - l1.weight).map(
    (language) => {
      return (
        <li key={language.code}>
          <a
            class="dropdown-item"
            onClick={() => dispatch(selectLanguage(language.code))}
          >
            {language.label}
          </a>
        </li>
      );
    }
  );
  return (
    <>
      <div class="dropdown">
        <button
          class="fas fa-globe"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        />

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {LanguageOptions}
        </ul>
      </div>
    </>
  );
};

export default LanguageDropdownSelector;
