document.addEventListener("DOMContentLoaded", function () {
    const journalTitle = document.getElementById("journalTitle");
    const journalText = document.getElementById("journalText");
    const addEntryButton = document.getElementById("addEntryButton");
    const journalEntries = document.getElementById("journalEntries");

    addEntryButton.addEventListener("click", function () {
        const title = journalTitle.value.trim();
        const text = journalText.value.trim();

        if (title !== "" && text !== "") {
            createJournalEntry(title, text);
            journalTitle.value = "";
            journalText.value = "";
        }
    });
    function createJournalEntry(title, text) {
        const entryDiv = document.createElement("div");
        entryDiv.classList.add("journal-entry-item");

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("journal-entry-title");
        titleDiv.textContent = `Title: ${title}`;

        const dateTimeDiv = document.createElement("div");
        dateTimeDiv.classList.add("journal-entry-datetime");
        dateTimeDiv.textContent = `Date & Time: ${getCurrentDateTime()}`;

        const textDiv = document.createElement("div");
        textDiv.classList.add("journal-entry-text");
        textDiv.textContent = `Journal Entry: ${text}`;
        textDiv.style.display = "none"; // Initially hide text

        titleDiv.addEventListener("click", function () {
            if (textDiv.style.display === "none") {
                textDiv.style.display = "block";
            } else {
                textDiv.style.display = "none";
            }
        });

        entryDiv.appendChild(titleDiv);
        entryDiv.appendChild(dateTimeDiv);
        entryDiv.appendChild(textDiv);

        journalEntries.appendChild(entryDiv);
    }

    function getCurrentDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        return `${date} ${time}`;
    }
});
