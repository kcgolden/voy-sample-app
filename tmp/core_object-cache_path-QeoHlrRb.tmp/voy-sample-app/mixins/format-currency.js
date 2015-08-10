define('voy-sample-app/mixins/format-currency', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Mixin.create({
		formatCurrency: function formatCurrency(amount) {
			var i = parseFloat(amount),
			    s;
			if (isNaN(i)) {
				i = 0.00;
			}
			var minus = '';
			if (i < 0) {
				minus = '-';
			}
			i = Math.abs(i);
			i = parseInt((i + 0.005) * 100);
			i = i / 100;
			s = i + '';
			if (s.indexOf('.') < 0) {
				s += '.00';
			}
			if (s.indexOf('.') === s.length - 2) {
				s += '0';
			}
			s = minus + s;
			return '$ ' + s;
		}
	});

});