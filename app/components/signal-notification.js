import Ember from 'ember';

export default Ember.Component.extend({
  name: Ember.computed.alias('signal.name'),
  ticker: Ember.computed.alias('signal.ticker'),
  direction: Ember.computed.alias('signal.direction'),
  timestamp: Ember.computed.alias('signal.timestamp'),
  price: Ember.computed.alias('signal.price'),

  signalArrow: function() {
    return this.get('direction') === "up" ? "fa-arrow-up fa-lg" : "fa-arrow-down fa-lg"
  }.property('direction'),

  actions: {
    getSound: function() {
      var name = this.get('name');
      var ticker = this.get('ticker');
      var direction = this.get('direction');
      var msg = ticker + " " + name + " hit " + direction;
      var utterance = new SpeechSynthesisUtterance(msg);
      window.speechSynthesis.speak(utterance);
    }
  }
});
