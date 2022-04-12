export const tiempoCompleto = function () {
  var date = new Date();
  const formatDate = (date) => {
    let formatted_date = `${date.getFullYear()}-${("0" + (date.getMonth() + 1).toString()).substr(-2)}-${("0" + (date.getDate()).toString()).substr(-2)} ${date.getHours()}:${("0" + (date.getMinutes()).toString()).substr(-2)}:${("0" + (date.getSeconds()).toString()).substr(-2)}-03`;
    return formatted_date;
  };
  return formatDate(date);
};

export const tiempoParcial = function (fecha) {
  let date = fecha?fecha:new Date()
  const formatDate = (date) => {
    let formatted_date = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    return formatted_date;
  };
  return formatDate(date);
};
export const orderTime = function (fecha , n) {
  const order = `${fecha.slice(8)}-${fecha.slice(5 , 7)}-${fecha.slice(n , 4)}`
  return order;
};

function haversineDistance(coords1, coords2, isMiles) {
  function toRad(x) {
    return (x * Math.PI) / 180;
  }

  var lon1 = coords1[0];
  var lat1 = coords1[1];

  var lon2 = coords2[0];
  var lat2 = coords2[1];

  var R = 6371; // km

  var x1 = lat2 - lat1;
  var dLat = toRad(x1);
  var x2 = lon2 - lon1;
  var dLon = toRad(x2);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;

  if (isMiles) d /= 1.60934;

  return d * 1609.34;
}
export default haversineDistance;
