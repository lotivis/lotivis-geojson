import assert from "assert";
import * as samples from "./sample.data.js";
import { remove } from "../src/js/geojson/remove.js";

describe("remove features from json", function () {
  let geoJSON = samples.readJSON("berlin.geojson");
  let idAccessor = (f) => f.properties["cartodb_id"];
  let idsToRemove = [1, 2, 3, 4];

  it("loads the geoJSON", function () {
    assert.ok(geoJSON);
  });

  it("the geoJSON contains the right amount of features before removing", function () {
    assert.equal(geoJSON.features.length, 12);
  });

  it("the geoJSON contains the right amount of features after removing", function () {
    let removed = remove(geoJSON, idsToRemove, idAccessor);
    assert.equal(removed.features.length, 8);
  });
});
