const distance = (latitude1, longitude1, latitude2, longitude2) => {
  // const latitude1 = (latitude1 * Math.PI) / 180;
  // const longitude1 = (longitude1 * Math.PI) / 180;
  // const latitude2 = (latitude2 * Math.PI) / 180;
  // const longitude2 = (longitude2 * Math.PI) / 180;

  // const distanceLat = latitude2 - latitude1;
  // const distanceLon = longitude2 - longitude1;
  // const a =
  //   Math.pow(Math.sin(distanceLat / 2), 2) +
  //   Math.cos(latitude1) *
  //     Math.cos(latitude2) *
  //     Math.pow(Math.sin(distanceLon / 2), 2);

  // const c = 2 * Math.asin(Math.sqrt(a));

  // const r = 6371;

  // return c * r;
}

const getRadius = (latitude, longitude, radius) => {

    const kmXDegree = 111
    const degree = radius/kmXDegree

    return {
        maxLat: latitude + degree,
        minLat: latitude - degree,
        maxLon: longitude + degree,
        minLon: longitude - degree
    }
}

module.exports = { distance, getRadius }