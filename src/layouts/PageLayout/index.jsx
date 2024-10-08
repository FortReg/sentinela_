import React from "react";
import Header from "../../components/Header";
import { MenuNav } from "../../components/Menu/MenuNav";
import MenuBarItem from "../../components/Menu/MenuItem";
import Footer from "../../components/Footer";
import Segurado from "../../pages/Segurado";

const PageLayout = () => {
  return (
    <div className="relative flex flex-col h-full overflow-y-auto antialiased">
      <Header />
      <div className="relative z-10 flex p-0 container mx-auto">
        <MenuNav>
            <MenuBarItem />
        </MenuNav> 
        <Segurado/> 
      </div>
      <Footer/>
    </div>
  );
};

export default PageLayout;
