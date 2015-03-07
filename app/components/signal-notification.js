import Ember from 'ember';

export default Ember.Component.extend({
  name: Ember.computed.alias('signal.name'),
  ticker: Ember.computed.alias('signal.ticker'),
  direction: Ember.computed.alias('signal.direction'),
  timestamp: Ember.computed.alias('signal.timestamp'),
  price: Ember.computed.alias('signal.price')
});
