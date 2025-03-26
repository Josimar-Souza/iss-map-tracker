import { createContext } from "react";

type IssContextProps = {
  children: React.ReactNode,
}

const issContext = createContext({});

function IssContext({ children }: IssContextProps) {
  const providerValues = {};

  return (
    <issContext.Provider
      value={providerValues}
    >
      { children }
    </issContext.Provider>
  );
};

export default IssContext;
