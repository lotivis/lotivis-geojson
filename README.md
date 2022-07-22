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

### lotivis.**[geojsonGenerate](./src/generate.js)**(locations)

### lotivis.**[geojsonFilter](./src/filter.js)**(json, ids, idValue)

### lotivis.**[geojsonJoin](./src/join.js)**(GeoJSON | Array\<Feature\>)

### lotivis.**[geojsonRemove](./src/remove.js)**(json, ids, idValue)

### lotivis.**[geojsonAutoFeatureIDAccessor](./src/feature.accessors.js)**(feature)

### lotivis.**[geojsonAutoFeatureNameAccessor](./src/feature.accessors.js)**(feature)

## Development

```bash
# build module
yarn build

# develop module
yarn build:watch
```
