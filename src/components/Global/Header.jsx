import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <header className="bg-background fixed top-0 left-0 right-0 z-20">
      <div className="max-w-screen-lg mx-auto">
        <div className="mx-auto max-w-7xl px-2 sm:px-4lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="relative z-10 flex px-2 lg:px-0">
              <div className="flex flex-shrink-0 items-center p-2"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
