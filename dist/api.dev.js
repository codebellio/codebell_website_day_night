"use strict";

var token = localStorage.getItem("token");

window.call_api = function (api, request_data) {
  if (!request_data) {
    request_data = {};
  }

  if (!api) {
    api = "test";
  }

  var url = "/api/" + api;

  if (location.hostname == "localhost") {
    url = "http://api.localhost/api/" + api;
  } else {
    url = "https://api.codebell.io/api/" + api;
  }

  console.log(url);
  return fetch(url, {
    method: 'post',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: JSON.stringify(request_data)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);

    if (data.Message) {
      var bgcolor = "#ffff00";

      if (data.Status == 2) {
        bgcolor = "#198754";
      } else {
        bgcolor = "#dc3545";
      }

      Snackbar.show({
        text: data.Message,
        pos: 'top-center',
        actionText: 'Ok',
        backgroundColor: bgcolor,
        actionTextColor: "#FFF"
      }); // , duration: 100000});
    }

    return data;
  })["catch"](function (error) {
    window.show_error("Unable to complete current action. " + error.message);
  });
};