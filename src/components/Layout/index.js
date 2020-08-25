import PropTypes from "prop-types";
import React, { useRef, useEffect } from 'react';
import useWindowSize from "../../hooks/useWindowSize";
import MastersProvider from "../../context/masters";

function Layout({ children }) {
  const mainRef = useRef();
  const size = useWindowSize(true);
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    mainRef.current.style.setProperty('--vh', `${vh}px`);
  }, [size])
  return (
    <main ref={mainRef} className="Layout">
      <MastersProvider>
        {children}
      </MastersProvider>
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
