import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  title: '',
  date: '',
  notes: '',

  actions: {
    editReminder(model) {
      console.log('1')
      // let i = this.get('store').findRecord('reminder', model.id).then(function(stuff) {
      //   stuff.set({title: '', date: '', notes: ''});
      // });
      model.save();
    }
  }
});
