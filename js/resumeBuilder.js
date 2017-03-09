var bio = {
	"name" : "Ana Stankovic",
	"role" : "Front End Developer",
	"welcomeMessage" : "Former systems engineer that moved to frontend web development and then to the Bay Area. Learning all modern web things at a fast pace",
	"contacts" : {
		"mobile": "6508925379",
		"email": "mulana82@gmail.com",
		"github" : "mulana",
		"location" : "San Mateo"
	},
	"biopic" : "images/ASUdacity.jpg",
	"skills" : ["JavaScript", "Twitter Bootstrap", "Responsive", "HTML/CSS", "Ruby on Rails"],
	display: function () {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedName, formattedRole, formattedBiopic, formattedWelcomeMessage);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			this.skills.forEach(function(skill) {
				var formattedSkill = HTMLskills.replace("%data%", skill);
				$("#skills").append(formattedSkill);
			})
		};
		// bio.contacts.display();
		var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
		var formattedGitHub = HTMLgithub.replace("%data%", this.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
		$("#topContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedLocation);
		$("#footerContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedLocation)
	}
};

var work = {
	"jobs" : [
		{
			"employer" : "Freelancer at Upwork",
			"title" : "Web Developer",
			"location" : "Freelance",
			"dates" : "11/2015-Present",
			"description" : "Child care web app..."
		},
		{
			"employer" : "Travel Hacking Cartel",
			"title" : "Remote Rails developer",
			"location" : "Freelance",
			"dates" : "07/2015 - 10/2015",
			"description" : "Fixed multiple frontend and backend bugs (payment issues with recurly, broken forms, db connection issues, etc) "
		},
		{
			"employer" : "Metropolitan University",
			"title" : "Research and Teaching Assistant",
			"location" : "Belgrade, Serbia",
			"dates" : "10/2010 - 07/2015",
			"description" : "Teaching assistant for the following courses:CS324 Scripting Languages (Perl, Python, Javascript, Ruby),  CS220 Computer Architecture, CS225 Operating Systems, IT335  System Administration, IT270 IT Infrastructure"
		},
		{
			"employer" : "Lana Connection doo",
			"title" : "Junior Programmer",
			"location" : "Nis, Serbia",
			"dates" : "01/2010 - 01/2011",
			"description" : "Created theme and organized content for two web sites using Drupal (CMS written in PHP) - Bela Palanka municipality and Tourist Organization of Bela Palanka. (CSS, HTML, Javascript). Set up a mini learning web app for female entrepreneurs (Moodle, Wordpress, CSS, HTML, Javascript customizations)."
		},
		{
			"employer" : "Accordia Group LLC",
			"title" : "System Administrator",
			"location" : "Nis, Serbia",
			"dates" : "07/2007 - 01/2010",
			"description" : "Setup and administration of various Windows and Linux based servers. Installed and managed services including: DNS, DHCP, LDAP and IIS. Setup of VMware server and deploying and maintaining VMs. Writing shell scripts to automate common system administrator tasks. Technical support and maintenance of internal developer’s infrastructure (Trac, CVS, SVN, Citrix, Confluence, Jira)."
		}
	],
	display: function() {
		this.jobs.forEach(function(job) {
			$("#workExperience").append(HTMLworkStart);
			var formattedJobEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedJobTitle = HTMLworkTitle.replace("%data%", job.title);
			var formattedJobDates = HTMLworkDates.replace("%data%", job.dates);
			var formattedJobLocation = HTMLworkLocation.replace("%data%", job.location);
			var formattedJobDescription = HTMLworkDescription.replace("%data%", job.description);
			var formattedJobEmployerTitle = formattedJobEmployer + formattedJobTitle;
			$(".work-entry:last").append(formattedJobEmployerTitle, formattedJobDates, formattedJobLocation, formattedJobDescription)
		});
	}
};

var projects = {
	"projects" :[
		{
			"title" : "Project Build A Portfolio",
			"dates" : "2017",
			"description" : "Build my portfolio for Udacity course using Twitter Bootstrap and Responsive Image",
			"images" : ["images/Project1.png"]
		},
		{
			"title" : "Project Online Resume",
			"dates" : "2017",
			"description" : "Build online Resume using JavaScript",
			"images" : ["images/Project2.png"]
		}
	],
	display : function () {
		projects.projects.forEach(function(project) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
			var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
			$(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

			if (project.images.length >0) {
				project.images.forEach(function (image) {
					var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
					$(".project-entry:last").append(formattedProjectImage);
				})
			}
		})
	}
};

var education = {
	"schools":[
		{
		"name" : "Faculty of Electrical Engenieer",
		"location" : "University of Nis, Serbia",
		"degree" : "Master",
		"majors" : ["Computer Systems Networking and Telecommunications"],
		"dates" : "10/2000 - 6/2007",
		"url" : "http://www.elfak.ni.ac.rs/en"
		}
	],
	"onlineCourses" : [{
		"title" : "Front End - Nanodegree course",
		"school" : "Udacity",
		"dates" : "2017",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}],
	display: function() {
		this.schools.forEach(function(school) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
			var formattedSchoolLocation = HTMLworkLocation.replace("%data%", school.location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
			$(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor)
		});
		this.onlineCourses.forEach(function(cours) {
			$("#education").append(HTMLonlineClasses);
			var formattedCourseTitle = HTMLonlineTitle.replace("%data%", cours.title);
			var formattedCourseSchool = HTMLonlineSchool.replace("%data%", cours.school);
			var formattedCourseDates = HTMLonlineDates.replace("%data%", cours.dates);
			var formattedCourseUrl = HTMLonlineURL.replace("%data%", cours.url);
			var formattedCourseTitleSchool = formattedCourseTitle + formattedCourseSchool;
			$(".onlineEducation-entry").append(formattedCourseTitleSchool, formattedCourseDates, formattedCourseUrl)
		})
	}
};

bio.display();
work.display();
projects.display();
education.display();

// Map where I live and where I worked

$("#mapDiv").append(googleMap);
