import assert from "assert";
import { readFileSync } from "fs";
import { geojsonRemove } from "../src/index.js";

let geoJSON = JSON.parse(readFileSync("test/data/berlin.geojson", "utf-8"));
let idAccessor = (f) => f.properties["cartodb_id"];
let idsToRemove = [1, 2, 3, 4];

it("geojsonRemove() the geoJSON contains the right amount of features before removing", function () {
  assert.equal(geoJSON.features.length, 12);
});

it("geojsonRemove() the geoJSON contains the right amount of features after removing", function () {
  let removed = geojsonRemove(geoJSON, idsToRemove, idAccessor);
  assert.equal(removed.features.length, 8);
});
