function initMap() {
  var loc1 = {lat: 35, lng: 103}
  var loc2 = {lat: 23.7, lng: 90.35}
  var loc3 = {lat: 17.8, lng: 31}
  var loc4 = {lat: 52.5, lng: 13.3}

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.6, lng: 73},
    scrollwheel: false,
    zoom: 3
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: loc1,
    label: '6',
    title: 'Name 1'
  });

  var marker = new google.maps.Marker({
    map: map,
    position: loc2,
    label: '2',
    title: 'Name 2'
  });

  var marker = new google.maps.Marker({
    map: map,
    position: loc3,
    label: '3',
    title: 'Name 3'
  });
  
  var marker = new google.maps.Marker({
    map: map,
    position: loc3,
    label: '3',
    title: 'Name 4'
  });

  var styles = [
    {
      featureType: "landscape",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "administrative.province",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  map.setOptions({styles: styles});
}
