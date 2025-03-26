import axios, { AxiosInstance } from "axios";
import { IssInfos } from "./types";

const BaseUrl = import.meta.env.VITE_ISS_API_BASE_URL;
const IssID = import.meta.env.VITE_ISS_ID;

class IssTrackerAPI {
  private axios: AxiosInstance;

  constructor(timeout: number) {
    this.axios = axios.create({
      baseURL: BaseUrl,
      timeout
    });
  };

  async getIss() {
    try {
      const { data } = await this.axios.get(`/${IssID}`);

      const issInfos: IssInfos = {
        latitude: data.latitude,
        longitude: data.longitude,
        altitude: data.longitude,
        velocity: data.velocity,
      };

      return issInfos;
    } catch (error) {

    }
  };
}

export default IssTrackerAPI;
