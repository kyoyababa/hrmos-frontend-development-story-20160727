(function(window, undefined) {
  var markdownFile = 'index.md';
  var aspectRatio = '<16:9></16:9>';

  remark.create({
    sourceUrl: markdownFile,
    ratio: aspectRatio
  });
})(window);
