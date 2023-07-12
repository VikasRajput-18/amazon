import RootLayout from "@/components/RootLayout";
import { persistor, store } from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { SessionProvider } from "next-auth/react";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SessionProvider session={session}>
          <main className="bg-gray-300 font-bodyFont">
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </main>
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}
