/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the homepage', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/reminders', 'current url is /reminders');
    assert.equal(Ember.$('.spec-reminder-item').length, 5, 'root page user sees 5 reminders');
  });
});

test('clicking on an individual item', function(assert) {
  server.createList('reminder', 5);

  visit('/');
  click('.spec-reminder--title:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1', 'click on individual item routes');
    assert.equal(Ember.$('.spec-reminder--title:first').text().trim(), Ember.$('.spec-reminder-card--title:first').text().trim(), 'title matches clicked card title');
  });
});

test('adding a new item', function(assert) {
  server.createList('reminder', 5);

  visit('/');
  click('.spec-reminder--new');
  fillIn('.spec-input-title', 'Bananas');
  fillIn('.spec-input-date', '12/23/16');
  fillIn('.spec-textarea-notes', 'This shit is bananas, B.A.N.A.N.A.S.');
  click('.spec-reminder-add--submit');
  click('.spec-reminder--title:last');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/6', 'current url is /reminders/6');
    assert.equal(Ember.$('.spec-reminder-card--title:last').text().trim(), 'Bananas', 'adds title to reminder list on submit');
    assert.equal(Ember.$('.spec-reminder-card--date:last').text().trim(), '12/23/16', 'adds date to reminder list on submit');
  });
});

test('render warning message when nothing is added', function(assert) {

  visit('/');

  andThen(function() {
    assert.equal(Ember.$('.spec-reminder-warning').length, 1, '"Create a new reminder!" message when no reminders have been added');
  });

  click('.spec-reminder--new');
  fillIn('.spec-input-title', 'Bananas');
  fillIn('.spec-input-date', '12/23/16');
  fillIn('.spec-textarea-notes', 'This shit is bananas, B.A.N.A.N.A.S.');
  click('.spec-reminder-add--submit');

  andThen(function() {
    assert.equal(Ember.$('.spec-reminder-warning').length, 0, '"Create a new reminder!" no longer exists when reminder is added');
  });
});

test('edit and save fields', function(assert) {

  visit('/');
  click('.spec-reminder--new');
  fillIn('.spec-input-title', 'Bananas');
  fillIn('.spec-input-date', '12/23/16');
  fillIn('.spec-textarea-notes', 'This shit is bananas, B.A.N.A.N.A.S.');
  click('.spec-reminder-add--submit');
  click('.spec-reminder--title');
  click('.spec-reminder-card--editbtn');
  andThen(function() {
    assert.equal(currentURL(), '/reminders/1/edit', 'click edit on reminder card takes you to nested edit route');
  });
  fillIn('.spec-edit-input-title', 'a');
  fillIn('.spec-edit-input-date', 'a');
  fillIn('.spec-edit-textarea-notes', 'a');
  click('.spec-reminder-edit--save');


  andThen(function() {
    assert.equal(currentURL(), '/reminders/1', 'click save takes you to original card route');
    assert.equal(Ember.$('.spec-reminder--title').text().trim(), 'a', 'edit title and updates reminder list on save');
    assert.equal(Ember.$('.spec-reminder-card--date').text().trim(), 'a', 'edit date and updated reminder list on save');
  });

});
