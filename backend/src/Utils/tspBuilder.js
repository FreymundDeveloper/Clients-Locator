function calculateDistance(latitudeOne, longitudeOne, latitudeTwo, longitudeTwo) {
    const EARTHRAY = 6371;

    const distanceLatitude = (latitudeTwo - latitudeOne) * (Math.PI / 180);
    const distanceLongitude = (longitudeTwo - longitudeOne) * (Math.PI / 180);

    const formulaHaversine =
        Math.sin(distanceLatitude / 2) * Math.sin(distanceLatitude / 2) +
        Math.cos(latitudeOne * (Math.PI / 180)) * Math.cos(latitudeTwo * (Math.PI / 180)) * Math.sin(distanceLongitude / 2) * Math.sin(distanceLongitude / 2);

    const arcTangent = 2 * Math.atan2(Math.sqrt(formulaHaversine), Math.sqrt(1 - formulaHaversine));

    const distance = EARTHRAY * arcTangent;
    return distance;
}

function calculateTotalDistance(route) {
    let totalDistance = 0;

    for (let index = 0; index < route.length - 1; index++) {
        const currentClient = route[index];
        const nextClient = route[index + 1];
        const distance = calculateDistance(currentClient.latitude, currentClient.longitude, nextClient.latitude, nextClient.longitude);
        totalDistance += distance;
    }

    const lastClient = route[route.length - 1];
    const distanceToCompany = calculateDistance(lastClient.latitude, lastClient.longitude, 0, 0);
    totalDistance += distanceToCompany;

    return totalDistance;
}

function generatePermutations(array) {
    const result = [];

    function permute(arr, start) {
        if (start === arr.length - 1) {
            result.push([...arr]);
            return;
        }

        for (let index = start; index < arr.length; index++) {
            [arr[start], arr[index]] = [arr[index], arr[start]];

            permute(arr, start + 1);

            [arr[start], arr[index]] = [arr[index], arr[start]];
        }
    }

    permute(array, 0);
    return result;
}

module.exports = {
    calculateDistance,
    calculateTotalDistance,
    generatePermutations,
};
  