const DATA_PATH = "./data.json";

const SEPARATOR_HORIZONTAL = createSeparator();

const CONTENT_CARD = createContentCard();


fetch(DATA_PATH)
	.then(response => response.json())
	.then(data => {
		addMainContent(data);
		addInfoLists(data);

		requestAnimationFrame(() => {
			document.getElementById("background-pattern").style.height = `${document.documentElement.scrollHeight}px`;
		});
	});

function addMainContent(data) {
	const mainContent = document.createElement("div");
	mainContent.id = "main-content";

	createExperience(createMainContentList(mainContent, "Work Experience"), data.experience);
	addEducation(createMainContentList(mainContent, "Education"), data.education);

	document.getElementById("main-right").appendChild(mainContent);
}

function addInfoLists(data) {
	const infoListsDiv = createInfoListsDiv();

	addBasicList(infoListsDiv, data.languages, "Languages");
	infoListsDiv.appendChild(SEPARATOR_HORIZONTAL.cloneNode());
	addBasicList(infoListsDiv, data.programmingLanguages, "Programming Languages");
	infoListsDiv.appendChild(SEPARATOR_HORIZONTAL.cloneNode());
	addBasicList(infoListsDiv, data.gameEngines, "Game Engines");
	infoListsDiv.appendChild(SEPARATOR_HORIZONTAL.cloneNode());
	addBasicList(infoListsDiv, data.systemsAndServices, "Tools, Systems & Frameworks");
	infoListsDiv.appendChild(SEPARATOR_HORIZONTAL.cloneNode());
	addBasicList(infoListsDiv, data.skills, "Standout Skills");
	infoListsDiv.appendChild(SEPARATOR_HORIZONTAL.cloneNode());
	addContactInfo(infoListsDiv, data.contact, "Contact");

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

function createExperience(parent, experience) {
	experience.forEach(({ company, position, description, references, timespan, secondPosition, secondDescription }) => {
		const divItem = document.createElement("div");
		divItem.classList.add("item");

		var referenceItems = "";

		for (let reference of references) {
			referenceItems += createReference(reference).outerHTML;
		}

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
		${secondPosition != null ?
				`<h4 class="item-subtitle">${secondPosition}</h4>
			<div class="item-description">${secondDescription}</div>` : ""}
        ${referencesHTML}
      </div>
    `;

		parent.appendChild(divItem);
		parent.appendChild(SEPARATOR_HORIZONTAL.cloneNode());
	});
	parent.removeChild(parent.lastChild);
}

function createReference(reference) {
	const container = document.createElement("li");
	container.classList.add("reference");

	const mainLine = document.createElement("span");
	mainLine.classList.add("reference-name");
	container.textContent = `${reference.name}`;

	if (reference.position != null) {
		container.textContent += ` (${reference.position})`;
	}

	if (reference.contact) {

		const contactList = document.createElement("ul");

		if (reference.contact.linkedIn != null) {
			const linkedIn = document.createElement("li");
			linkedIn.innerHTML = `<span>LinkedIn: </span><a class="bright-link" href="${reference.contact.linkedIn}">${reference.name}</a>`;
			contactList.appendChild(linkedIn);
		}

		if (reference.contact.email != null) {
			const email = document.createElement("li");
			email.innerHTML = `<span>E-Mail: </span><a class="bright-link" href="mailto:${reference.contact.email}">${reference.contact.email}</a>`;
			contactList.appendChild(email);
		}

		if (reference.contact.phone != null) {
			const phone = document.createElement("li");
			phone.innerHTML = `<span>Phone: </span><a class="bright-link" href="tel:${reference.contact.phone}">${reference.contact.phone}</a>`;
			contactList.appendChild(phone);
		}

		container.appendChild(contactList);

	}

	return container;
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
		parent.appendChild(SEPARATOR_HORIZONTAL.cloneNode());
	});
	parent.removeChild(parent.lastChild);
}