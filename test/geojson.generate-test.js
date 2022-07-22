import { default as assert } from "assert";
import { geojsonGenerate } from "../src/index.js";

let geoJSON = geojsonGenerate(["paris", "berlin", "rom"]);

it("geojsonGenerate() creates a geojson", function () {
  assert.ok(geoJSON);
});

it("geojsonGenerate() creates features of a geojson", function () {
  assert.ok(geoJSON.features);
});

it("geojsonGenerate() has the right amount of features", function () {
  assert.equal(geoJSON.features.length, 3);
});
