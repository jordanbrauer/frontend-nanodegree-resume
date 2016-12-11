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
var placeholder = new RegExp('%data%', 'g');

// biography resume object
/*
TODO: Contact the developer of devicon and request the addition of 'missing' icons.
      Alternatively, make a PR myself! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
*/
var bio = {
  name: 'Jordan Brauer',
  role: 'Front-end Engineer',
  contacts: {
    mobile: '204-781-4099',
    location: 'Winnipeg, MB, Canada',
    email: 'jbrauer.inc@gmail.com',
    twitter: 'https://twitter.com/jordbrauer',
    github: 'https://github.com/jordanbrauer'
  },
  welcomeMessage: `Hi there, I'm Jordan! I'm a creator and table-top gamer living in the great white North.`,
  skills: [
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
    'Atom',
    'GIMP',
    'Inkscape',
    'SASS',
    'Grunt',
    'Gulp',
    'jQuery',
    'Bootstrap',
    'Foundation',
    'Bower',
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
    // replace the %data% placeholders and save to a variable for later
    var bioPic = HTMLbioPic.replace(placeholder, bio.biopic);
    var bioName = HTMLheaderName.replace(placeholder, bio.name);
    var bioRole = HTMLheaderRole.replace(placeholder, bio.role);
    var bioWelcomeMsg = HTMLwelcomeMsg.replace(placeholder, bio.welcomeMessage);

    var bioContactEmailTop = HTMLemailTop.replace(placeholder, bio.contacts.email);
    var bioContactMobileTop = HTMLmobileTop.replace(placeholder, bio.contacts.mobile);
    var bioContactGitHubTop = HTMLgithubTop.replace(placeholder, bio.contacts.github);
    var bioContactTwitterTop = HTMLtwitterTop.replace(placeholder, bio.contacts.twitter);
    var bioContactLocationTop = HTMLlocationTop.replace(placeholder, bio.contacts.location);

    var bioContactEmailBottom = HTMLemailBottom.replace(placeholder, bio.contacts.email);
    var bioContactMobileBottom = HTMLmobileBottom.replace(placeholder, bio.contacts.mobile);
    var bioContactGitHubBottom = HTMLgithubBottom.replace(placeholder, bio.contacts.github);
    var bioContactTwitterBottom = HTMLtwitterBottom.replace(placeholder, bio.contacts.twitter);
    var bioContactLocationBottom = HTMLlocationBottom.replace(placeholder, bio.contacts.location);

    // display the bio picture, name, role, and welcome message.
    var headerSection = $('#header');

    headerSection
      .prepend(bioWelcomeMsg)
      .prepend(bioPic)
      .prepend(bioRole)
      .prepend(bioName);

    // display the contact information in the header
    var topContactsSection = $('#topContacts');

    topContactsSection
      .append(bioContactMobileTop)
      .append(bioContactEmailTop)
      .append(bioContactLocationTop)
      .append(bioContactGitHubTop)
      .append(bioContactTwitterTop);

    // display the contact information in the footer
    var footerContactsSection = $('#footerContacts');

    footerContactsSection
      .append(bioContactMobileBottom)
      .append(bioContactEmailBottom)
      .append(bioContactLocationBottom)
      .append(bioContactGitHubBottom)
      .append(bioContactTwitterBottom);

    // display the skills within the main content
    var mainSection = $('#main > .row.column'); /* funny selector for the mobile nav bar */

    // displaySkill()
    // create an image icon for a skill as a nice way to visually display them
    var displaySkill = function (skillStr, list) {
      // format the skill to remove any "illegal" characters
      var formattedSkill =
        skillStr.toLowerCase()
          .replace(' ', '-')
          .replace('.', '-')
          .replace('/', '-');

      // create an image tag using the formatted skill as an image name
      // use the skill parameter passed to the function as the alt text for accessibility.
      var skillImage = `
      <a data-tooltip aria-haspopup="true" class="has-tip top" data-disable-hover="false" tabindex="1" title="${skillStr}">
        <i class="devicon-${formattedSkill}-plain" aria-hidden="true"></i>
      </a>
      `;

      // replace the placeholder with the skillImage
      var skillData = HTMLskills.replace(placeholder, skillImage);

      // render the skill to the page
      list.append(skillData);
    };

    // check to see if the bio has a skills section with atleast 1 entry
    // if so, display any and all entries.
    if (bio.skills.length > 0) {
      // start the skills section
      mainSection.prepend(HTMLskillsStart);

      // select the skills section
      var skillsSection = $('#skills');

      // loop through the bio.skills array and invoke displaySkill() for each index.
      for (var i = 0; i < bio.skills.length; i++) {
        displaySkill(bio.skills[i], skillsSection);
      }
    }
  }
};

