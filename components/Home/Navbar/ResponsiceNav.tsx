"use client";

import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const ResponsiceNav = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavShow = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={handleNavShow} />
      <MobileNav showNav={showNav} closeNav={handleCloseNav} />
    </div>
  );
};

export default ResponsiceNav;
