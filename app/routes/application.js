import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var signals = [{
      name: "200 Day Moving Average",
      ticker: "GOOGL",
      timestamp: "10:10:10",
      direction: "up",
      price: 550.50
    },
    {
      name: "200 Day Moving Average",
      ticker: "AAPL",
      timestamp: "10:10:10",
      direction: "down",
      price: 450.50
    },
    {
      name: "200 Day Moving Average",
      ticker: "MSFT",
      timestamp: "10:10:10",
      direction: "up",
      price: 350.50
    }]

    return signals;
  }
});
