import Ember from 'ember';

export default Ember.Component.extend({
  isHit: false,

  actions: {
    getHit: function() {
      this.toggleProperty('isHit');
    }
  }
});
