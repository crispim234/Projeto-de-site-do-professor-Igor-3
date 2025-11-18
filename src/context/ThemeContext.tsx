import React, { createContext, useContext, useReducer } from "react";

type ThemeState = { theme: "light" | "dark" };
type ThemeAction = { type: "TOGGLE_THEME" };

const ThemeContext = createContext<
  | {
      state: ThemeState;
      dispatch: React.Dispatch<ThemeAction>;
    }
  | undefined
>(undefined);

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(themeReducer, { theme: "light" });
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
