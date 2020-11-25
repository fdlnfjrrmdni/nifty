import axios from "axios";

import { ENV } from ".";

const host = axios.create({
  baseURL: ENV.host,
});

const placeholder = axios.create({
  baseURL: ENV.placeholder,
});
// type body
/* in here
..
..
*/

const api = {
  getSeasons: () => host.get("seasons"),
  getPlaceholder: () => placeholder.get("/todos"),
};

export default api;
