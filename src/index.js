let map = L.map('map').setView([0, 0], 0);
let mapSW = [0, 3584],
  mapNE = [4096, 512];
let attractions = null,
  infos = null,
  services = null;

let tourMarker,
  canoeMarker,
  aviaryMarker,
  homeMarker,
  boatMarker,
  restaurantMarker,
  shopMarker,
  beachMarker,
  brachioMarker,
  diloMarker,
  trexMarker,
  deinoMarker,
  triceMarker,
  brachio2Marker,
  trice2Marker,
  pteranodonMarker;

initMapEvents();
initMap();
addMarkers();
addLayers();

function initMap() {
  L.tileLayer('assets/map-tiles/{z}/{x}/{y}.png', {
    minZoom: 3,
    maxZoom: 4,
    continuousWorld: false,
    noWrap: true
  }).addTo(map);

  map.setMaxBounds(
    new L.LatLngBounds(
      map.unproject(mapSW, map.getMaxZoom()),
      map.unproject(mapNE, map.getMaxZoom())
    )
  );
}

function addLayers() {
  attractions = L.layerGroup([
    tourMarker,
    canoeMarker,
    aviaryMarker,
    beachMarker
  ]);
  services = L.layerGroup([
    boatMarker,
    restaurantMarker,
    shopMarker,
    homeMarker
  ]);
  infos = L.layerGroup([
    brachioMarker,
    diloMarker,
    trexMarker,
    deinoMarker,
    triceMarker,
    brachio2Marker,
    trice2Marker,
    pteranodonMarker
  ]);

  map.addLayer(attractions);
  map.addLayer(services);
  map.addLayer(infos);
}

function addMarkers() {
  tourMarker = L.marker([17.308687886770034, 6.328125000000001], {
    icon: L.icon({
      iconUrl: 'assets/map/map-tour.png',
      iconSize: [60, 60],
      iconAnchor: [30, 30],
      popupAnchor: [0, -30]
    })
  }).bindPopup(`
    <div class="title">Prehistoric Tour</div>
    <div class="separation"></div>
    <img src="/assets/pd-tour.jpg"></img>
    <div class="description">Experience the night tour of the park</div>
    <div class="description">Click to enter</div>
    <button type="button" class="button open">Open</button>
  `);

  canoeMarker = L.marker([-9.96885060854611, -36.03515625000001], {
    icon: L.icon({
      iconUrl: 'assets/map/map-canoe.png',
      iconSize: [60, 60],
      iconAnchor: [30, 30],
      popupAnchor: [0, -30]
    })
  }).bindPopup(`
    <div class="title">Valley of wonders</div>
    <div class="separation"></div>
    <img src="/assets/pd-river.jpg"></img>
    <div class="description">Discover an unknown world by canoe</div>
    <div class="description">Click to enter</div>
    <button type="button" class="button closed" disabled>Closed</button>
  `);

  aviaryMarker = L.marker([15.114552871944115, -59.94140625000001], {
    icon: L.icon({
      iconUrl: 'assets/map/map-aviary.png',
      iconSize: [60, 60],
      iconAnchor: [30, 30],
      popupAnchor: [0, -30]
    })
  }).bindPopup(`
    <div class="title">Aviary</div>
    <div class="separation"></div>
    <img src="/assets/pd-aviary.jpg"></img>
    <div class="description">Meet the giant flying reptiles</div>
    <div class="description">Click to enter</div>
    <button type="button" class="button closed" disabled>Closed</button>
  `);

  beachMarker = L.marker([-31.80289258670676, -7.998046875000001], {
    icon: L.icon({
      iconUrl: 'assets/map/map-beach.png',
      iconSize: [60, 60],
      iconAnchor: [30, 30],
      popupAnchor: [0, -30]
    })
  }).bindPopup(`
    <div class="title">Cretaceous Beach</div>
    <div class="separation"></div>
    <img src="/assets/pd-beach.jpg"></img>
    <div class="description">Relax on the most exotic beach</div>
    <div class="description">Click to enter</div>
    <button type="button" class="button closed" disabled>Closed</button>
  `);

  brachioMarker = L.marker([21.453068633086783, -11.25], {
    icon: L.icon({
      iconUrl: 'assets/map/map-brachio.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    })
  }).bindPopup('Brachiosaurus');

  diloMarker = L.marker([39.63953756436671, -28.125000000000004], {
    icon: L.icon({
      iconUrl: 'assets/map/map-dilo.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    })
  }).bindPopup('Dilophosaurus');

  trexMarker = L.marker([44.59046718130883, -8.613281250000002], {
    icon: L.icon({
      iconUrl: 'assets/map/map-trex.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    })
  }).bindPopup('T-Rex');

  deinoMarker = L.marker([37.30027528134433, 10.371093750000002], {
    icon: L.icon({
      iconUrl: 'assets/map/map-deino.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    })
  }).bindPopup('Deinonychus');

  triceMarker = L.marker([26.58852714730864, 17.050781250000004], {
    icon: L.icon({
      iconUrl: 'assets/map/map-trice.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    })
  }).bindPopup('Triceratops');

  brachio2Marker = L.marker([-15.623036831528252, -22.851562500000004], {
    icon: L.icon({
      iconUrl: 'assets/map/map-brachio.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    })
  }).bindPopup('Brachiosaurus');

  trice2Marker = L.marker([-21.94304553343818, -23.378906250000004], {
    icon: L.icon({
      iconUrl: 'assets/map/map-trice.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    })
  }).bindPopup('Triceratops');

  pteranodonMarker = L.marker([21.94304553343818, -65.21484375000001], {
    icon: L.icon({
      iconUrl: 'assets/map/map-pteranodon.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    })
  }).bindPopup('Pteranodon');

  boatMarker = L.marker([-5.266007882805498, 107.05078125000001], {
    icon: L.icon({
      iconUrl: 'assets/map/map-boat.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    })
  }).bindPopup(`
    <div class="title">Ferry</div>
    <div class="separation"></div>
    <div class="description">Ferry landing</div>
  `);

  restaurantMarker = L.marker([6.315298538330033, 3.251953125], {
    icon: L.icon({
      iconUrl: 'assets/map/map-eat.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    })
  }).bindPopup(`
    <div class="title">Fossile Restaurant</div>
    <div class="separation"></div>
    <img src="/assets/pd-eat.jpg"></img>
    <div class="description">Dishes from another time</div>
    <div class="description">Click to enter</div>
    <button type="button" class="button closed" disabled>Closed</button>
  `);

  shopMarker = L.marker([3.425691524418062, 6.591796875000001], {
    icon: L.icon({
      iconUrl: 'assets/map/map-shop.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20]
    })
  }).bindPopup(`
    <div class="title">Prehistoric Domain Shop</div>
    <div class="separation"></div>
    <img src="/assets/pd-shop.jpg"></img>
    <div class="description">Don't leave without a souvenir</div>
    <div class="description">Click to enter</div>
    <button type="button" class="button closed" disabled>Closed</button>
  `);

  homeMarker = L.marker([6.664607562172573, 8.613281250000002], {
    icon: L.icon({
      iconUrl: 'assets/map/map-home.png',
      iconSize: [40, 40], // size of the icon
      iconAnchor: [20, 20], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -20] // point from which the popup should open relative to the iconAnchor
    })
  }).bindPopup(`
    <div class="title">Park entrance</div>
    <div class="separation"></div>
    <div class="description">Your journey starts here !</div>
  `);
}

function initMapEvents() {
  map.on('click', (e) => {
    console.log(e.latlng);
  });
}
