(function () {
  "use strict";

  var rotators = document.querySelectorAll(".word-rotator[data-words]");

  if (!rotators.length) {
    return;
  }

  rotators.forEach(function (rotator) {
    var words = rotator
      .getAttribute("data-words")
      .split("|")
      .map(function (word) {
        return word.trim();
      })
      .filter(Boolean);
    var index = 0;

    if (words.length < 2) {
      return;
    }

    setInterval(function () {
      index = (index + 1) % words.length;
      rotator.textContent = words[index];
    }, 2500);
  });
})();
