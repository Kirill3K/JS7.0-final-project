window.addEventListener('DOMContentLoaded', function() { 

  'use strict';
  let calc = require('./parts/calc.js'),
      form = require('./parts/form.js'),
      popup = require('./parts/popup.js'),
      popupEngineer = require('./parts/popupEngineer.js'),
      popupInterval = require('./parts/popupInterval.js'),
      img = require('./parts/img.js'),
      glazingTabs = require('./parts/glazing-tabs.js'),
      decorTabs = require('./parts/decor-tabs.js'),
      timer = require('./parts/timer.js');
  
  calc();
  form();
  popup();
  popupEngineer();
  popupInterval();
  img();
  glazingTabs();
  decorTabs();
  timer();
});