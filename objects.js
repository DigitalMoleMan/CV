
class Timespan {
	constructor(start, end = "") {
		this.start = start;
		this.end = end;
	}

	toString() {
		switch (this.end) {
			case "": return this.start;
			case "Present": return `${this.start} - <b>${this.end}</b>`;
			default: return `${this.start} - ${this.end}`;
		}
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
	"GDScript",
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
		"Lead Programmer - Iron Evil Studio",
		new Timespan("Jun 2022", "Present"),
		"Currently working on a top-down roguelike game with a team of 5 people. The game is being developed in Unity."
	),
	new Experience(
		"FutureGames",
		"Teacher (Programming)",
		new Timespan("Nov 2021", "Dec 2021"),
		"Taught a 5-week course on datastructures & algorithms for a class of ~50 people. The course was mainly aimed at begginers and was taught in C#."
	),
	new Experience(
		"FutureGames Skellefteå",
		"Substitute Teacher / Guest Lecturer",
		new Timespan("Sep 2022"),
		"Held 2 lectures on the subject of shader programming and one lecture on the subject of A* pathfinding. The lectures were held in English."
	),
	new Experience(
		"Windswept Interactive - Internship",
		"Programmer",
		new Timespan("Jan 2022", "Jun 2022"),
		"Worked on <i>Ghost Signal: A Stellaris Game</i>, a VR game made in Unity.",
		[
			new Reference("Jakob Olofsson (Programmer, Mentor)", "Programmer", "https://www.linkedin.com/in/jakob-olofsson/")
		]
	),
	new Experience(
		"The Fine Arc Nordic AB - Internship",
		"Programmer",
		new Timespan("Jun 2021", "Aug 2021"),
		"A small indie game studio based in Umeå. I helped implement character controls for a 2.5D space exploration game made in Unity.",
		[
			//new Reference("Daniel Olofsson (CEO)", "CEO", "https://www.linkedin.com/in/danielolofsson77/"),
			new Reference("Per Fransson (COO)", "COO", "https://www.linkedin.com/in/perfransson/")
		]
	)
];

var education = [
	new Education(
		"FutureGames Skellefteå",
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

