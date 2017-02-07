import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['josh, go buy a puppy! this is urgent.', 'bekah, go get stuff from the dollar store']
  }
});
