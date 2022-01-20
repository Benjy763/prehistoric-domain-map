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

const supportedPlatform = [
  'Win32',
  'MacIntel',
  'MacPPC',
  'Mac68K',
  'Win16',
  'Linux i686',
  'Linux x86_64',
  'Windows'
];
let isMobile =
  !supportedPlatform.includes(window.navigator.platform) &&
  !supportedPlatform.includes(window.navigator.userAgentData?.platform);

let tourMarker,
  canoeMarker,
  aviaryMarker,
  homeMarker,
  boatMarker,
  restaurantMarker,
  shopMarker,
  beachMarker,
  cineMarker,
  lagoonMarker,
  securityMarker,
  brachioMarker,
  diloMarker,
  trexMarker,
  deinoMarker,
  triceMarker,
  brachio2Marker,
  trice2Marker,
  pteranodonMarker,
  quetzaMarker,
  spinoMarker,
  stegoMarker,
  megMarker;

initMapEvents();
initMap();
addMarkers();
addLayers();

function initMap() {
  console.log(isMobile);
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
    beachMarker,
    cineMarker,
    lagoonMarker,
    securityMarker
  ]);
  services = L.layerGroup([
    homeMarker,
    boatMarker,
    restaurantMarker,
    shopMarker
  ]);
  infos = L.layerGroup([
    brachioMarker,
    diloMarker,
    trexMarker,
    deinoMarker,
    triceMarker,
    brachio2Marker,
    trice2Marker,
    pteranodonMarker,
    quetzaMarker,
    spinoMarker,
    stegoMarker,
    megMarker
  ]);

  map.addLayer(attractions);
  map.addLayer(services);
  map.addLayer(infos);
}

