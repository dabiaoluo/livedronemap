var imageryProvider = new Cesium.ArcGisMapServerImageryProvider({
	url : 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
	enablePickFeatures: false
});

function cameraFlyTo(longitude, latitude, altitude, duration) {
	viewer.camera.flyTo({
		destination: Cesium.Cartesian3.fromDegrees(	parseFloat(longitude),
													parseFloat(latitude),
													parseFloat(altitude)
		),
		duration: parseInt(duration)
	});
}

//url 페이지로 이동
function goPage(url) {
	if(url === '/drone-project/list-drone-project') {
		var currentUrl = location.href;
		if(currentUrl.indexOf(url) >= 0) {
			console.log("내 페이지에서 나를 누름");
			// 자기 페이지에서 자기 메뉴를 누름
			if($("#leftMenuArea").css("display") == "none") {
				$("#leftMenuArea").show();
				$(".mapWrap").css({"padding-left" : "391px"});
			} else {
				$("#leftMenuArea").hide();
				$(".mapWrap").css({"padding-left" : "51px"});
			}
			return;
		} else {
			console.log("다른 페이지에서 나를 누름");
			location.href = url;
			return;
		}
	} else {
		// 다른 페이지로 이동
		location.href = url;
		return;
	}
}

// 닫기 버튼 클릭
$( "#menuCloseButton" ).on( "click", function() {
	if($("#leftMenuArea").css("display") == "none") {
		$("#leftMenuArea").show();
		$(".mapWrap").css({"padding-left" : "391px"});
	} else {
		$("#leftMenuArea").hide();
		$(".mapWrap").css({"padding-left" : "51px"});
	}
});

