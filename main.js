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

		var referencesHTML = "";
		if (item.references.length > 0) {


			var divReferences = document.createElement("div");
			divReferences.classList.add("references");
			for (i = 0; i < item.references.length; i++) {
				var reference = item.references[i];
				var divReference = document.createElement("div");
				divReference.classList.add("reference");
				divReference.innerHTML = `
					<li class="reference-name">${reference.name} - <a class="bright-link" href="${reference.linkedIn}" class="reference-linkedin">LinkedIn</a></li>
			`;
				divReferences.appendChild(divReference);
			};

			referencesHTML = `<label class="item-references">References:</label>` + divReferences.outerHTML;
		}



		divItem.innerHTML = `
			<div class="item-timespan">${item.timespan.toString()}</div>
			<div class="item-content">
				<h3 class="item-title">${item.company}</h3>
				<h4 class="item-subtitle">${item.position}</h4>
				<div class="item-description">${item.description}</div>
				${referencesHTML}
			</div>
		`;
		divExperience.appendChild(divItem);
	});
}