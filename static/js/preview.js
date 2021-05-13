/**
 * Use LinkPreview.net to render image + description of all marked links in the document.
 *
 * Similar to Twitter and Facebook link previews. Uses Bootstrap 4 media object.
 *
 * Example link in the HTML source code that is retrofitted:
 *
 * <a class="entity-url" data-preview="true" href="https://ripple.com/files/ripple_consensus_whitepaper.pdf">ripple.com/files/ripple_c…</a>
 *
 * https://linkpreview.net/
 */

"use strict";

(function($) {

  // https://getbootstrap.com/docs/4.0/layout/media-object/
  // https://stackoverflow.com/a/66092253/315168
  const MEDIA_OBJECT_TEMPLATE = data => `
  <a class="link-preview" href="${data.url}">
    <div class="media">
      <img class="mr-3" src="${data.image}" alt="">
      <div class="media-body">
        <h5 class="mt-0">${data.title}</h5>
        ${data.description}
      </div>
    </div>
  </a>
  `;

  // Cache AJAX get requests locally in the window storage
  async function fetchCached(url) {
    const key = "ajax-cache:" + url;
    let cachedData = localStorage.getItem(key);
    // Allow force refresfh using #disable-cache in the location bar
    // for the development
    if(cachedData && !window.location.hash.includes("disable-cache")) {
      return JSON.parse(cachedData);
    }

    const resp = await $.getJSON(url);
    localStorage.setItem(key, JSON.stringify(resp));
    return resp;
  }

  // Get link preview data from LinkPreview.net
  async function getLinkPreviewData(url) {
    // Set window.apiKey before calling this script
    const apiKey = window.linkPreviewApiKey;
    if(!apiKey) {
      throw new Error("LinkPreview API key not set");
    }
    const q = encodeURIComponent(url);
    const apiUrl = `http://api.linkpreview.net/?key=${apiKey}&q=${q}`;
    const data = await fetchCached(apiUrl);
    return data;
  }

  // Find all links marked with .entity-url and convert them
  // to link preview boxes
  function replaceURLPreviewPlaceholders() {
    $("a.entity-url").each(async function() {
      const $this = $(this);
      const url = $this.attr("href");
      const previewData = await getLinkPreviewData(url);
      if(previewData.title) {
        // Only replace if we got something to preview
        const html = MEDIA_OBJECT_TEMPLATE(previewData);
        const elem = $(html);
        $this.replaceWith(elem);
      }
    });
  }

  $(document).ready(function() {
    replaceURLPreviewPlaceholders();
  });

})(jQuery);