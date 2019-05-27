window.addEventListener('DOMContentLoaded', function() { 

  'use strict';
  let calc = require('./parts/calc.js'),
      form = require('./parts/form.js'),
      modal = require('./parts/modal.js'),
      img = require('./parts/img.js'),
      glazingTabs = require('./parts/glazing-tabs.js'),
      decorTabs = require('./parts/decor-tabs.js'),
      timer = require('./parts/timer.js');
  
  calc();
  form();
  modal();
  img();
  glazingTabs();
  decorTabs();
  timer();
});