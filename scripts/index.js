'use strict';

/* global Store, Bookmarks, API */

$(function() {
  // Bind the event listeners
  Bookmarks.bindEventListeners();
  // Make the initial API call to the server to get all the bookmarks that are present
  api.getBookmarks(bookmarks => {
    // Loop through bookmarks and add them to the store
    bookmarks.forEach(bookmark => Store.addBookmark(bookmark));
    // Render the page
    Bookmarks.render();
  });
});