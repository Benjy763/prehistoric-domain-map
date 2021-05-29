let map = L.map('map').setView([0, 0], 0);
let mapSW = [0, 3584],
  mapNE = [4096, 512];
let attractions = null,
  infos = null,
  services = null;

let markers = {};
let markerSize = {
  sm: 40,
  lg: 60
};

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

  if (window.screen.availWidth > 2500) {
    map.setMinZoom(4);
    markerSize = {
      sm: 80,
      lg: 120
    };
  }

  L.LayerGroup.include({
    customGetLayer: function (id) {
      for (var i in this._layers) {
        if (this._layers[i].id == id) {
          return this._layers[i];
        }
      }
    }
  });
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
  // console.log(markers['tourMarker']);
  // attractions.removeLayer(markers['tourMarker']);
  // attractions.addLayer(markers['tourMarker']);
  // map.removeLayer(infos);
  // map.addLayer(infos);
  // tourMarker.openPopup();
  // map.panTo(trice2Marker.getLatLng());
}

function addMarkers() {
  tourMarker = L.marker([17.308687886770034, 6.328125000000001], {
    icon: L.icon({
      iconUrl: 'assets/map/map-tour.png',
      iconSize: [markerSize.lg, markerSize.lg],
      iconAnchor: [markerSize.lg / 2, markerSize.lg / 2],
      popupAnchor: [0, -markerSize.lg / 2]
    })
  }).bindPopup(`
    <div class="leaflet-popup__title">Prehistoric Tour</div>
    <div class="leaflet-popup__separation"></div>
    <img src="/assets/pd-tour.jpg"></img>
    <div class="leaflet-popup__description">Experience the night tour of the park</div>
    <div class="leaflet-popup__description">Click to enter</div>
    <button type="button" class="leaflet-popup__button leaflet-popup__button-open">Open</button>
  `);

  canoeMarker = L.marker([-9.96885060854611, -36.03515625000001], {
    icon: L.icon({
      iconUrl: 'assets/map/map-canoe.png',
      iconSize: [markerSize.lg, markerSize.lg],
      iconAnchor: [markerSize.lg / 2, markerSize.lg / 2],
      popupAnchor: [0, -markerSize.lg / 2]
    })
  }).bindPopup(`
    <div class="leaflet-popup__title">Valley of wonders</div>
    <div class="leaflet-popup__separation"></div>
    <img src="/assets/pd-river.jpg"></img>
    <div class="leaflet-popup__description">Discover an unknown world by canoe</div>
    <div class="leaflet-popup__description">Click to enter</div>
    <button type="button" class="leaflet-popup__button leaflet-popup__button-closed" disabled>Closed</button>
  `);

  aviaryMarker = L.marker([15.114552871944115, -59.94140625000001], {
    icon: L.icon({
      iconUrl: 'assets/map/map-aviary.png',
      iconSize: [markerSize.lg, markerSize.lg],
      iconAnchor: [markerSize.lg / 2, markerSize.lg / 2],
      popupAnchor: [0, -markerSize.lg / 2]
    })
  }).bindPopup(`
    <div class="leaflet-popup__title">Aviary</div>
    <div class="leaflet-popup__separation"></div>
    <img src="/assets/pd-aviary.jpg"></img>
    <div class="leaflet-popup__description">Meet the giant flying reptiles</div>
    <div class="leaflet-popup__description">Click to enter</div>
    <button type="button" class="leaflet-popup__button leaflet-popup__button-closed" disabled>Closed</button>
  `);

  beachMarker = L.marker([-31.80289258670676, -7.998046875000001], {
    icon: L.icon({
      iconUrl: 'assets/map/map-beach.png',
      iconSize: [markerSize.lg, markerSize.lg],
      iconAnchor: [markerSize.lg / 2, markerSize.lg / 2],
      popupAnchor: [0, -markerSize.lg / 2]
    })
  }).bindPopup(`
    <div class="leaflet-popup__title">Cretaceous Beach</div>
    <div class="leaflet-popup__separation"></div>
    <img src="/assets/pd-beach.jpg"></img>
    <div class="leaflet-popup__description">Relax on the most exotic beach</div>
    <div class="leaflet-popup__description">Click to enter</div>
    <button type="button" class="leaflet-popup__button leaflet-popup__button-closed" disabled>Closed</button>
  `);

  brachioMarker = L.marker([21.453068633086783, -11.25], {
    icon: L.icon({
      iconUrl: 'assets/map/map-brachio.png',
      iconSize: [markerSize.sm, markerSize.sm],
      iconAnchor: [markerSize.sm / 2, markerSize.sm / 2],
      popupAnchor: [0, -markerSize.sm / 2]
    })
  }).bindPopup('Brachiosaurus');

  diloMarker = L.marker([39.63953756436671, -28.125000000000004], {
    icon: L.icon({
      iconUrl: 'assets/map/map-dilo.png',
      iconSize: [markerSize.sm, markerSize.sm],
      iconAnchor: [markerSize.sm / 2, markerSize.sm / 2],
      popupAnchor: [0, -markerSize.sm / 2]
    })
  }).bindPopup('Dilophosaurus');

  trexMarker = L.marker([44.59046718130883, -8.613281250000002], {
    icon: L.icon({
      iconUrl: 'assets/map/map-trex.png',
      iconSize: [markerSize.sm, markerSize.sm],
      iconAnchor: [markerSize.sm / 2, markerSize.sm / 2],
      popupAnchor: [0, -markerSize.sm / 2]
    })
  }).bindPopup('T-Rex');

  deinoMarker = L.marker([37.30027528134433, 10.371093750000002], {
    icon: L.icon({
      iconUrl: 'assets/map/map-deino.png',
      iconSize: [markerSize.sm, markerSize.sm],
      iconAnchor: [markerSize.sm / 2, markerSize.sm / 2],
      popupAnchor: [0, -markerSize.sm / 2]
    })
  }).bindPopup('Deinonychus');

  triceMarker = L.marker([26.58852714730864, 17.050781250000004], {
    icon: L.icon({
      iconUrl: 'assets/map/map-trice.png',
      iconSize: [markerSize.sm, markerSize.sm],
      iconAnchor: [markerSize.sm / 2, markerSize.sm / 2],
      popupAnchor: [0, -markerSize.sm / 2]
    })
  }).bindPopup('Triceratops');

  brachio2Marker = L.marker([-15.623036831528252, -22.851562500000004], {
    icon: L.icon({
      iconUrl: 'assets/map/map-brachio.png',
      iconSize: [markerSize.sm, markerSize.sm],
      iconAnchor: [markerSize.sm / 2, markerSize.sm / 2],
      popupAnchor: [0, -markerSize.sm / 2]
    })
  }).bindPopup('Brachiosaurus');

  trice2Marker = L.marker([-21.94304553343818, -23.378906250000004], {
    icon: L.icon({
      iconUrl: 'assets/map/map-trice.png',
      iconSize: [markerSize.sm, markerSize.sm],
      iconAnchor: [markerSize.sm / 2, markerSize.sm / 2],
      popupAnchor: [0, -markerSize.sm / 2]
    })
  }).bindPopup('Triceratops');

  pteranodonMarker = L.marker([21.94304553343818, -65.21484375000001], {
    icon: L.icon({
      iconUrl: 'assets/map/map-pteranodon.png',
      iconSize: [markerSize.sm, markerSize.sm],
      iconAnchor: [markerSize.sm / 2, markerSize.sm / 2],
      popupAnchor: [0, -markerSize.sm / 2]
    })
  }).bindPopup('Pteranodon');

  boatMarker = L.marker([-5.266007882805498, 107.05078125000001], {
    icon: L.icon({
      iconUrl: 'assets/map/map-boat.png',
      iconSize: [markerSize.sm, markerSize.sm],
      iconAnchor: [markerSize.sm / 2, markerSize.sm / 2],
      popupAnchor: [0, -markerSize.sm / 2]
    })
  }).bindPopup(`
    <div class="title">Ferry</div>
    <div class="separation"></div>
    <div class="description">Ferry landing</div>
  `);

  restaurantMarker = L.marker([6.315298538330033, 3.251953125], {
    icon: L.icon({
      iconUrl: 'assets/map/map-eat.png',
      iconSize: [markerSize.sm, markerSize.sm],
      iconAnchor: [markerSize.sm / 2, markerSize.sm / 2],
      popupAnchor: [0, -markerSize.sm / 2]
    })
  }).bindPopup(`
    <div class="leaflet-popup__title">Fossile Restaurant</div>
    <div class="leaflet-popup__separation"></div>
    <img src="/assets/pd-eat.jpg"></img>
    <div class="leaflet-popup__description">Dishes from another time</div>
    <div class="leaflet-popup__description">Click to enter</div>
    <button type="button" class="leaflet-popup__button leaflet-popup__button-closed" disabled>Closed</button>
  `);

  shopMarker = L.marker([3.425691524418062, 6.591796875000001], {
    icon: L.icon({
      iconUrl: 'assets/map/map-shop.png',
      iconSize: [markerSize.sm, markerSize.sm],
      iconAnchor: [markerSize.sm / 2, markerSize.sm / 2],
      popupAnchor: [0, -markerSize.sm / 2]
    })
  }).bindPopup(`
    <div class="leaflet-popup__title">Prehistoric Domain Shop</div>
    <div class="leaflet-popup__separation"></div>
    <img src="/assets/pd-shop.jpg"></img>
    <div class="leaflet-popup__description">Don't leave without a souvenir</div>
    <div class="leaflet-popup__description">Click to enter</div>
    <button type="button" class="leaflet-popup__button leaflet-popup__button-closed" disabled>Closed</button>
  `);

  homeMarker = L.marker([6.664607562172573, 8.613281250000002], {
    icon: L.icon({
      iconUrl: 'assets/map/map-home.png',
      iconSize: [markerSize.sm, markerSize.sm],
      iconAnchor: [markerSize.sm / 2, markerSize.sm / 2],
      popupAnchor: [0, -markerSize.sm / 2]
    })
  }).bindPopup(`
    <div class="leaflet-popup__title">Park entrance</div>
    <div class="leaflet-popup__separation"></div>
    <div class="leaflet-popup__description">Your journey starts here !</div>
  `);

  markers = {
    tourMarker,
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
    pteranodonMarker
  };
}

