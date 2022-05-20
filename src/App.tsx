import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import React, { useState } from "react";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Landing } from "./Pages/Landing";
import { LandingFooter } from "./Pages/LandingFooter";
import { Portfolio } from "./Pages/Portfolio";
import "./Styles/App.css";

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
          <About />
          <Portfolio />
          <Contact />
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
};

export default App;
