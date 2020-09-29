var ALOSDSMDEM = ee.Image  ('JAXA/ALOS/AW3D30_V1_1');
var DEM = ALOSDSMDEM.select('AVE').clip (geometry);

var slope_30m =  ee.Terrain.slope (DEM);
//var aspect =  ee.Terrain.aspect (DEM);


Export.image.toDrive({
  image: slope_30m,
  description: 'LAFirA_ALOS_SLOPE30M',
  scale: 30,
  maxPixels: 1000000000000,
  region: geometry});
  