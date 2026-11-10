document.addEventListener("DOMContentLoaded", () => {
  const counterSpan = document.getElementById("days-count");
  if (!counterSpan) return;

  const today = new Date();
  let halloween = new Date(today.getFullYear(), 9, 31);

  if (today > halloween) {
    halloween.setFullYear(today.getFullYear() + 1);
  }

  const diffTime = halloween - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  counterSpan.textContent = diffDays;

  // zegar
  const clockSpan = document.getElementById("live-clock");
  if (!clockSpan) return;

  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clockSpan.textContent = `${hours}:${minutes}:${seconds}`;
  }

  updateClock();
  setInterval(updateClock, 1000);
});
