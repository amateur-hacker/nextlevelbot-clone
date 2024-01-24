export const wobbleTextAnimation = () => {
  const allWobbleLetters = document.querySelectorAll(".wobble");

  allWobbleLetters.forEach((el) => {
    let text = el.textContent;
    const textNodes = [];

    for (let i = 0; i < text.length; i++) {
      let delay = (i + 1) * 50;
      let character = text[i] === " " ? "&nbsp;" : text[i];
      textNodes.push(
        `<span style="animation-delay: ${delay}ms">${character}</span>`
      );
    }

    el.innerHTML = textNodes.join("");
  });
};
