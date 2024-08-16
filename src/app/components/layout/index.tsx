import React, { FC, PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;