"use strict";

export const createBtn = (label, style) => {
  const btn = document.createElement("btn");
  btn.textContent = label;
  btn.classList.add(style);
  return btn;
};
