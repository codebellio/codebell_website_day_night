"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// create element of theme and theme dropdown
var themeDropdown = document.createElement("div");
themeDropdown.classList.add("theme-dropdown");
var themeChangers = document.createElement("div");
themeChangers.classList.add("theme-changers");
themeChangers.id = "theme-button";
var themesText = document.createElement("div");
themesText.classList.add("themes-text"); // Create an SVG element which is fixed at right position

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("width", "18");
svg.setAttribute("height", "18");
svg.setAttribute("fill", "currentColor");
svg.classList.add("bi", "bi-palette-fill");
svg.setAttribute("viewBox", "0 0 16 16");
var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", "M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z");
svg.appendChild(path);
themesText.appendChild(svg);
themeChangers.appendChild(themesText);
var themeList = document.createElement("ul");
themeList.classList.add("theme-list");
themeList.id = "theme-list"; // store the colors of circle icons

var themesData = [{
  theme: "default",
  color: "#0c87c9"
}, {
  theme: "orange",
  color: "#ff5740"
}, {
  theme: "purple",
  color: "#6B4EFF"
}, {
  theme: "dim-blue",
  color: "#0a5b75"
}, {
  theme: "teal-green",
  color: "#18da8e"
}]; // Create list items with data-theme and style

themesData.forEach(function (data) {
  var listItem = document.createElement("li");
  listItem.setAttribute("data-theme", data.theme);
  var themeCircle = document.createElement("div");
  themeCircle.classList.add("theme-circle");
  themeCircle.style.backgroundColor = data.color;
  listItem.appendChild(themeCircle);
  themeList.appendChild(listItem);
});
themeDropdown.appendChild(themeChangers);
themeDropdown.appendChild(themeList); // Append the theme-dropdown container to the document body

document.body.appendChild(themeDropdown);
var themes = [{
  name: 'default',
  colors: {
    '--primary-color': '#0c87c9'
  }
}, {
  name: 'orange',
  colors: {
    '--primary-color': '#ff5740'
  }
}, {
  name: 'purple',
  colors: {
    '--primary-color': '#6B4EFF'
  }
}, {
  name: 'dim-blue',
  colors: {
    '--primary-color': '#0a5b75'
  }
}, {
  name: 'teal-green',
  colors: {
    '--primary-color': '#18da8e'
  }
}];
var currentThemeIndex = 0; // Function to apply a selected theme 

function applyTheme(themeIndex) {
  var root = document.documentElement;
  currentThemeIndex = themeIndex;
  var currentTheme = themes[currentThemeIndex];

  for (var _i = 0, _Object$entries = Object.entries(currentTheme.colors); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        property = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    root.style.setProperty(property, value);
  }

  var svgIcon = document.querySelector(".bi-palette-fill");
  svgIcon.style.color = getComputedStyle(root).getPropertyValue("--primary-color"); // Saving in the local storage

  localStorage.setItem('selectedThemeIndex', themeIndex);
} // Function to toggle the theme dropdown visibility


function toggleDropdown() {
  var themeList = document.getElementById('theme-list');
  themeList.classList.toggle('show');
} // Attach a click event listener to the theme button


var themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click', toggleDropdown); // Attach click event listeners to the theme options in the dropdown

var themeListItems = document.querySelectorAll('.theme-list li');
themeListItems.forEach(function (item, index) {
  item.addEventListener('click', function () {
    applyTheme(index);
    toggleDropdown();
  });
}); // Load the selected theme index from localStorage on page load

var savedThemeIndex = localStorage.getItem('selectedThemeIndex');

if (savedThemeIndex !== null) {
  applyTheme(parseInt(savedThemeIndex));
} else {
  // Use the default theme if no selection is stored
  applyTheme(currentThemeIndex);
}