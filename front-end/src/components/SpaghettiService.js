import axios from 'axios';
var baseUrl = 'http://localhost:10010';

export function createUser(username, password, historyData, callback) {
  var url = baseUrl + '/createUser/' + username + '/password/' + password;
  axios({
    method: 'put',
    url: url,
    data: { historyData },
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(function(response) {
      callback(response);
    })
    .catch(function(error) {
      if (error.response) {
        callback(error.response);
      } else if (error.request) {
        callback();
      } else {
        callback();
      }
    });
}

export function retrieveUser(username, password, callback) {
  var url = baseUrl + '/retrieveUser/' + username + '/password/' + password;
  axios({
    method: 'get',
    url: url,
    data: {},
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(function(response) {
      console.log('Successfully called retrieve user');
      callback(response);
    })
    .catch(function(error) {
      if (error.response) {
        callback(error.response);
      } else if (error.request) {
        callback();
      } else {
        callback();
      }
    });
}

export function deleteEntry(username, password, entryIndex, callback) {
  var url =
    baseUrl +
    '/deleteEntry/' +
    username +
    '/password/' +
    password +
    '/entryIndex/' +
    entryIndex;
  axios({
    method: 'delete',
    url: url,
    data: {},
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(function(response) {
      callback(response);
    })
    .catch(function(error) {
      if (error.response) {
        callback(error.response);
      } else if (error.request) {
        callback();
      } else {
        callback();
      }
    });
}

export function analyzeText(text, username, password, callback) {
  var url = baseUrl + '/analyzeText/';
  var formData;
  if (!!username || !!password) {
    formData = {
      text: text,
      username: username,
      password: password
    };
  } else {
    formData = {
      text: text
    };
  }

  axios({
    method: 'post',
    url: url,
    data: formData
  })
    .then(function(response) {
      callback(response);
    })
    .catch(function(error) {
      if (error.response) {
        callback(error.response);
      } else if (error.request) {
        callback();
      } else {
        callback();
      }
    });
}
