import React, { ReactElement } from "react";
import BottomHeader from "./Header/BottomHeader";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface Props {
  children: ReactElement;
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <BottomHeader />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
