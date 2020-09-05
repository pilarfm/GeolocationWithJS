/*---------------MAPAS DE OPENMAPS--------------------------------------------------------------------------*/
var openStreetMap = new ol.layer.Tile({
  source: new ol.source.OSM({
    attributions: [
      'All maps <a href="http://www.openstreetmap.org/">OpenStreetMap</a>',
      ol.source.OSM.ATTRIBUTION
    ],
    opaque: false,
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
  })
});
/*-----------FIN MAPAS DE OPENMAPS--------------------------------------------------------------------------*/
