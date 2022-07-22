# lotivis-geojson [![Node.js CI](https://github.com/lotivis/lotivis-geojson/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/lotivis/lotivis-geojson/actions/workflows/node.js.yml)

GeoJson for lotivis.js

## Installing

If you use npm, `npm install lotivis-geojson`. You can also download the [latest realease on GitHub](https://github.com/lotivis/lotivis-geojson/releases/latest). For using in browsers, you can load the UMD bundle from an npm-based CDN such as jsDelivr.

```html
<script src="https://cdn.jsdelivr.net/..."></script>
<script>

// ...

</script>

```

## API Reference

### lotivis.**[geojson](./src/geojson.js)**(string)

Creates and returns a [`GeoJSON`](./src/geojson.js) from the given json string.

### lotivis.**[geojsonFetch](./src/fetch.js)**(path)

Fetches and parses the [`GeoJSON`](./src/geojson.js) from the specified `path`.

```js
lotivis.geojsonFetch("path/to/geojson.geojson")
    .then((geojson) => {
        // do something with geojson ...
    })
    .catch((error) => { /* */});
```

### lotivis.**[geojsonGenerate](./src/generate.js)**(locations)

Creates and returns a generated [`GeoJSON`](./src/geojson.js) containing features for the specified location names. The specified name is set as `id` and `name` of the `properties` object of each feature.

### lotivis.**[geojsonFilter](./src/filter.js)**(json, ids, idValue)

Creates and returns a newly generated [`GeoJSON`](./src/geojson.js) containing only the features whose id is included in the specified collection of `ids`. 

### lotivis.**[geojsonJoin](./src/join.js)**(GeoJSON | Array\<Feature\>)

Creates and returns a newly generated [`GeoJSON`](./src/geojson.js) containing only one feature merged from all features. 

### lotivis.**[geojsonRemove](./src/remove.js)**(json, ids, idValue)

Creates and returns a newly generated [`GeoJSON`](./src/geojson.js) containing only the features whose id is NOT included in the specified collection of `ids`. 

### lotivis.**[geojsonAutoFeatureIDAccessor](./src/feature.accessors.js)**(feature)

Default accessors for the id of a feature. Checks for an id in the following presented order:

```js
feature.id || 
feature.properties.id || 
feature.properties.code ||
hash(feature.properties) ||
hash(feature)
```

### lotivis.**[geojsonAutoFeatureNameAccessor](./src/feature.accessors.js)**(feature)

Default accessors for the name of a feature. Checks for a name in the following presented order:

```js
feature.name || 
feature.properties.name || 
geojsonAutoFeatureIDAccessor(feature)
```

## Development

```bash
# build module
yarn build

# develop module
yarn build:watch
```
