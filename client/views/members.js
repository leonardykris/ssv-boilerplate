Template.members.Members = function() {
	return Members;
}

Template.members.helpers({
	tableSettings: function() {
		return {
			collection: Members,
			rowsPerPage: 20,
			showFilter: true,
			fields: [
				{ key: '_id', label: 'Student ID' },
				{ key: 'name', label: 'Student Name' },
				{ key: 'nric_number', label: 'NRIC' },
				{ key: 'passport_number', label: 'Passport No.' },
				{ key: 'course.0.name', label: 'Course' },
				{ key: 'contact_number', label: 'Contact No.' },
				{ key: 'emergency_contact.0.name', label: 'Emergency Contact', hidden: true },
				{ key: 'emergency_contact.0.number', label: 'Emergency Contact No.', hidden: true },
				{
					key: 'renewed_at',
					label: 'Last Renewed',
					fn: function(value) {
						return moment(value).fromNow();
					}
				},
			],
			showRowCount: true,
			showColumnToggles: true,
			class: 'table table-striped table-hover col-sm-12',
		};
	}
});

Template.members.events({
	'click tr': function(){
		console.log(this);
	}
});