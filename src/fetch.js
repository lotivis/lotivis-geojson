import { GeoJSON } from "./geojson.js";

export async function geojsonFetch(path) {
  return fetch(path)
    .then((res) => res.json())
    .then((json) => GeoJSON(json));
}

export async function fetchGeojson(path) {
  return fetch(path)
    .then((res) => res.json())
    .then((json) => GeoJSON(json));
}
