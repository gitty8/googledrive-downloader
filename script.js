var selecteds = document.querySelectorAll('[data-id][aria-selected="true"]');
selecteds.forEach(function (element) {
  var dataId = element.getAttribute('data-id');
  var frame = document.createElement("iframe");
  frame.src = `https://drive.google.com/uc?id=${dataId}&export=download`;
  frame.style = 'display: none';
  element.appendChild(frame);
});
