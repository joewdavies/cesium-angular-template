function _transformPoint(lng, lat, sourceEPSG, destEPSG) {
  //Si no se indican sistemas utilizar valores por defecto
  //sourceEPSG = ((sourceEPSG != null && sourceEPSG != '') ? sourceEPSG : _default_epsg_coor);
  //destEPSG = ((destEPSG != null && destEPSG != '') ? destEPSG : _default_epsg_map);

  var source = new proj4.Proj(sourceEPSG);
  var dest = new proj4.Proj(destEPSG);
  var pto = proj4.toPoint([lng, lat]);
  //Realizar transformacion solo si los sitemas son distintos
  if (sourceEPSG != destEPSG) {
    var source = new proj4.Proj(sourceEPSG);
    var dest = new proj4.Proj(destEPSG);
    proj4.transform(source, dest, pto);
  }
  var coord = {
    x: pto.x,
    y: pto.y,
    srs: destEPSG
  };
  return coord;
}
