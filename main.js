// Element References
var divEducation = document.getElementById("content-education");
var divExperience = document.getElementById("content-experience");
var divContact = document.getElementById("contact-info-container");

addBasicList(languages, "content-languages");
addBasicList(skills, "content-skills");
addBasicList(gameEngines, "content-game-engines");
addBasicList(programmingLanguages, "content-programmingLanguages");
addContact(contact);
addEducation(education);
addExperience(experience);

function addBasicList(skills, containerDiv) {
	var div = document.createElement("div");
	div.className = "skills";
	for (var i = 0; i < skills.length; i++) {
		var skill = document.createElement("div");
		skill.className = "skill";
		skill.innerHTML = skills[i];
		div.appendChild(skill);
	}
	document.getElementById(containerDiv).appendChild(div);
}

function addContact(contact) {
	var div = document.createElement("div");
	div.className = "contact";
	for (var i = 0; i < contact.length; i++) {
		var contactItem = document.createElement("a");
		contactItem.className = "contact-item";

		contactItem.href = contact[i].link;
		contactItem.innerHTML = contact[i].label;
		div.appendChild(contactItem);
		div.appendChild(document.createElement("br"));
	}
	divContact.appendChild(div);
}

function addEducation(education) {
	for (var i = 0; i < education.length; i++) {
		var item = education[i];
		var divItem = document.createElement("div");
		divItem.classList.add(`item`);
		divItem.innerHTML = `
				<div class="item-timespan">${item.timespan.start} - ${item.timespan.end}</div>
				<div class="item-content">
					<h3 class="item-title">${item.school}</h3>
					<h4 class="item-subtitle">${item.degree}</h4>
					<h5 class="item-subtitle">${item.field}</h5>
				</div>
		`;
		divEducation.appendChild(divItem);
	}
}

function addExperience(experience) {
	experience.forEach(function (item) {
		var divItem = document.createElement("div");
		divItem.classList.add("item");
		divItem.innerHTML = `
			<div class="item-timespan">${item.timespan.start} - ${item.timespan.end}</div>
			<div class="item-content">
				<h3 class="item-title">${item.company}</h3>
				<h4 class="item-subtitle">${item.position}</h4>
				<div class="item-description">${item.description}</div>
			</div>
		`;
		divExperience.appendChild(divItem);
	});
}