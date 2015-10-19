Members = new Mongo.Collection('members');

if (Meteor.isServer) {
	Meteor.publish("members", function () {
	    return Members.find();
	});
}

if (Meteor.isClient) {
	// Meteor.subscribe("members");
}