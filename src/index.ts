$(document).ready(function () {
  $('.w-richtext[image-lightbox=true] figure img').each(function () {
    $(this)
      .parent()
      .css({ cursor: 'pointer' })
      .attr('data-fancybox', 'gallery')
      .attr('data-src', this.src);
  });

  $('.w-richtext[image-lightbox=true] img').each(function () {
    if (!$(this).closest('figure').length) {
      $(this)
        .parent()
        .css({ cursor: 'pointer' })
        .attr('data-fancybox', 'gallery')
        .attr('data-src', this.src);
    }
  });

  $('[data-fancybox]').fancybox({
    clickContent: false,
  });
});
