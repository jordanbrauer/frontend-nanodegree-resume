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
// placeholder reference variable
var placeholder = '%data%';

// biography resume object
var bio = {
  name: 'Jordan Brauer',
  role: 'Front-end Engineer',
  contacts: {
    mobile: '204-781-4099',
    location: 'Winnipeg, Canada',
    email: 'jbrauer.inc@gmail.com',
    twitter: 'https://twitter.com/jordbrauer',
    github: 'https://github.com/jordanbrauer'
  },
  welcomeMessage: `Hello, my name is Jordan. I am a publisher, creator, and table-top gaming enthusiast.`,
  skills: [
    // languages/protocols
    'HTML5',
    'CSS3',
    'JavaScript',
    'PHP',
    'MySQL',
    'Apache',
    'Git',
    'SSH',
    'Windows8',
    'Apple',
    'Ubuntu',
    'GIMP',
    'Inkscape',
    'SASS',
    'Gulp',
    'jQuery',
    'Bootstrap',
    'Foundation',
    'Grunt',
    'Bower',
    'Atom',
    // 'Composer', // no devicon
    // 'npm', // no devicon
    // 'yarn', // no devicon
    // 'Mocha.js', // no devicon
    // 'Chai.js', // no devicon
    // 'Foundation Emails', // no devicon
    // 'Smarty', // no devicon
  ],
  biopic: 'https://avatars3.githubusercontent.com/u/18744334?v=3&u=c575c5b70e692078d8543a10028f2f4692f0003d&s=400',
  display: function() {
    // select container elements
    var headerSection = $('#header');
    var topContactsSection = $('#topContacts');
    var footerContactsSection = $('#footerContacts');

    // replace the %data% placeholders and save to a variable for later
    var bioPic = HTMLbioPic.replace(placeholder, bio.biopic);
    var bioName = HTMLheaderName.replace(placeholder, bio.name);
    var bioRole = HTMLheaderRole.replace(placeholder, bio.role);
    var bioWelcomeMsg = HTMLwelcomeMsg.replace(placeholder, bio.welcomeMessage);
    var bioContactEmail = HTMLemail.replace(placeholder, bio.contacts.email);
    var bioContactMobile = HTMLmobile.replace(placeholder, bio.contacts.mobile);
    var bioContactGitHub = HTMLgithub.replace(placeholder, bio.contacts.github);
    var bioContactTwitter = HTMLtwitter.replace(placeholder, bio.contacts.twitter);
    var bioContactLocation = HTMLlocation.replace(placeholder, bio.contacts.location);

    // display the bio picture, name, role, and welcome message.
    headerSection
      .append(bioPic)
      .append(bioName)
      .append(bioRole)
      .append(bioWelcomeMsg);

    // display the contact information in the header
    topContactsSection
      .append(bioContactMobile)
      .append(bioContactEmail)
      .append(bioContactLocation)
      .append(bioContactGitHub)
      .append(bioContactTwitter);

    // display the contact information in the footer
    footerContactsSection
      .append(bioContactMobile)
      .append(bioContactEmail)
      .append(bioContactLocation)
      .append(bioContactGitHub)
      .append(bioContactTwitter);

    // check to see if the bio has a skills section with atleast 1 entry
    // if so, display any and all entries.
    if (bio.skills.length > 0) {
      // start the skills section
      headerSection.append(HTMLskillsStart);

      // select the skills section
      var skillsSection = $('#skills');

      // displaySkill()
      // create an image icon for a skill as a nice way to visually display them
      var displaySkill = function (skillStr) {
        // format the skill to remove any "illegal" characters
        var formattedSkill =
          skillStr.toLowerCase()
            .replace(' ', '-')
            .replace('.', '-')
            .replace('/', '-');

        // create an image tag using the formatted skill as an image name
        // use the skill parameter passed to the function as the alt text for accessibility.
        // var skillImage = `<img src="./assets/img/logo-${formattedSkill}.svg" alt="${skillStr}">`;
        var skillImage = `<i class="devicon-${formattedSkill}-plain"></i>`;

        // replace the placeholder with the skillImage
        var skillData = HTMLskills.replace(placeholder, skillImage);

        // render the skill to the page
        skillsSection.append(skillData);
      };

      // loop through the bio.skills array and invoke displaySkill() for each index.
      for (var i = 0; i < bio.skills.length; i++) {
        displaySkill(bio.skills[i]);
      }
    }
  }
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
        'Relational Database Design'
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
      title: 'Front-end Web Developer Nanodgree',
      school: 'Udacity',
      dates: 'September 2016 - Present',
      url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1'
    }
  ],
  display: function () {
    // select the container elements
    var educationSection = $('#education');

    // displaySchool()
    // create an education block on the page from an object
    var displaySchool = function(educationObj) {
      // start a new education block
      educationSection.append(HTMLschoolStart);

      // last entry in the array
      var educationEntry = $('.education-entry:last');

      // replace the %data% placeholders and save to a variable for later
      var schoolName =
        HTMLschoolName
          .replace(placeholder, educationObj.name)
          .replace('#', educationObj.url);

      var schoolDegree = HTMLschoolDegree.replace(placeholder, educationObj.degree);
      var schoolDates = HTMLschoolDates.replace(placeholder, educationObj.dates);
      var schoolLocation = HTMLschoolLocation.replace(placeholder, educationObj.location);
      var schoolMajor = HTMLschoolMajor.replace(placeholder, educationObj.majors);

      // render the education block to the page.
      educationEntry
        .append(schoolName + schoolDegree)
        .append(schoolDates)
        .append(schoolLocation)
        .append(schoolMajor);
    };

    // check to see if the education.schools array has any entries
    // if so, display any and all schools.
    if (education.schools.length > 0) {
      // loop through the schools array and invoke displaySchool() for each index
      for (var i = 0; i < education.schools.length; i++) {
        displaySchool(education.schools[i]);
      }
    }

    // displayCourse()
    // create an education block on the page from an object
    // similar to displaySchool, but for online courses instead.
    var displayCourse = function(courseObj) {
      educationSection.append(HTMLschoolStart);

      var educationEntry = $('.education-entry:last');

      var onlineTitle =
        HTMLonlineTitle
          .replace(placeholder, courseObj.title)
          .replace('#', courseObj.url);

      var onlineSchool = HTMLonlineSchool.replace(placeholder, courseObj.school);
      var onlineDates = HTMLonlineDates.replace(placeholder, courseObj.dates);
      // var onlineUrl = HTMLonlineURL.replace(placeholder, courseObj.url);

      educationEntry
        .append(onlineTitle + onlineSchool)
        .append(onlineDates)
        // .append(online);
    };

    // check to see if the education.onlineCourses array has any entires
    // if so, display any and all courses
    if (education.onlineCourses.length > 0) {
      // display the header
      educationSection.append(HTMLonlineClasses);

      // loop through the online courses array and invoke displayCourse() for each index
      for (var i = 0; i < education.onlineCourses.length; i++) {
        displayCourse(education.onlineCourses[i]);
      }
    }
  }
};

