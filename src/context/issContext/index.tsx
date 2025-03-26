import {
  createContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { IssInfos } from "../../services/api/types";
import IssTrackerAPI from "../../services/api";

type IssContextProps = {
  children: React.ReactNode,
}

export const issContext = createContext({});
const issTrackerAPI = new IssTrackerAPI(5000);

function IssContext({ children }: IssContextProps) {
  const [ issInfos, setIssInfos ] = useState<IssInfos>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchIssData = async () => {
      setIsLoading(true);
      const issData: IssInfos | undefined = await issTrackerAPI.getIss();

      if (issData != undefined) {
        setIssInfos(issData);
        setIsLoading(false);
      }
    };

    fetchIssData();

    const issDataIntervalID = setInterval(() => {
      fetchIssData();
    }, 3000);

    return () => {
      clearInterval(issDataIntervalID);
    }
  }, []);

  const providerValues = useMemo(() => ({
    issInfos,
    isLoading,
  }), [isLoading, issInfos]);

  return (
    <issContext.Provider
      value={providerValues}
    >
      { children }
    </issContext.Provider>
  );
};

export default IssContext;