function addMarkers() {
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
    <img src="/assets/item-tour-white.png"></img>
    <div class="leaflet-popup__description">Experience the night tour of the park</div>
    <div class="leaflet-popup__description">DESKTOP · PCVR</div>
    ${
      isMobile
        ? '<a class="leaflet-popup__button leaflet-popup__button-closed" disabled>Device not supported</a>'
        : '<a href="https://tour.prehistoricdomain.com/tour-scene/" class="leaflet-popup__button leaflet-popup__button-open">Open</a>'
    }
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
    <img src="/assets/item-canoe-white.png"></img>
    <div class="leaflet-popup__description">Discover an unknown world by canoe</div>
    <div class="leaflet-popup__description">DESKTOP · PCVR · MOBILE · QUEST</div>
    <a class="leaflet-popup__button leaflet-popup__button-closed" disabled>${
      isMobile ? 'Device not supported' : 'Soon'
    }</a>
  `);

  aviaryMarker = L.marker([15.114552871944115, -59.94140625000001], {
    icon: L.icon({
      iconUrl: 'assets/map/map-aviary.png',
      iconSize: [markerSize.lg, markerSize.lg],
      iconAnchor: [markerSize.lg / 2, markerSize.lg / 2],
      popupAnchor: [0, -markerSize.lg / 2]
    })
  }).bindPopup(`
    <div class="leaflet-popup__title">Flying giants</div>
    <div class="leaflet-popup__separation"></div>
    <img src="/assets/item-aviary-white.png"></img>
    <div class="leaflet-popup__description">Meet the giant flying reptiles</div>
    <div class="leaflet-popup__description">DESKTOP · PCVR · MOBILE · QUEST</div>
    ${
      isMobile
        ? '<a class="leaflet-popup__button leaflet-popup__button-closed" disabled>Device not supported</a>'
        : '<a href="https://tour.prehistoricdomain.com/aviary-scene/" class="leaflet-popup__button leaflet-popup__button-open">Open</a>'
    }
  `);

  lagoonMarker = L.marker([-50, 18], {
    icon: L.icon({
      iconUrl: 'assets/map/map-lagoon.png',
      iconSize: [markerSize.lg, markerSize.lg],
      iconAnchor: [markerSize.lg / 2, markerSize.lg / 2],
      popupAnchor: [0, -markerSize.lg / 2]
    })
  }).bindPopup(`
    <div class="leaflet-popup__title">Big Jaws</div>
    <div class="leaflet-popup__separation"></div>
    <img src="/assets/item-lagoon-white.png"></img>
    <div class="leaflet-popup__description">Meet the aquatic creatures of prehistory</div>
    <div class="leaflet-popup__description">DESKTOP · PCVR · MOBILE · QUEST</div>
    ${
      isMobile
        ? '<a class="leaflet-popup__button leaflet-popup__button-closed" disabled>Device not supported</a>'
        : '<a href="https://tour.prehistoricdomain.com/lagoon-scene/" class="leaflet-popup__button leaflet-popup__button-open">Open</a>'
    }
  `);

  cineMarker = L.marker([4, 13], {
    icon: L.icon({
      iconUrl: 'assets/map/map-cine.png',
      iconSize: [markerSize.lg, markerSize.lg],
      iconAnchor: [markerSize.lg / 2, markerSize.lg / 2],
      popupAnchor: [0, -markerSize.lg / 2]
    })
  }).bindPopup(`
    <div class="leaflet-popup__title">Cinemagma</div>
    <div class="leaflet-popup__separation"></div>
    <img src="/assets/item-cine-white.png"></img>
    <div class="leaflet-popup__description">Dinosaurs on the big screen too</div>
    <div class="leaflet-popup__description">DESKTOP · PCVR · MOBILE · QUEST</div>
    ${
      isMobile
        ? '<a class="leaflet-popup__button leaflet-popup__button-closed" disabled>Device not supported</a>'
        : '<a href="https://tour.prehistoricdomain.com/aviary-scene/" class="leaflet-popup__button leaflet-popup__button-open" disabled>Open</a>'
    }
  `);

  securityMarker = L.marker([15, 35], {
    icon: L.icon({
      iconUrl: 'assets/map/map-security.png',
      iconSize: [markerSize.lg, markerSize.lg],
      iconAnchor: [markerSize.lg / 2, markerSize.lg / 2],
      popupAnchor: [0, -markerSize.lg / 2]
    })
  }).bindPopup(`
    <div class="leaflet-popup__title">High Security</div>
    <div class="leaflet-popup__separation"></div>
    <img src="/assets/item-security-white.png"></img>
    <div class="leaflet-popup__description">The biggest of all the carnivorous dinosaurs</div>
    <div class="leaflet-popup__description">DESKTOP · PCVR · MOBILE · QUEST</div>
    <a class="leaflet-popup__button leaflet-popup__button-closed" disabled>${
      isMobile ? 'Device not supported' : 'Soon'
    }</a>
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
    <img src="/assets/item-beach-white.png"></img>
    <div class="leaflet-popup__description">Relax on the most exotic beach</div>
    <div class="leaflet-popup__description">DESKTOP · PCVR · MOBILE · QUEST</div>
    <a class="leaflet-popup__button leaflet-popup__button-closed" disabled>${
      isMobile ? 'Device not supported' : 'Soon'
    }</a>
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

  spinoMarker = L.marker([18, 44], {
    icon: L.icon({
      iconUrl: 'assets/map/map-spino.png',
      iconSize: [markerSize.sm, markerSize.sm],
      iconAnchor: [markerSize.sm / 2, markerSize.sm / 2],
      popupAnchor: [0, -markerSize.sm / 2]
    })
  }).bindPopup('Spinosaurus');

  megMarker = L.marker([-50, 28], {
    icon: L.icon({
      iconUrl: 'assets/map/map-meg.png',
      iconSize: [markerSize.sm, markerSize.sm],
      iconAnchor: [markerSize.sm / 2, markerSize.sm / 2],
      popupAnchor: [0, -markerSize.sm / 2]
    })
  }).bindPopup('Megalodon');

  quetzaMarker = L.marker([22, -55], {
    icon: L.icon({
      iconUrl: 'assets/map/map-quetza.png',
      iconSize: [markerSize.sm, markerSize.sm],
      iconAnchor: [markerSize.sm / 2, markerSize.sm / 2],
      popupAnchor: [0, -markerSize.sm / 2]
    })
  }).bindPopup('Quetzalcoatlus');

  stegoMarker = L.marker([-30, -20], {
    icon: L.icon({
      iconUrl: 'assets/map/map-stego.png',
      iconSize: [markerSize.sm, markerSize.sm],
      iconAnchor: [markerSize.sm / 2, markerSize.sm / 2],
      popupAnchor: [0, -markerSize.sm / 2]
    })
  }).bindPopup('Stegosaurus');

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
    <div class="leaflet-popup__title">Fossil Restaurant</div>
    <div class="leaflet-popup__separation"></div>
    <img src="/assets/item-eat-white.png"></img>
    <div class="leaflet-popup__description">Dishes from another time</div>
    <div class="leaflet-popup__description">Click to enter</div>
    <a class="leaflet-popup__button leaflet-popup__button-closed" disabled>Closed</a>
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
    <img src="/assets/item-shop-white.png"></img>
    <div class="leaflet-popup__description">Don't leave without a souvenir</div>
    <div class="leaflet-popup__description">Click to enter</div>
    <a class="leaflet-popup__button leaflet-popup__button-closed" disabled>Closed</a>
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
    cineMarker,
    lagoonMarker,
    securityMarker,
    brachioMarker,
    diloMarker,
    trexMarker,
    deinoMarker,
    triceMarker,
    brachio2Marker,
    trice2Marker,
    pteranodonMarker,
    quetzaMarker,
    spinoMarker,
    stegoMarker,
    megMarker
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
