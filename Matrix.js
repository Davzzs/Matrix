const fid = document.querySelector("form");
const resp1 = document.querySelector("h2");

fid.addEventListener("submit", (e) => {
    const fi = document.querySelector("input[name='first-name']").value;
    resp1.innerText = `The matrix is everywhere, ${fi}.`;
    e.preventDefault();
});