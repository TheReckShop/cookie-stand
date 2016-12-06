'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  randomCustPerHour: [],
  totalCookiesSoldEachHour: [],
  totalDailyCookieSales: 0,
  calcRandomCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randomCustPerHour[i]);
    }
  },
}

var seaTacAirport = {
  locationName: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  randomCustPerHour: [],
  totalCookiesSoldEachHour: [],
  totalDailyCookieSales: 0,
}

var seattleCenter = {
  locationName: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  randomCustPerHour: [],
  totalCookiesSoldEachHour: [],
  totalDailyCookieSales: 0,
}

var capitolHill = {
  locationName: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  randomCustPerHour: [],
  totalCookiesSoldEachHour: [],
  totalDailyCookieSales: 0,
}

var alki = {
  locationName: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  randomCustPerHour: [],
  totalCookiesSoldEachHour: [],
  totalDailyCookieSales: 0,
}
