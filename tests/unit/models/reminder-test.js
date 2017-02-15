import { moduleForModel, test } from 'ember-qunit';

moduleForModel('reminder', 'Unit | Model | reminder', {
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject({title:'Bekah', date: 'wednesday', notes: 'note'});
  assert.equal(model.get('title'), 'Bekah', 'Title is Bekah')
});
