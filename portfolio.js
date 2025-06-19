const DATA_PATH = "./portfolio_data.json";

const SEPARATOR_HORIZONTAL = createSeparator();

const CONTENT_CARD = createContentCard();


fetch(DATA_PATH)
	.then(response => response.json())
	.then(data => {
		addMainContent(data);
	});

function handleImageLoad() {
	document.getElementById("background-pattern").style.height = `${document.documentElement.scrollHeight}px`;
}

function addMainContent(data) {
	const mainContent = document.createElement("div");
	mainContent.id = "main-content";


	//

	const backLink = document.createElement("a");
	backLink.classList.add("button-link", "bright-link");
	backLink.textContent = "< Back to CV";
	backLink.href = "index.html";
	//mainContent.appendChild(backLink);


	createExperience(createMainContentList(mainContent, "Portfolio"), data.projects);

	document.getElementById("main-full").appendChild(mainContent);
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


function createExperience(parent, experience) {
	experience.forEach(({ name, role, description, technologies, links, images }) => {
		const divItem = document.createElement("div");
		divItem.classList.add("item");

		divItem.innerHTML = `
      <div class="item-content-portfolio">
        <h3 class="item-title">${name}</h3>
        <h4 class="item-subtitle">${role}</h4>
        <div class="item-description">${description}</div>
		${createLinkContainer(links).outerHTML}
		${createImageContainer(images).outerHTML}
      </div>
    `;

		parent.appendChild(divItem);
		parent.appendChild(SEPARATOR_HORIZONTAL.cloneNode());
	});
	parent.removeChild(parent.lastChild);
}

function createLinkContainer(links) {
	const container = document.createElement("div");
	container.classList.add("item-portfolio-links");

	links.forEach((link) => {
		const linkElement = document.createElement("a");
		linkElement.classList.add("item-portfolio-link");
		linkElement.classList.add("bright-link");
		linkElement.textContent = link.label;
		linkElement.href = link.url;
		container.appendChild(linkElement);
	});
	return container;
}

function createImageContainer(images) {
	const container = document.createElement("div");
	container.classList.add("item-images");

	images.forEach((image) => {
		const img = document.createElement("img");
		img.classList.add("item-image");
		img.src = image;
		img.alt = "Project Image";

		img.addEventListener('load', handleImageLoad);

		container.appendChild(img);
	});
	return container;
}