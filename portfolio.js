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

	createExperience(createMainContentList(mainContent, "Portfolio"), data.projects);

	document.getElementById("main-full").appendChild(mainContent);
}

function createExperience(parent, experience) {
	experience.forEach(({ name, role, description, technologies, links, images, imageWidth, imageHeight }) => {
		const divItem = document.createElement("div");
		divItem.classList.add("item");

		divItem.innerHTML = `
      <div class="item-content-portfolio">
        <h3 class="item-title">${name}</h3>
        <h4 class="item-subtitle">${role}</h4>
        <div class="item-description">${description}</div>
		${createLinkContainer(links).outerHTML}
		${createImageContainer(images, name, imageWidth, imageHeight).outerHTML}
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

function createImageContainer(images, projectName, imageWidth, imageHeight) {
	const container = document.createElement("div");
	container.classList.add("item-images");

	images.forEach((image) => {
		const img = document.createElement("img");
		img.classList.add("item-image");
		img.width = imageWidth;
		img.height = imageHeight;
		img.src = image;
		img.alt = `${projectName} screenshot`;

		img.addEventListener('load', handleImageLoad);

		container.appendChild(img);
	});
	return container;
}