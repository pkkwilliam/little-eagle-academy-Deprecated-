if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { store } from "../redux/store";
import { Provider } from "react-redux";
import "../styles/index.scss";
import "../public/assets/css/animate.css"
import "../public/assets/css/flaticon_kindedo.css";
import "../public/assets/css/font-awesome-pro.css";
import "../public/assets/css/spacing.css";

import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import AppProvider from "../context/AppContext";
import { persistStore } from "redux-persist";
import SEO from "@components/seo";
import { useState } from "react";
import Preloader from "@components/common/preloader";
import { useEffect } from "react";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true); // Add this state

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set the desired delay in milliseconds

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
            {isLoading ? <Preloader /> : <Component {...pageProps} />}
            <ToastContainer />
          </AppProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
