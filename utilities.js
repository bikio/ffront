	function getUrlParameter(urlParameterName) {
		if (urlParameterName = (new RegExp('[?&]' + encodeURIComponent(urlParameterName) + '=([^&]*)'))
			.exec(location.search)) {
			return decodeURIComponent(urlParameterName[1]);
		}
	}

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ')
				c = c.substring(1);
			if (c.indexOf(name) == 0)
				return c.substring(name.length, c.length);
		}
		return "";
	}

	(function(i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r;
		i[r] = i[r] || function() {
			(i[r].q = i[r].q || []).push(arguments)
		}, i[r].l = 1 * new Date();
		a = s.createElement(o),
			m = s.getElementsByTagName(o)[0];
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m)
	})

	function timestampToDate(timestamp) {
		if (timestamp != null && timestamp != "" && timestamp != "undefined") {
			var date = new Date(timestamp * 1);
			var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
				'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
			];
			var year = date.getFullYear();
			var month = months[date.getMonth()];
			var day = date.getDate();
			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();

			if (min < 10)
				min = "0" + min;

			var weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
			var n = weekday[date.getDay()];

			var time = n + ', ' + month + '/' + day + '/' + year + ' ' + hour + ':' + min;

			return time;
		}
		else {
			return "";
		}
	}

	function getDate(date) {

		var day = date.getDate();
		var month = date.getMonth() + 1;
		var year = date.getFullYear();

		if (month < 10)
			month = "0" + month;
		if (day < 10)
			day = "0" + day;

		return (year + "-" + month + "-" + day);
	}
