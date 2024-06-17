//   document.addEventListener("DOMContentLoaded", () => {
//     const textElement = document.getElementById("animated-text");
//     const originalText = textElement.textContent;
//     let index = 0;

//     setInterval(() => {
//         textElement.textContent = originalText.substring(0, index);
//         index = (index + 1) % (originalText.length + 1); // Loop index
//     }, 200); // Change 200 to adjust the speed (milliseconds per character)
// });
var typed = new Typed(".animated-text",{
  strings: ["APHISIT DANCHAODANG"],
  typeSpeed: 100,
  backSpeed: 55,
  loop: true,
  showCursor: false
});
  