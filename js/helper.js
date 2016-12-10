/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/

// bio
var HTMLheaderName = '<h1>%data%</h1>';
var HTMLheaderRole = '<p>%data%</p>';

var HTMLbioPic = '<img src="%data%" alt="resume bio picture" class="thumbnail"><br>';
var HTMLwelcomeMsg = '<p>%data%</p>';

var HTMLskillsStart = `
<div class="row column">
<h2>Skills</h2>
</div>
<div id="skills" class="row small-up-2 medium-up-3 large-up-6" data-magellan-target="skills">
</div>
`;

var HTMLskills = '<div class="column">%data%</div>';

// contacts
var HTMLmobile = '<li class="flex-item"><i class="fa fa-md fa-phone"></i> %data%</li>';
var HTMLemail = '<li class="flex-item"><i class="fa fa-md fa-envelope"></i> %data%</li>';
var HTMLtwitter = '<li class="flex-item"><i class="fa fa-md fa-twitter"></i> %data%</li>';
var HTMLgithub = '<li class="flex-item"><i class="fa fa-md fa-github"></i> %data%</li>';
var HTMLlocation = '<li class="flex-item"><i class="fa fa-md fa-map-marker"></i> %data%</li>';
// var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
// var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';

// work
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' – %data%</a><br>';
var HTMLworkDates = '%data%<br>';
var HTMLworkLocation = '%data%';
var HTMLworkDescription = '<p>%data%</p>';

// projects
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a><br>';
var HTMLprojectDates = '%data%';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = `<img src="%data%" alt="project image">`;

// education
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' – %data%</a><br>';
var HTMLschoolDates = '%data%<br>';
var HTMLschoolLocation = '%data%';
var HTMLschoolMajor = 'Major: <em>%data%</em>';

var HTMLonlineClasses = '<h3>Online Courses</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
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
