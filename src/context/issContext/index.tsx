import {
  createContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { IssInfos } from "../../services/api/types";
import IssTrackerAPI from "../../services/api";
import { contextType } from "./types";

type IssContextProps = {
  children: React.ReactNode,
}

export const issContext = createContext<contextType>({
  issInfos: {
    altitude: 0,
    latitude: 0,
    longitude: 0,
    velocity: 0,
  },
  isLoading: false,
});

const issTrackerAPI = new IssTrackerAPI(5000);

function IssContext({ children }: IssContextProps) {
  const [ issInfos, setIssInfos ] = useState<IssInfos>({
    altitude: 0,
    latitude: 0,
    longitude: 0,
    velocity: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchIssData = async () => {
      const issData: IssInfos = await issTrackerAPI.getIss();

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
