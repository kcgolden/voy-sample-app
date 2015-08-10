import DS from 'ember-data';

var Employment = DS.Model.extend({
	name: DS.attr('string'),
	amt: DS.attr('number')
});

Employment.reopenClass({
	FIXTURES: [{
		"id": 1,
		"name": "Chris and Kiel",
		"amt": 96000
	}, {
		"id": 2,
		"name": "Nurse",
		"amt": 125000
	}]
});

export default Employment;