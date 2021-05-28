let map = L.map('map').setView([0, 0], 0);
L.tileLayer('map-tiles/{z}/{x}/{y}.png', {
  minZoom: 3,
  maxZoom: 4,
  continuousWorld: false,
  noWrap: true
}).addTo(map);

// listen for screen resize events
window.addEventListener('resize', function(event){
  // get the width of the screen after the resize event
  let width = document.documentElement.clientWidth;
  // tablets are between 768 and 922 pixels wide
  // phones are less than 768 pixels wide
  if (width < 768) {
      // set the zoom level to 10
      map.setZoom(2);
      map.setMinZoom(2);
  }  else {
      // set the zoom level to 8
      map.setZoom(3);
      map.setMinZoom(3);
  }
});