// Element References
const divEducation = document.getElementById("content-education");
const divExperience = document.getElementById("content-experience");
const divContact = document.getElementById("contact-info-container");




addMainContent();
addInfoLists();

function addMainContent() {
	const mainContent = document.createElement("div");
	mainContent.id = "main-content";

	const experienceHeader = document.createElement("h3");
	experienceHeader.classList.add("major-header");
	experienceHeader.textContent = "Work Experience";

	const experienceContentCard = document.createElement("div");
	experienceContentCard.classList.add("content-card");

	const experienceContentList = document.createElement("div");
	experienceContentList.classList.add("major-content-list");
	experienceContentList.id = "content-experience";

	mainContent.appendChild(experienceHeader);
	mainContent.appendChild(experienceContentCard);

	experienceContentCard.appendChild(experienceContentList);


	addExperience(experienceContentList, experience);


	const educationHeader = document.createElement("h3");
	educationHeader.classList.add("major-header");
	educationHeader.textContent = "Education";

	const educationContentCard = document.createElement("div");
	educationContentCard.classList.add("content-card");

	const educationContentList = document.createElement("div");
	educationContentList.classList.add("major-content-list");
	educationContentList.id = "content-education";

	mainContent.appendChild(educationHeader);
	mainContent.appendChild(educationContentCard);

	educationContentCard.appendChild(educationContentList);

	addEducation(educationContentList, education);


	document.getElementById("main-right").appendChild(mainContent);
}

function addInfoLists() {
	const infoListsDiv = document.createElement("div");
	infoListsDiv.id = "info-lists"

	const separator = document.createElement("div");
	separator.classList.add("separator-horizontal");

	addBasicList(infoListsDiv, languages, "Languages");
	infoListsDiv.appendChild(separator.cloneNode());
	addBasicList(infoListsDiv, programmingLanguages, "Programming Languages");
	infoListsDiv.appendChild(separator.cloneNode());
	addBasicList(infoListsDiv, gameEngines, "Game Engines");
	infoListsDiv.appendChild(separator.cloneNode());
	addBasicList(infoListsDiv, skills, "Skills");
	infoListsDiv.appendChild(separator.cloneNode());
	infoListsDiv.appendChild(addContact(contact, "Contact"));
	infoListsDiv.appendChild(separator.cloneNode());
	infoListsDiv.appendChild(addContact([new Contact("Portfolio (Somewhat outdated)", "https://docs.google.com/document/d/1xCcDn1TiYZZCbiKZtvmvej2U7AYeIVkkRqeB3TTLV8A/edit?usp=sharing")], "Links"));

	//addContact(contact, infoListsDiv.getElementById("contact-info-container"));

	document.getElementById("main-left").appendChild(infoListsDiv);
}


function addBasicList(parent, items, label) {
	const div = document.createElement("div");
	div.classList.add("skill-list");

	const header = document.createElement("h4");
	header.textContent = label;

	div.appendChild(header);

	const ul = document.createElement("ul");
	ul.classList.add("skills");

	items.forEach((item) => {
		const li = document.createElement("li");
		li.classList.add("skill");
		li.textContent = item;
		ul.appendChild(li);
	});
	div.appendChild(ul);

	parent.appendChild(div);
}



function addContact(contact, label) {
	const div = document.createElement("div");
	div.classList.add("skill-list");
	div.classList.add("contact");

	const header = document.createElement("h4");
	header.textContent = label;

	div.appendChild(header);

	for (let i = 0; i < contact.length; i++) {
		const contactItem = document.createElement("a");
		contactItem.className = "contact-item";

		contactItem.href = contact[i].link;
		contactItem.innerHTML = contact[i].label;
		div.appendChild(contactItem);
		div.appendChild(document.createElement("br"));
	}

	return div;
}




function addEducation(parent, education) {
	education.forEach(({ timespan, school, degree, field }) => {
		const divItem = document.createElement("div");
		divItem.classList.add(`item`);
		divItem.innerHTML = `
		<div class="item-timespan">${timespan}</div>
		<div class="item-content">
		  <h3 class="item-title">${school}</h3>
		  <h4 class="item-subtitle">${degree}</h4>
		  <h5 class="item-subtitle">${field}</h5>
		</div>
	  `;
		parent.appendChild(divItem);
	});
}


function addExperience(parent, experience) {
	experience.forEach(({ company, position, description, references, timespan }) => {
		const divItem = document.createElement("div");
		divItem.classList.add("item");

		const referenceItems = references.map(({ name, linkedIn }) => `
      <li class="reference">
        <span class="reference-name">${name} - <a class="bright-link" href="${linkedIn}">LinkedIn</a></span>
      </li>
    `).join("");

		const referencesHTML = references.length > 0 ? `
      <label class="item-references">References:</label>
      <ul class="references">${referenceItems}</ul>
    ` : "";

		divItem.innerHTML = `
      <div class="item-timespan">${timespan}</div>
      <div class="item-content">
        <h3 class="item-title">${company}</h3>
        <h4 class="item-subtitle">${position}</h4>
        <div class="item-description">${description}</div>
        ${referencesHTML}
      </div>
    `;

		parent.appendChild(divItem);
	});
}