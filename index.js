(function() {
	function plugin(Vue, moment) {
		if (!moment) {
			console.error("Please install Moment.js");
			return;
		}

		Vue.moment = moment;

		Object.defineProperties(Vue.prototype, {
			$moment: {
				get: function() {
					return moment;
				}
			},
		});
	}

	if (typeof exports === "object") {
		module.exports = plugin;
	} else if (window.Vue && window.moment) {
		Vue.use(plugin, window.moment);
	}
})();
