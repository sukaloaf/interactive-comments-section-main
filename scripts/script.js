import "./avatarMenu.js";

const allComments = document.querySelector(".all-comments-container");
const deleteCommentContainer = document.querySelector(
  ".delete-comment-container"
);
const usersUnderMenu = document.querySelector(".menu");
let lastId = 4;
let data = getStoredData();
let currentUsername = data.currentUser.username;

// Fetch data from json file
const loadComments = async () => {
  allComments.innerHTML = "";
  let response = await fetch("../data.json");
  let commentData = await response.json();
  saveDataToLocalStorage(commentData);
  renderComments(commentData.comments);
};

// Event listener to chose current user
