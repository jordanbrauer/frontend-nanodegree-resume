/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*---------------------------------------------*\
  Create Resume Objects
\*---------------------------------------------*/

// biography resume object
var bio = {
  name: 'string',
  role: 'string',
  contacts: {
    mobile: 'string',
    email: 'string',
    github: 'string',
    twitter: 'string [optional]',
    location: 'string'
  },
  welcomeMessage: 'string',
  skills: [
    'strings'
  ],
  biopic: 'string(url)',
  display: function() { }
};

// education resume object
var education = {
  schools: [
    {
      name: 'string',
      location: 'string',
      degree: 'string',
      majors: [
        'strings'
      ],
      dates: 'string - string',
      url: 'string'
    }
  ],
  onlineCourses: [
    {
      title: 'string',
      school: 'string',
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
      employer: 'string',
      title: 'string',
      location: 'string',
      dates: '[string - string] || [string]',
      description: 'string'
    }
  ],
  display: function() { }
};

// personal projects resume object
var projects = {
  projects: [
    {
      title: 'string',
      dates: 'string - string',
      description: 'string',
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
