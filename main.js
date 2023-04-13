const DATA_PATH = "./data.json";

const SEPARATOR_HORIZONTAL = createSeparator();

const CONTENT_CARD = createContentCard();


fetch(DATA_PATH)
	.then(response => response.json())
	.then(data => {
		addMainContent(data);
		addInfoLists(data);
	});

function formatTimespan(timespan) {
	const { start, end } = timespan;
	switch (end) {
		case start: return start;
		case "Present": return `${start} - <b>${end}</b>`;
		default: return `${start} - ${end}`;
	}
}

function createHeader(text) {
	const header = document.createElement("h3");
	header.classList.add("major-header");
	header.textContent = text;
	return header;
}

function createContentCard() {
	const card = document.createElement("div");
	card.classList.add("content-card");
	return card;
}

function createContentList() {
	const list = document.createElement("div");
	list.classList.add("major-content-list");
	return list;
}

function createMainContentList(mainDiv, headerText) {
	const header = createHeader(headerText);
	const card = CONTENT_CARD.cloneNode();
	const list = createContentList();

	mainDiv.appendChild(header);
	mainDiv.appendChild(card);
	card.appendChild(list);

	return list;
}

function addMainContent(data) {
	const mainContent = document.createElement("div");
	mainContent.id = "main-content";

	addExperience(createMainContentList(mainContent, "Work Experience"), data.experience);
	addEducation(createMainContentList(mainContent, "Education"), data.education);

	document.getElementById("main-right").appendChild(mainContent);
}

function createInfoListsDiv() {
	const infoListsDiv = document.createElement("div");
	infoListsDiv.id = "info-lists";
	return infoListsDiv;
}

function createSeparator() {
	const separator = document.createElement("div");
	separator.classList.add("separator-horizontal");
	return separator;
}

function addInfoLists(data) {
	const infoListsDiv = createInfoListsDiv();

	addBasicList(infoListsDiv, data.languages, "Languages");
	infoListsDiv.appendChild(SEPARATOR_HORIZONTAL.cloneNode());
	addBasicList(infoListsDiv, data.programmingLanguages, "Programming Languages");
	infoListsDiv.appendChild(SEPARATOR_HORIZONTAL.cloneNode());
	addBasicList(infoListsDiv, data.gameEngines, "Game Engines");
	infoListsDiv.appendChild(SEPARATOR_HORIZONTAL.cloneNode());
	addBasicList(infoListsDiv, data.skills, "Skills");
	infoListsDiv.appendChild(SEPARATOR_HORIZONTAL.cloneNode());
	addContactInfo(infoListsDiv, data.contact, "Contact");
	infoListsDiv.appendChild(SEPARATOR_HORIZONTAL.cloneNode());
	addContactInfo(infoListsDiv, data.links, "Links");

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



function addContactInfo(infoDIv, contact, label) {
	const div = document.createElement("div");
	div.classList.add("skill-list");
	div.classList.add("contact");

	const header = document.createElement("h4");
	header.textContent = label;

	div.appendChild(header);

	for (let i = 0; i < contact.length; i++) {
		const contactItem = document.createElement("a");
		contactItem.className = "contact-item";

		contactItem.href = contact[i].url;
		contactItem.innerHTML = contact[i].text;
		div.appendChild(contactItem);
		div.appendChild(document.createElement("br"));
	}

	infoDIv.appendChild(div);
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
      <div class="item-timespan">${formatTimespan(timespan)}</div>
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

function addEducation(parent, education) {
	education.forEach(({ timespan, school, degree, field }) => {
		const divItem = document.createElement("div");
		divItem.classList.add(`item`);
		divItem.innerHTML = `
		<div class="item-timespan">${formatTimespan(timespan)}</div>
		<div class="item-content">
		  <h3 class="item-title">${school}</h3>
		  <h4 class="item-subtitle">${degree}</h4>
		  <h5 class="item-subtitle">${field}</h5>
		</div>
	  `;
		parent.appendChild(divItem);
	});
}