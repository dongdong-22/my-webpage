function activateInput(box) {
  const span = box.querySelector("span");
  const input = box.querySelector("input");
  span.style.display = 'none';
  input.style.display = 'block';
  input.focus();
}
