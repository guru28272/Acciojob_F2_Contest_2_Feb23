const btn = document.querySelector(`#button`);
const form = document.querySelector(`.container`);
const cls = document.querySelector(`.close`);
const publish = document.querySelector(`#publish`);
const cancel = document.querySelector(`#cancel`);
const text = document.querySelector(`#text`);
const textArea = document.querySelector(`#textarea`);
const main = document.querySelector(`.main`);
const heading = document.querySelector(`.mainH`);
const para = document.querySelector(`.mainP`);

btn.addEventListener(`click`, function (params) {
  form.classList.add(`show`);
});
cls.addEventListener(`click`, function (params) {
  form.classList.add(`hide`);
});
publish.addEventListener(`click`, function (e) {
  e.preventDefault();

  heading.textContent = text.value;
  para.textContent = textArea.value;
  main.appendChild(heading);
  main.appendChild(para);
  text.value = ``;
  textArea.value = ``;
});
cancel.addEventListener(`click`, function (e) {
  e.preventDefault();
  heading.textContent = ``;
  para.textContent = ``;
});
