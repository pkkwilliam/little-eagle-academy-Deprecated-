if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { store } from "../redux/store";
import { Provider } from "react-redux";
import "../styles/index.scss";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import AppProvider from "../context/AppContext";
import { persistStore } from "redux-persist";
import SEO from "@components/seo";
import { useState } from "react";
import Preloader from "@components/common/preloader";
import { useEffect } from "react";
import LanguageSelectModal from "@components/common/modals/language-select-modal";

let persistor = persistStore(store);
const isDev = process.env.NODE_ENV === "development";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true); // Add this state

  useEffect(() => {
    const loadingTimeout = setTimeout(
      () => {
        setIsLoading(false);
      },
      isDev ? 0 : 2000
    ); // Set the desired delay in milliseconds

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      <SEO
        font={
          "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap"
        }
      />
      <Provider store={store}>
        <PersistGate loading={<Preloader />} persistor={persistor}>
          <AppProvider>
            <LanguageSelectModal />
            {isLoading ? <Preloader /> : <Component {...pageProps} />}
            <ToastContainer />
          </AppProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
