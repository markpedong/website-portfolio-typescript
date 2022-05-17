import React, { useState } from "react";
import "./Styles/App.css";
import { Landing } from "./Pages/Landing";
import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
} from "@mantine/core";
import { About } from "./Pages/About";
import { Programs } from "./Pages/Programs";
import { Portfolio } from "./Pages/Portfolio";
import { Contact } from "./Pages/Contact";
import { LandingFooter } from "./Pages/LandingFooter";

export const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <div className="App">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            fontFamily: "Inter",
          }}
          defaultProps={{
            Container: {
              sizes: {
                xs: 576,
                sm: 768,
                md: 992,
                lg: 1200,
                xl: 1400,
              },
            },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Landing />
          <LandingFooter />
          {/* <About />
          <Programs />
          <Portfolio />
          <Contact /> */}
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
};

export default App;
