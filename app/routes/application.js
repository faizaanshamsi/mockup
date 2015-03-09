import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var signals = [{
      name: "200 Day Simple Moving Average",
      ticker: "GOOGL",
      timestamp: "10:10:10",
      direction: "up",
      price: 550.50
    },
    {
      name: "200 Day Simple Moving Average",
      ticker: "AAPL",
      timestamp: "10:08:32",
      direction: "down",
      price: 98.50
    },
    {
      name: "50 Day Simple Moving Average",
      ticker: "MSFT",
      timestamp: "10:03:09",
      direction: "up",
      price: 35.50
    },
     {
      name: "200 Day Moving Average",
      ticker: "SWM",
      timestamp: "10:01:19",
      direction: "down",
      price: 60.50
    }]

    return signals;
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    var pinnedStocks = [{
      ticker: "GOOGL"
    },
    {
      ticker: "MSFT"
    },
    {
      ticker: "AAPL"
    },
    {
      ticker: "SWM"
    },
    {
      ticker: "GE"
    }]
    controller.set('pinnedStocks', pinnedStocks);
  }
});
