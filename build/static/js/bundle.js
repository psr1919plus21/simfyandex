(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createAchieves = require('./createAchieves');

var achievesList = document.querySelector('.profile-achieves');
var mockAchievesRecievedFromServer = [{
  'type': 'cat',
  'food': 'omnivorous'
}, {
  'type': 'owl',
  'food': 'predator'
}, {
  'type': 'wolf',
  'food': 'predator'
}, {
  'type': 'bear',
  'food': 'omnivorous'
}, {
  'type': 'rabbit',
  'food': 'herbivores'
}, {
  'type': 'fish',
  'food': 'predator'
}, {
  'type': 'dog',
  'food': 'omnivorous'
}, {
  'type': 'bull',
  'food': 'herbivores'
}, {
  'type': 'horse',
  'food': 'herbivores'
}];

(0, _createAchieves.createAchieves)(achievesList, mockAchievesRecievedFromServer);

},{"./createAchieves":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAchieves = createAchieves;
function createAchieves(container, data) {
  var achievesMaxCount = 100;

  if (data.length > achievesMaxCount) {
    throw new Error('Sorry, count of achieves exceed available value');
  }

  data.forEach(function (achieve) {
    var newAchieve = document.createElement('li');
    newAchieve.classList.add('profile-achieves_item');
    newAchieve.classList.add('profile-achieves_item__' + achieve.type);
    newAchieve.classList.add('profile-achieves_item__' + achieve.food);
    container.appendChild(newAchieve);
  });
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc3RhdGljL2pzL2FjaGlldmVzLmpzIiwic3JjL3N0YXRpYy9qcy9jcmVhdGVBY2hpZXZlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBRUEsSUFBTSxlQUFlLFNBQVMsYUFBVCxDQUF1QixtQkFBdkIsQ0FBckI7QUFDQSxJQUFNLGlDQUFpQyxDQUNyQztBQUNFLFVBQVEsS0FEVjtBQUVFLFVBQVE7QUFGVixDQURxQyxFQUtyQztBQUNFLFVBQVEsS0FEVjtBQUVFLFVBQVE7QUFGVixDQUxxQyxFQVNyQztBQUNFLFVBQVEsTUFEVjtBQUVFLFVBQVE7QUFGVixDQVRxQyxFQWFyQztBQUNFLFVBQVEsTUFEVjtBQUVFLFVBQVE7QUFGVixDQWJxQyxFQWlCckM7QUFDRSxVQUFRLFFBRFY7QUFFRSxVQUFRO0FBRlYsQ0FqQnFDLEVBcUJyQztBQUNFLFVBQVEsTUFEVjtBQUVFLFVBQVE7QUFGVixDQXJCcUMsRUF5QnJDO0FBQ0UsVUFBUSxLQURWO0FBRUUsVUFBUTtBQUZWLENBekJxQyxFQTZCckM7QUFDRSxVQUFRLE1BRFY7QUFFRSxVQUFRO0FBRlYsQ0E3QnFDLEVBaUNyQztBQUNFLFVBQVEsT0FEVjtBQUVFLFVBQVE7QUFGVixDQWpDcUMsQ0FBdkM7O0FBdUNBLG9DQUFlLFlBQWYsRUFBNkIsOEJBQTdCOzs7Ozs7OztRQzFDZ0IsYyxHQUFBLGM7QUFBVCxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsSUFBbkMsRUFBeUM7QUFDOUMsTUFBSSxtQkFBbUIsR0FBdkI7O0FBRUEsTUFBSSxLQUFLLE1BQUwsR0FBYyxnQkFBbEIsRUFBb0M7QUFDbEMsVUFBTSxJQUFJLEtBQUosQ0FBVSxpREFBVixDQUFOO0FBQ0Q7O0FBRUQsT0FBSyxPQUFMLENBQWEsVUFBQyxPQUFELEVBQWE7QUFDeEIsUUFBSSxhQUFhLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFqQjtBQUNBLGVBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5Qix1QkFBekI7QUFDQSxlQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsNEJBQTRCLFFBQVEsSUFBN0Q7QUFDQSxlQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsNEJBQTRCLFFBQVEsSUFBN0Q7QUFDQSxjQUFVLFdBQVYsQ0FBc0IsVUFBdEI7QUFDRCxHQU5EO0FBT0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHtjcmVhdGVBY2hpZXZlc30gZnJvbSAnLi9jcmVhdGVBY2hpZXZlcyc7XG5cbmNvbnN0IGFjaGlldmVzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLWFjaGlldmVzJyk7XG5jb25zdCBtb2NrQWNoaWV2ZXNSZWNpZXZlZEZyb21TZXJ2ZXIgPSBbXG4gIHtcbiAgICAndHlwZSc6ICdjYXQnLFxuICAgICdmb29kJzogJ29tbml2b3JvdXMnXG4gIH0sXG4gIHtcbiAgICAndHlwZSc6ICdvd2wnLFxuICAgICdmb29kJzogJ3ByZWRhdG9yJ1xuICB9LFxuICB7XG4gICAgJ3R5cGUnOiAnd29sZicsXG4gICAgJ2Zvb2QnOiAncHJlZGF0b3InXG4gIH0sXG4gIHtcbiAgICAndHlwZSc6ICdiZWFyJyxcbiAgICAnZm9vZCc6ICdvbW5pdm9yb3VzJ1xuICB9LFxuICB7XG4gICAgJ3R5cGUnOiAncmFiYml0JyxcbiAgICAnZm9vZCc6ICdoZXJiaXZvcmVzJ1xuICB9LFxuICB7XG4gICAgJ3R5cGUnOiAnZmlzaCcsXG4gICAgJ2Zvb2QnOiAncHJlZGF0b3InXG4gIH0sXG4gIHtcbiAgICAndHlwZSc6ICdkb2cnLFxuICAgICdmb29kJzogJ29tbml2b3JvdXMnXG4gIH0sXG4gIHtcbiAgICAndHlwZSc6ICdidWxsJyxcbiAgICAnZm9vZCc6ICdoZXJiaXZvcmVzJ1xuICB9LFxuICB7XG4gICAgJ3R5cGUnOiAnaG9yc2UnLFxuICAgICdmb29kJzogJ2hlcmJpdm9yZXMnXG4gIH1cbl1cblxuY3JlYXRlQWNoaWV2ZXMoYWNoaWV2ZXNMaXN0LCBtb2NrQWNoaWV2ZXNSZWNpZXZlZEZyb21TZXJ2ZXIpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlQWNoaWV2ZXMoY29udGFpbmVyLCBkYXRhKSB7XG4gIGxldCBhY2hpZXZlc01heENvdW50ID0gMTAwO1xuXG4gIGlmIChkYXRhLmxlbmd0aCA+IGFjaGlldmVzTWF4Q291bnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvcnJ5LCBjb3VudCBvZiBhY2hpZXZlcyBleGNlZWQgYXZhaWxhYmxlIHZhbHVlJyk7XG4gIH1cblxuICBkYXRhLmZvckVhY2goKGFjaGlldmUpID0+IHtcbiAgICBsZXQgbmV3QWNoaWV2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbmV3QWNoaWV2ZS5jbGFzc0xpc3QuYWRkKCdwcm9maWxlLWFjaGlldmVzX2l0ZW0nKTtcbiAgICBuZXdBY2hpZXZlLmNsYXNzTGlzdC5hZGQoJ3Byb2ZpbGUtYWNoaWV2ZXNfaXRlbV9fJyArIGFjaGlldmUudHlwZSk7XG4gICAgbmV3QWNoaWV2ZS5jbGFzc0xpc3QuYWRkKCdwcm9maWxlLWFjaGlldmVzX2l0ZW1fXycgKyBhY2hpZXZlLmZvb2QpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdBY2hpZXZlKTtcbiAgfSk7XG59O1xuIl19
