import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-reminder', 'Integration | Component | edit reminder', {
  integration: true
});

test('it renders an input', function(assert) {
  this.render(hbs`{{edit-reminder}}`);
  assert.equal(this.$('input').length, 2);
});

test('it renders a text area', function(assert) {
  this.render(hbs`{{edit-reminder}}`);
  assert.equal(this.$('textArea').length, 1);
});

test('it renders a button', function(assert) {
  this.render(hbs`{{edit-reminder}}`);
  assert.equal(this.$('button').length, 1);
});
