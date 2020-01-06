$(function () {
  var button = $('<div class="multiple-download">Multiple Downloads</div>');
  button.prependTo('[role="toolbar"]:has([data-tooltip="Preview"])');
  button.click(function () {
    var selecteds = $('[data-is-doc-name][data-id][aria-selected="true"]');
    selecteds.each(function () {
      var dataId = $(this).attr('data-id');
      var url = `https://drive.google.com/uc?id=${dataId}&export=download`;
      var frame = $(`<iframe src="${url}" frameborder="0" style="display: none"></iframe>`);
      frame.appendTo(this);
    });
  });
});