// education resume object
var education = {
  schools: [
    {
      name: 'Louis Riel Arts & Technology Centre',
      location: 'Winnipeg, MB, Canada',
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
      location: 'Winnipeg, MB, Canada',
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

      // select last template entry
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
      // start a new course block
      educationSection.append(HTMLschoolStart);

      // select the last entry of the template
      var educationEntry = $('.education-entry:last');

      // replace the %data% placeholders and save to a var
      var onlineTitle =
        HTMLonlineTitle
          .replace(placeholder, courseObj.title)
          .replace('#', courseObj.url);

      var onlineSchool = HTMLonlineSchool.replace(placeholder, courseObj.school);
      var onlineDates = HTMLonlineDates.replace(placeholder, courseObj.dates);

      // render the course block
      educationEntry
        .append(onlineTitle + onlineSchool)
        .append(onlineDates);
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
      url: 'http://midcanadafasteners.com/',
      title: 'Web Developer',
      location: 'Winnipeg, MB, Canada',
      dates: 'January 2016 - Present',
      description: 'My main responsibilities include but are not limited to; designing, developing and maintaining the company website; design and print company flyers and product promotions. Manage, maintain and promote the company Facebook, Twitter, and Instagram social media pages. Some of my biggest accomplishments are being the first person to have this position for the company, implementing Twitter and Instagram accounts to broaden our online reach, implementing Slack for internal communication, and creating an internal documentation tool.'
    },
    {
      employer: 'Mid-Canada Fasteners &amp; Tools Ltd.',
      url: 'http://midcanadafasteners.com/',
      title: 'Shipper',
      location: 'Winnipeg, MB, Canada',
      dates: 'September 2014 - January 2016',
      description: 'My main responsibilities indcluded but were not limited to; checking orders that have been picked by warehouse staff to ensure that the correct product is picked; efficiently package orders after they have been checked and label them for delivery, this includes evenly distributing weight, wrapping pallets safely and securely, ensuring that boxes are properly sealed and that the customers product remains undamaged; manage the Purolator, UPS, Tiger Courier, Gardewine, and many other business shipping accounts.'
    },
    {
      employer: 'Starbucks',
      url: 'https://www.starbucks.ca/',
      title: 'Barista',
      location: 'Winnipeg, MB, Canada',
      dates: 'June 2014 - Sepetember 2014',
      description: 'My main responsibilities included but were not limited to; taking orders for customers in addition to making coffee, tea, and other specialty drinks to customer specifications; operate the cash registers and credit card machines; field customer complaints or questions; clean coffee machines, restaurant areas, restrooms, and preparation areas during a normal shift; worked to maintain good customer relations and speedy delivery of all beverages as well as complete assigned tasks from management every day.'
    },
    {
      employer: 'The Real Canadian Superstore, Loblaw',
      url: 'https://www.realcanadiansuperstore.ca/?cid=bs_google_cpc_Branded-Core-Winnipeg-EXA_superstore%20canada_e&gclid=Cj0KEQiA7K7CBRCrwt26v5uHs98BEiQA0JzsZ_Md7rT34Y2DKqYU0Y_HdhRIjmzYxQiWwoT-dTP5nOEaAmka8P8HAQ',
      title: 'Courtesy Clerk',
      location: 'Winnipeg, MB, Canada',
      dates: 'June 2014 - Sepetember 2014',
      description: 'My responsibilities included but were not limited to; providing exceptional customer service, ensuring accurate product scanning and price checking, executing company-directed promotions and programs, and maintaining product displays.'
    },
  ],
  display: function() {
    // select the work experience section
    var workExperienceSection = $('#workExperience');

    // displayWorkExperience()
    // Create an entry within the work experience section.
    var displayWorkExperience = function (jobObj) {
      // start a new work experience entry
      workExperienceSection.append(HTMLworkStart);

      // select the last template entry
      var workEntry = $('.work-entry:last');

      // replace the %data% placeholders and save to a variable
      var workEmployer =
        HTMLworkEmployer
          .replace(placeholder, jobObj.employer)
          .replace('#', jobObj.url);
      var workTitle = HTMLworkTitle.replace(placeholder, jobObj.title);
      var workDates = HTMLworkDates.replace(placeholder, jobObj.dates);
      var workLocation = HTMLworkLocation.replace(placeholder, jobObj.location);
      var workDescription = HTMLworkDescription.replace(placeholder, jobObj.description);

      // render the work entry to the page.
      workEntry
        .append(workEmployer)
        .append(workTitle)
        .append(workDates)
        .append(workLocation)
        .append(workDescription);
    };

    // loop through the work experience objext and invoke displayWorkExperience() for each index.
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
      url: 'https://github.com/jordanbrauer/filly-text',
      dates: 'Work in Progress',
      description: 'A tiny front-end devtool for filler text.',
      images: []
    },
    {
      title: 'What\'s Been Spoiled?',
      url: 'https://github.com/jordanbrauer/whats-been-spoiled',
      dates: 'Work in Progress',
      description: 'A simple spoiler website for Magic: the Gathering!',
      images: []
    },
    {
      title: 'Timato',
      url: 'https://github.com/ProjectTimato',
      dates: 'Work in Progress',
      description: 'A node based tomato timer application for all devices!',
      images: []
    }
  ],
  display: function() {
    // select the projects section
    var projectSection = $('#projects');

    // displayProject()
    // create a project block entry from an object.
    var displayProject = function (projectObj) {
      // start a new project block
      projectSection.append(HTMLprojectStart);

      // select the last template entry
      var projectEntry = $('.project-entry:last');

      // replace the %data placeholders and save to a variable
      var projectTitle =
        HTMLprojectTitle
          .replace(placeholder, projectObj.title)
          .replace('#', projectObj.url);

      var projectDates = HTMLprojectDates.replace(placeholder, projectObj.dates);
      var projectDescription = HTMLprojectDescription.replace(placeholder, projectObj.description);

      // render the project entries onto the page.
      projectEntry
        .append(projectTitle)
        .append(projectDates)
        .append(projectDescription);

      // check for images within the project entries.
      if (projectObj.images.length > 0) {
        // if there are images, create a replacement variable
        var projectImages = HTMLprojectImage.replace(placeholder, projectObj.images);

        // loop through the images array of each project entry and append it.
        for (var i = 0; i < projectObj.images.length; i++) {
          projectEntry.append(projectImages)
        }
      }
    }

    // loop through the projects object and invoke displayProject() for each entry.
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
$('#mapDiv').append(googleMap);
