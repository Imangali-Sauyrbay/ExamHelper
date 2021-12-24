module.exports = [
  {
    title: 'Paste #1',
    answer: '[].slice.call(document.getElementsByTagName("textarea")).concat([].slice.call(document.getElementsByTagName("input"))).forEach(el => el.addEventListener("paste", (e) => {e.stopPropagation();e.preventDefault();var cd = e.clipboardData || window.clipboardData;var pd = cd.getData("Text");e.target.value = e.target.value + pd;}));'
  },
  {
    title: 'Paste #2',
    answer: 'document.addEventListener("paste", function(e){e.stopImmediatePropagation();return true;};, true);'
  },
];
