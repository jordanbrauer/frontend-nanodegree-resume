// bio
var HTMLheaderName = '<h1>%data%</h1>';
var HTMLheaderRole = '<p>%data%</p>';
var HTMLbioPic = '<img src="%data%" alt="Resume bio picture" class="thumbnail"><br>';
var HTMLwelcomeMsg = '<p>%data%</p>';

// skills section
var HTMLskillsStart = `
<h2 id="skillsMagellan" class="fadein frame-zero">Skills at a Glance</h2>
<div id="skills" class="row section fadein frame-zero small-up-2 medium-up-3 large-up-6" data-magellan-target="skillsMagellan">
</div>
`;

// individual skill
var HTMLskills = '<div class="column">%data%</div>';

// contacts header
var HTMLmobileTop = `
<li class="flex-item">
  <a href="tel:+1%data%" aria-label="%data%">
    <i class="fa fa-md fa-phone" aria-hidden="true"></i>
  </a>
</li>
`;

var HTMLemailTop = `
<li class="flex-item">
  <a href="mailto:%data%?subject=Resume" aria-label="%data%">
    <i class="fa fa-md fa-envelope" aria-hidden="true"></i>
  </a>
</li>
`;

var HTMLtwitterTop = `
<li class="flex-item">
  <a href="%data%" target="_blank" aria-label="%data%">
    <i class="fa fa-md fa-twitter" aria-hidden="true"></i>
  </a>
</li>
`;

var HTMLgithubTop = `
<li class="flex-item">
  <a href="%data%" target="_blank" aria-label="%data%">
    <i class="fa fa-md fa-github" aria-hidden="true"></i>
  </a>
</li>
`;

var HTMLlocationTop = `
<li class="flex-item">
  <a href="https://www.google.ca/maps/search/%data%" target="_blank" aria-label="%data%">
    <i class="fa fa-md fa-map-marker" aria-hidden="true"></i>
  </a>
</li>
`;

/*
var HTMLcontactGenericTop = `
<li class="flex-item">
  <span class="orange-text">%contact%</span>
  <span class="white-text">%data%</span>
</li>
`;
*/

/*
var HTMLblogTop = `
<li class="flex-item">
  <span class="orange-text">blog</span>
  <span class="white-text">%data%</span>
</li>
`;
*/


// contacts footer
var HTMLmobileBottom = `
<li class="flex-item">
  <a aria-label="%data%">
    <i class="fa fa-md fa-phone" aria-hidden="true"></i>
    %data%
  </a>
</li>
`;

var HTMLemailBottom = `
<li class="flex-item">
  <a href="mailto:%data%?subject=Resume" aria-label="%data%">
    <i class="fa fa-md fa-envelope" aria-hidden="true"></i>
    Email
  </a>
</li>
`;

var HTMLtwitterBottom = `
<li class="flex-item">
  <a href="%data%" target="_blank" aria-label="%data%">
    <i class="fa fa-md fa-twitter" aria-hidden="true"></i>
    Twitter
  </a>
</li>
`;

var HTMLgithubBottom = `
<li class="flex-item">
  <a href="%data%" target="_blank" aria-label="%data%">
    <i class="fa fa-md fa-github" aria-hidden="true"></i>
    GitHub
  </a>
</li>
`;

var HTMLlocationBottom = `
<li class="flex-item">
  <a href="https://www.google.ca/maps/search/%data%" target="_blank" aria-label="%data%">
    <i class="fa fa-md fa-map-marker" aria-hidden="true"></i>
    %data%
  </a>
</li>
`;

/*
var HTMLcontactGenericBottom = `
<li class="flex-item">
  <span class="orange-text">%contact%</span>
  <span class="white-text">%data%</span>
</li>
`;
*/

/*
var HTMLblogBottom = `
<li class="flex-item">
  <span class="orange-text">blog</span><span class="white-text">%data%</span>
</li>
`;
*/

// work experience
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#" target="_blank">%data%';
var HTMLworkTitle = ' – %data%</a><br>';
var HTMLworkDates = '%data%<br>';
var HTMLworkLocation = '%data%';
var HTMLworkDescription = '<p>%data%</p>';

// projects
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#" target="_blank">%data%</a><br>';
var HTMLprojectDates = '%data%';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = `<img src="%data%" alt="project image">`;


// education
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#" target="_blank">%data%';
var HTMLschoolDegree = ' – %data%</a><br>';
var HTMLschoolDates = '%data%<br>';
var HTMLschoolLocation = '%data%';
var HTMLschoolMajor = 'Major: <em>%data%</em>';

// online courses
var HTMLonlineClasses = '<h3>Online Courses</h3>';
var HTMLonlineTitle = '<a href="#" target="_blank">%data%';
var HTMLonlineSchool = ' – %data%</a><br>';
var HTMLonlineDates = '%data%';
var HTMLonlineURL = '<a href="#">%data%</a>';

// map
var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

/*
See the Google Map documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;

function initializeMap() {
  var locations;
  var mapOptions = {
    disableDefaultUI: true,
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  function locationFinder() {
    var locations = [];

    locations.push(bio.contacts.location);

    education.schools.forEach(function(school) {
      locations.push(school.location);
    });

    work.jobs.forEach(function(job) {
      locations.push(job.location);
    });

    return locations;
  }

  function createMapMarker(placeData) {

    var lat = placeData.geometry.location.lat();
    var lon = placeData.geometry.location.lng();
    var name = placeData.formatted_address;
    var bounds = window.mapBounds;

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  function pinPoster(locations) {
    var service = new google.maps.places.PlacesService(map);

    locations.forEach(function(place) {
      var request = {
        query: place
      };

      service.textSearch(request, callback);
    });
  }

  window.mapBounds = new google.maps.LatLngBounds();
  locations = locationFinder();
  pinPoster(locations);

  map.addListener('idle', function() {
    map.setZoom(5);
  });
}

window.addEventListener('load', initializeMap);

window.addEventListener('resize', function(e) {
  map.fitBounds(mapBounds);
  map.setZoom(5);
});