// work experience resume object
var work = {
  jobs: [
    {
      employer: 'Mid-Canada Fasteners &amp; Tools Ltd.',
      title: 'Web Developer',
      location: 'Winnipeg, Canada',
      dates: 'January 2016 - Present',
      description: 'My main responsibilities include but are not limited to; designing, developing and maintaining the company website; design and print company flyers and product promotions. Manage, maintain and promote the company Facebook, Twitter, and Instagram social media pages. Some of my biggest accomplishments are being the first person to have this position for the company, implementing Twitter and Instagram accounts to broaden our online reach, implementing Slack for internal communication, and creating an internal documentation tool.'
    },
    {
      employer: 'Mid-Canada Fasteners &amp; Tools Ltd.',
      title: 'Shipper',
      location: 'Winnipeg, Canada',
      dates: 'September 2014 - January 2016',
      description: 'My main responsibilities indcluded but were not limited to; checking orders that have been picked by warehouse staff to ensure that the correct product is picked; efficiently package orders after they have been checked and label them for delivery, this includes evenly distributing weight, wrapping pallets safely and securely, ensuring that boxes are properly sealed and that the customers product remains undamaged; manage the Purolator, UPS, Tiger Courier, Gardewine, and many other business shipping accounts.'
    },
    {
      employer: 'Starbucks',
      title: 'Barista',
      location: 'Winnipeg, Canada',
      dates: 'June 2014 - Sepetember 2014',
      description: 'My main responsibilities included but were not limited to; taking orders for customers in addition to making coffee, tea, and other specialty drinks to customer specifications; operate the cash registers and credit card machines; field customer complaints or questions; clean coffee machines, restaurant areas, restrooms, and preparation areas during a normal shift; worked to maintain good customer relations and speedy delivery of all beverages as well as complete assigned tasks from management every day.'
    },
  ],
  display: function() {
    var workExperienceSection = $('#workExperience');

    var displayWorkExperience = function (jobObj) {
      workExperienceSection.append(HTMLworkStart);

      var workEntry = $('.work-entry:last');

      var workEmployer = HTMLworkEmployer.replace(placeholder, jobObj.employer);
      var workTitle = HTMLworkTitle.replace(placeholder, jobObj.title);
      var workDates = HTMLworkDates.replace(placeholder, jobObj.dates);
      var workLocation = HTMLworkLocation.replace(placeholder, jobObj.location);
      var workDescription = HTMLworkDescription.replace(placeholder, jobObj.description);

      workEntry
        .append(workEmployer)
        .append(workTitle)
        .append(workDates)
        .append(workLocation)
        .append(workDescription);
    };

    if (work.jobs.length > 0) {
      for (var i = 0; i < work.jobs.length; i++) {
        displayWorkExperience(work.jobs[i]);
      }
    }
  }
};

// personal projects resume object
var projects = {
  projects: [
    {
      title: 'fillytext.js',
      dates: 'Work in Progress',
      description: 'A tiny front-end devtool for filler text.',
      images: [
        'http://placehold.it/250x250'
      ]
    },
    {
      title: 'What\'s Been Spoiled?',
      dates: 'Work in Progress',
      description: 'A simple spoiler website for Magic: the Gathering!',
      images: [
        'http://placehold.it/250x250'
      ]
    },
    {
      title: 'Timato',
      dates: 'Work in Progress',
      description: 'A node based tomato timer application for all devices!',
      images: [
        'http://placehold.it/250x250'
      ]
    }
  ],
  display: function() {
    var projectSection = $('#projects');

    var displayProject = function (projectObj) {
      projectSection.append(HTMLprojectStart);

      var projectEntry = $('.project-entry:last');

      var projectTitle = HTMLprojectTitle.replace(placeholder, projectObj.title);
      var projectDates = HTMLprojectDates.replace(placeholder, projectObj.dates);
      var projectDescription = HTMLprojectDescription.replace(placeholder, projectObj.description);
      var projectImages = HTMLprojectImage.replace(placeholder, projectObj.images);

      projectEntry
        .append(projectTitle)
        .append(projectDates)
        .append(projectDescription);

      // TODO: FIX MULTI PROJECT IMAGES

      for (var i = 0; i < projects.projects.length; i++) {
        projectEntry.append(projects.projects[i].projectImages)
      }
    }

    if (projects.projects.length > 0) {
      for (var i = 0; i < projects.projects.length; i++) {
        displayProject(projects.projects[i])
      }
    }
  }
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
