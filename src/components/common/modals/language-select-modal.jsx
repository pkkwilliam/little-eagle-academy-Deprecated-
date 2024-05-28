import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import LANGUAGES, { LANGUAGE_ENGLISH_US } from "src/enum/languages";
import { selectLanguage } from "src/redux/features/language-slice";
import Image from "next/image";
import globe from "@assets/img/language/globe.png";

const LanguageSelectModal = (props) => {
  const disptach = useDispatch();
  const { selectedLanguage } = useSelector((state) => state.language);

  const onSelectLanguage = (languageSelected) => {
    disptach(selectLanguage(languageSelected.code));
  };

  const LanguageOptions = LANGUAGES.sort((l1, l2) => l2.weight - l1.weight).map(
    (language, index) => {
      return (
        <Button
          key={"lang" + index}
          onClick={() => onSelectLanguage(language)}
          style={index === 0 ? {} : { marginTop: 15 }}
          variant="outline-primary"
        >
          {language.label}
        </Button>
      );
    }
  );

  return (
    <Modal
      backdrop="static"
      centered
      show={!selectedLanguage}
      onHide={() => onSelectLanguage(LANGUAGE_ENGLISH_US)}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              src={globe}
              style={{ height: "32px", width: "32px", margin: 8 }}
            />
            Language | 语言 | 語言
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {LanguageOptions}
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default LanguageSelectModal;
