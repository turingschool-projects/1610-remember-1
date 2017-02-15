import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  title: '',
  date: '',
  notes: '',

  actions: {
    editReminder(model) {
      model.save();
    },
    revertReminder(model) {
      model.rollbackAttributes();
    }
  }
});
