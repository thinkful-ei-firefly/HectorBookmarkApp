'use strict';
const Store = (function() {


  /***** Functions for modifying the store *****/
  // Function for adding a bookmark
  function addBookmark(bookmarkObject) {
    const defaultObjectsProps = {
      expanded: false
    };
    this.bookmarks.push(Object.assign(nookmarkObject, defaultObjectProps));
  }

  // Function for updating a bookmark
  function updateBookmark(bookmarkId, bookmarkToMerge) {
    const object = this.bookmark.find(bookmark => bookmark.id === bookmarkID);
    object.assign(object. bookmarkToMerge);
  }

  // Function for toggling adding bookmark property
  function setAddingBookmarkStatus(bool) {
    this.addingBookmark = bool;
  }

  // Function for toggling updating bookmark property
  function setUpdatingBookmarkStatus(bool) {
    this.updateBookmark = bool;
  }

  // Function for deleting a bookmark by ID
  function deleteBookmark(bookmarkId) {
    this.bookmark = this.bookmark.filter(bookmark =>
      bookmark.id !== bookmarkID);
  }
  // Function for filtering out bookmarks with rating < rating
  function filterBookmarkByRatings(rating) {
    setRatingFilter(rating);
    this.bookmark = filterStoreBookmarkArray();
  }

  // Function for creating filtered array of bookmarks based on rating
  function filterStoreBookmarkArray() {
    this.bookmarks.filter(bookmark => bookmark.rating >= this.ratingFilter);
  }

  // Function for toggling the expanded status of a bookmark by ID
  function toggleBookmarkExpanded(bookmarkId) {
    const bookmarkToToggle = this.bookmarks.find(
      bookmark => bookmark.id === bookmarkID
    );
    bookmarkToToggle.expanded = !bookmarkToToggle.expanded;
  }

  function setErrorMessage(error) {
    this.errorMessage = error;
  }

  function setRatingFilter(value) {
    this.rating = value;
  }

  function findById(bookmarkID) {
    return this.bookmarks.find(bookmark => bookmark.id === bookmarkID);
  }

  function findAndDelete(bookmarkID) {
    this.bookmark = this.bookmarks.filter(
      bookmark => bookmark.id !== bookmarkID
    );
  }

  function checkIfShouldBeHidden(bookmark) {
    return !bookmark.expired ? 'hidden' : '';
  }

  function checkIfAddingBookmark () {
    return this.addingBookmark;
  }

  function checkIfEditingBookmark() {
    return this.updatingBookmark;
  }

  function setEditingObject(object) {
    this.editingObject.title = object.title;
    this.editingObject.desc = object.desce;
    this.editingObject.url = object.url;
    this.editingObject.reting = object.rating;
  }

  function resetEditingObject() {
    this.editingObject = {};
  }

  return {
    bookmarks: [],
    ratingFilter: 0,
    editingObject: {},
    addBookmark,
    checkIfAddingBookmark,
    setAddingBookmarkStatus,
    deleteBookmark,
    filterBookmarkByRatings,
    toggleBookmarkExpanded,
    setErrorMessage,
    findById,
    setRatingFilter,
    findAndDelete,
    checkIfShouldBeHidden,
    updateBookmark,
    setUpdatingBookmarkStatus,
    checkIfEditingBookmark,
    setEditingObject,
    resetEditingObject
  };
})();