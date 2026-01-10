import React from "react";

import Container from "./Container";

const Footer = () => {
  return (
    <Container className="mt-20 border-t border-neutral-100 py-10 dark:border-white/10">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} Dhaval Dudheliya. All rights
          reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;