function initMapEvents() {
  // map.on('click', (e) => {
  //   console.log(e.latlng);
  // });
  panSidebar();
  linkSidebarInputs();
}

function panSidebar() {
  let layerControl = document.querySelector('.layer-control');
  let pan = document.querySelector('#pan img');

  if (window.screen.availWidth < 800) {
    let width = document.querySelector('.layer-control').offsetWidth;
    layerControl.style.right = `-${width}px`;
    pan.style.transform = 'rotate(180deg)';
  }

  document.querySelector('#pan').addEventListener('click', function () {
    if (layerControl.style.right !== '' && layerControl.style.right !== '0px') {
      pan.style.transform = 'rotate(0)';
      layerControl.style.right = 0;
      return;
    }
    let width = document.querySelector('.layer-control').offsetWidth;
    layerControl.style.right = `-${width}px`;
    pan.style.transform = 'rotate(180deg)';
  });
}

function linkSidebarInputs() {
  let inputs = document.querySelectorAll('.layer-control-wrapper .item');
  for (i = 0; i < inputs.length; i++) {
    (function (i) {
      inputs[i].addEventListener('click', function () {
        markers[inputs[i].getAttribute('data-marker')].openPopup();
        map.panTo(markers[inputs[i].getAttribute('data-marker')].getLatLng());
      });
    })(i);
  }
}
