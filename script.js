document.getElementById("train-search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;
    const travelClass = document.getElementById("class").value;
    
    alert(`Searching Trains from ${from} to ${to} on ${date} (${travelClass})`);
});

document.getElementById("pnr-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const pnr = document.getElementById("pnr-input").value;
    alert(`Checking PNR Status for: ${pnr}`);
});
