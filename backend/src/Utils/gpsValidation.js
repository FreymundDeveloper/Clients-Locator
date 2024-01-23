function isValidLatitude(latitude) {
    return typeof latitude === 'number' && latitude >= -90 && latitude <= 90;
}
  
function isValidLongitude(longitude) {
    return typeof longitude === 'number' && longitude >= -180 && longitude <= 180;
}

module.exports = {
    isValidLatitude,
    isValidLongitude
};