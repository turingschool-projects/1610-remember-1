import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-reminder', 'Integration | Component | new reminder', {
  integration: true
});

test('it renders an h2', function(assert) {
  this.render(hbs`{{new-reminder}}`);
  assert.equal(this.$('h2').length, 1);
  assert.equal(this.$('h2').text(), 'New Reminder');
});

test('it renders an input', function(assert) {
  this.render(hbs`{{new-reminder}}`);
  assert.equal(this.$('input').length, 2);
});

test('it renders a text area', function(assert) {
  this.render(hbs`{{new-reminder}}`);
  assert.equal(this.$('textArea').length, 1);
});

test('it renders a button', function(assert) {
  this.render(hbs`{{new-reminder}}`);
  assert.equal(this.$('button').length, 1);
});
