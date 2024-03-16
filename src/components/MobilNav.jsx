import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

const MobilNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color="white"
          size={30}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-[92px] z-50 h-[250px] bg-darkblue p-5 pt-8"
          >
            <ul className="justify-center space-y-8 text-center font-inter text-2xl text-white">
              <li>
                <a
                  href="#uebermich"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Über Mich
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobilNav;
