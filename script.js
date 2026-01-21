

document.getElementById("searchForm").addEventListener("submit", e => {
  e.preventDefault();
  const q = document.getElementById("searchInput").value.trim();
  if (q) {
    window.location.href =
      "https://www.google.com/search?q=" + encodeURIComponent(q);
  }
});

function updateDateTime() {
  const now = new Date();

  const date = now.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  document.getElementById("date").textContent = date;
  document.getElementById("time").textContent = time;
}

setInterval(updateDateTime, 1000);
updateDateTime();
