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

function createMainContentList(mainDiv, headerText) {
	const header = createHeader(headerText);
	const card = CONTENT_CARD.cloneNode();
	const list = createContentList();

	mainDiv.appendChild(header);
	mainDiv.appendChild(card);
	card.appendChild(list);

	return list;
}
