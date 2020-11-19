function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -6.273300, lng: 106.823925},
      scrollwheel: false,
      zoom: 3
    });
  }