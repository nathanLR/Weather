import { SubmitedValues } from "./Types";
import * as Utils from "./Constants";

// const fetchData = async (filters: SubmitedValues, type: "current" | "forecast"): Promise<Record<string, unknown | number | string>> => {
//   const response =
//    await fetch(`${type === "current" ? Utils.API_URL_CURRENT : Utils.API_URL_FORECAST}q=${filters.cityName}&appid=${Utils.API_KEY}`);
//   const data = await response.json();
//   return data;
// };
const fetchData = async (filters: SubmitedValues, type: "current" | "forecast") => {
  const response = await fetch(`${type === "current" ? Utils.API_URL_CURRENT : Utils.API_URL_FORECAST}q=${filters.cityName}&units=metric&appid=${Utils.API_KEY}`);
  const data = await response.json();
  return data;
};

export default fetchData;
