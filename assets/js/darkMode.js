const toggleBtn = document.querySelector("#toggleTheme");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.innerHTML = `
   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12.058 20q-3.333 0-5.667-2.334T4.058 12q0-2.47 1.413-4.535q1.414-2.067 4.01-2.973q.306-.107.536-.056t.381.199t.192.38q.04.233-.063.489q-.194.477-.282.971T10.158 7.5q0 2.673 1.863 4.537q1.864 1.863 4.537 1.863q.698 0 1.277-.148q.58-.148.988-.24q.218-.04.399.01t.292.176q.115.125.156.308t-.047.417q-.715 2.45-2.803 4.013T12.058 20"/>
    </svg>
  `;
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81zM1 13h3v-2H1m12 9h-2v3h2"/>
      </svg>
    `;
    // toggleBtn.innerHTML += "Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.innerHTML = `
     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12.058 20q-3.333 0-5.667-2.334T4.058 12q0-2.47 1.413-4.535q1.414-2.067 4.01-2.973q.306-.107.536-.056t.381.199t.192.38q.04.233-.063.489q-.194.477-.282.971T10.158 7.5q0 2.673 1.863 4.537q1.864 1.863 4.537 1.863q.698 0 1.277-.148q.58-.148.988-.24q.218-.04.399.01t.292.176q.115.125.156.308t-.047.417q-.715 2.45-2.803 4.013T12.058 20"/>
      </svg>
    `;
    // toggleBtn.innerHTML += "Dark Mode";
  }
});
