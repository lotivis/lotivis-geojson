import { default as assert } from "assert";
import { readFileSync } from "fs";
import { geojsonJoin } from "../src/index.js";

let goeJSONBerlin = JSON.parse(
  readFileSync("test/data/berlin.geojson", "utf-8")
);

let joined = geojsonJoin(goeJSONBerlin);

it("geojsonJoin() creates a joined geojson", function () {
  assert.ok(joined);
});

it("geojsonJoin() joins the features to one", function () {
  assert.equal(joined.features.length, 1);
});
