export default {
	createNotification(name, alertmessage) {
		browser.notifications.create(name, {
			type: "basic",
			iconUrl: "/static/assets/icon-medium.png",
			title: "NoDistractions",
			message: alertmessage
		});
	},
	test() {
		console.log("hello");
	}
};