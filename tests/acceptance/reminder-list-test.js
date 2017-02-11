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
