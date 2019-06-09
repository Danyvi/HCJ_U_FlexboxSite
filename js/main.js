function initMap() {

const loc = {lat: 36.852924, lng: -75.977982};
const map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 14
});

const marker = new google.maps.Marker(
    { position: loc,
      map:map }
);

}