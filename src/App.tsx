import React, { useState } from "react";
import "./Styles/App.css";
import { Landing } from "./Pages/Landing";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { About } from "./Pages/About";
import { Programs } from "./Pages/Programs";
import { Portfolio } from "./Pages/Portfolio";

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
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Landing />
          <About />
          <Programs />
          <Portfolio />
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
};

export default App;
