/**
  * resumeBuilder.js
  *
  * Author: Jordan Brauer <jbrauer.inc@gmail.com>
  * Created: 11/2016
  *
  * Description: Create and display objects to the DOM that
  * hold resume and portfolio data.
  */

/*---------------------------------------------*\
  Create Resume Objects
\*---------------------------------------------*/

// biography resume object
var bio = {
  name: 'Jordan Brauer', // string
  role: 'Front-end Engineer', // string
  contacts: {
    mobile: '204-781-4099',
    email: 'jbrauer.inc@gmail.com',
    github: 'https://github.com/jordanbrauer',
    twitter: 'https://twitter.com/jordbrauer',
    location: 'Winnipeg, Canada'
  },
  welcomeMessage: 'Creator, developer, and table-top gamer.',
  skills: [
    // languages
    'HTML5',
    'CSS3',
    'JavaScript',
    'SASS/SCSS',
    'PHP',
    'MySQL',
    // vcs
    'Git',
    // package managers
    'yarn',
    'npm',
    'Bower',
    'Composer',
    // frameworks
    'Mocha.js',
    'Chai.js',
    'jQuery',
    'Twitter Bootstrap',
    'Foundation Sites',
    'Foundation Emails',
    'Smarty',
    // editors
    'Atom Editor',
    'GIMP',
    'Inkscape',
    // operating systems
    'Windows',
    'Mac OS X',
    'Linux'
  ],
  biopic: 'string(url)',
  display: function() { }
};

// education resume object
var education = {
  schools: [
    {
      name: 'Louis Riel Arts & Technology Centre',
      location: 'Winnipeg, Canada',
      degree: 'New Media Design Certificate',
      majors: [
        'Front-end Development',
        'Business'
      ],
      dates: 'September 2013 - June 2014',
      url: 'https://www.lrsd.net/schools/ATC/Pages/default.aspx'
    },
    {
      name: 'Glenlawn Collegiate Institute',
      location: 'Winnipeg, Canada',
      degree: 'High School Diploma',
      majors: [
        'English',
        'Computer Science'
      ],
      dates: 'September 2009 - June 2013',
      url: 'http://www.lrsd.net/schools/GCI/Pages/default.aspx'
    }
  ],
  onlineCourses: [
    {
      title: 'Front-end Nanodgree',
      school: 'Udacity',
      dates: 'string - string',
      url: 'string'
    }
  ],
  display: function () { }
};

// work experience resume object
var work = {
  jobs: [
    {
      employer: 'Mid-Canada Fasteners &amp; Tools Ltd.',
      title: 'Web Developer',
      location: 'Winnipeg, Canada',
      dates: 'September 2014 - Present',
      description: ''
    },
    // {
    //   employer: 'string',
    //   title: 'string',
    //   location: 'string',
    //   dates: '[string - string] || [string]',
    //   description: 'string'
    // }
  ],
  display: function() { }
};

// personal projects resume object
var projects = {
  projects: [
    {
      title: 'fillytext.js',
      dates: 'Work in Progress',
      description: 'A tiny front-end devtool for filler text.',
      images: [
        'strings(url)'
      ]
    },
    {
      title: 'What\'s Been Spoiled?',
      dates: 'Work in Progress',
      description: 'A simple spoiler website for Magic: the Gathering!',
      images: [
        'strings(url)'
      ]
    },
    {
      title: 'Timato',
      dates: 'Work in Progress',
      description: 'A node based tomato timer application for all devices!',
      images: [
        'strings(url)'
      ]
    }
  ],
  display: function() { }
};

/*---------------------------------------------*\
  Render Resume Objects
\*---------------------------------------------*/

// display the biography section
bio.display();

// display the education section
education.display();

// display the work experience section
work.display();

// display the personal projects section
projects.display();

// append the google map api widget to the page.
// $('#googlemap').append(googleMap);
