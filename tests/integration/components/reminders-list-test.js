import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reminders-list', 'Integration | Component | reminders list', {
  integration: true,

  beforeEach: function () {
    this.set('reminder', [{ title: 'josh', date: 'date', notes: 'josh needs 20 dogs'}])
  }
});

test('it renders an h1', function(assert) {
  this.render(hbs`{{reminders-list title="reminders"}}`);
  assert.equal(this.$('h1').length, 1);
  assert.equal(this.$('h1').text(), 'reminders');
});

test('it renders an ul', function(assert) {
  this.render(hbs`{{reminders-list}}`);
  assert.equal(this.$('ul').length, 1);
});

test('it renders an li', function(assert) {
  this.render(hbs`{{ reminders-list model=reminder }}`);
  assert.equal(this.$('li').length, 1);
});
