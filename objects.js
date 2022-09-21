
class Timespan {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}
}

class Education {
	constructor(school, degree, field, timespan) {
		this.school = school;
		this.degree = degree;
		this.field = field;
		this.timespan = timespan;
	}
}

class Experience {
	constructor(company, position, timespan, description, references = []) {
		this.company = company;
		this.position = position;
		this.timespan = timespan;
		this.description = description;
		this.references = references;
	}
}

class Contact {
	constructor(label, link) {
		this.label = label;
		this.link = link;
	}
}

class Reference {
	constructor(name, position, linkedIn) {
		this.name = name;
		this.position = position;
		this.linkedIn = linkedIn;
	}
}

var languages = [
	"Swedish",
	"English"
]

var skills = [
	"Realtime Game Logic",
	"System Design & Implementation",
	"Optimization",
	"Pathfinding",
	"Shaders",
];

var programmingLanguages = [
	"C#",
	"JavaScript",
	"Java",
	"Python",
];

var gameEngines = [
	"Unity",
	"Godot",
]

var contact = [
	new Contact("wille@aurorapunks.com", "https://wille@aurorapunks.com"),
	new Contact("LinkedIn", "https://www.linkedin.com/in/wille-pilquist-79bb1a236/"),
]

var experience = [
	new Experience(
		"Aurora Punks",
		"Lead Programmer - Iron Evil",
		new Timespan("Jun 2022", "Present"),
		"Currently working on a game with a team of 5 people. The game is being developed in Unity."
	),
	new Experience(
		"Windswept Interactive - Internship",
		"Programmer",
		new Timespan("Jan 2022", "Jun 2022"),
		"Worked on a VR game in Unity.",
		[
			new Reference("Jakob Olofsson (Mentor)", "Programmer", "https://www.linkedin.com/in/jakob-olofsson/")
		]
	),
	new Experience(
		"The Fine Arc Nordic AB - Internship",
		"Programmer",
		new Timespan("Jun 2021", "Aug 2021"),
		"A small indie game studio based in Umeå.",
		[
			//new Reference("Daniel Olofsson (CEO)", "CEO", "https://www.linkedin.com/in/danielolofsson77/"),
			//new Reference("Per Fransson (COO)", "COO", "https://www.linkedin.com/in/perfransson/")
		]
	)
];

var education = [
	new Education(
		"FutureGames, Skellefteå",
		"Vocational Education",
		"Game Programming",
		new Timespan("Aug 2020", "May 2022")
	),
	new Education(
		"NTI Gymnasiet, Umeå",
		"Technical college graduate (Gymnasieingenjör)",
		"Programming / Software Development",
		new Timespan("Aug 2019", "May 2020")
	),
	new Education(
		"NTI Gymnasiet, Umeå",
		"High school graduate (Gymnasieexamen)",
		"Technology",
		new Timespan("Aug 2016", "May 2019")
	)
];

