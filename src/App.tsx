import React, { useState, useMemo, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Example1 from './examples/useMemo/Example1';
// import Example2 from './examples/useMemo/Example2';
// import UseCallbackExample1 from './examples/useCallback/UseCallbackExample1'
// import UseCallbackExample2 from "./examples/useCallback/UseCallbackExample2";
import Page from "./examples/useContext/example1/Page";
import {
  ThemeContext,
  themeInitialState,
} from "./examples/useContext/example1/context/ThemeContext";
import {
  userInitialState,
  UserContext,
} from "./examples/useContext/example1/context/UserContext";

function App() {
  const [isDark, setIsDark] = useState(themeInitialState.isDark);
  const [username, setUsername] = useState(userInitialState.username);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <h1>Examples</h1>
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      {/* <UseCallbackExample1 /> */}
      {/* <UseCallbackExample2 /> */}
      <UserContext.Provider value={{ username }}>
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
          <Page />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
