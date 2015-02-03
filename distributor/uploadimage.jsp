<%@ page
	import="com.google.appengine.api.blobstore.BlobstoreServiceFactory"%>
<%@ page import="com.google.appengine.api.blobstore.BlobstoreService"%>

<%
	BlobstoreService blobstoreService = BlobstoreServiceFactory
			.getBlobstoreService();
%>

<!DOCTYPE html>

<html class="no-js">

<head>
<meta http-equiv="Access-Control-Allow-Origin" content="*">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Freshr</title>
<meta name="description" content="">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="/css/entry.css">


<link href='http://fonts.googleapis.com/css?family=Ubuntu'
	rel='stylesheet' type='text/css'>

<script
	src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>
	window.jQuery
			|| document.write(
					'<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')
</script>

<script>
	(function(i, s, o, g, r, a, m) {
				i['GoogleAnalyticsObject'] = r;
				i[r] = i[r] || function() {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * new Date();
				a = s.createElement(o), m = s.getElementsByTagName(o)[0];
				a.async = 1;
				a.src = g;
				m.parentNode.insertBefore(a, m)
			})(window, document, 'script',
					'//www.google-analytics.com/analytics.js', 'ga');

	ga('create', 'UA-59204009-1', 'auto');
	ga('send', 'pageview');
</script>

</head>
<body>


<center>
	<div class="row">

		<form method="post"
			action='<%=blobstoreService.createUploadUrl("/uploaddistributor")%>'
			enctype="multipart/form-data" data-ajax="false">
			<input type=hidden name=id id=id value= /> <input name="imageField"
				type="file" id="image" accept="image/*" capture /> <input
				type="submit" value="Upload Image" name="submit" class="btn">
		</form>
	</div>
</center>
	<script>
		function getUrlParameter(urlParameterName) {

			if (urlParameterName = (new RegExp('[?&]'
					+ encodeURIComponent(urlParameterName) + '=([^&]*)'))
					.exec(location.search)) {
				return decodeURIComponent(urlParameterName[1]);
			}
		}

		$("#id").val(getUrlParameter("id"));
	</script>

</body>
</html>
