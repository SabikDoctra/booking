var countTries = 0;
var physicalProperties = [];

function get_generated_data(requestGuid, clearData, forPrint) {

	var url = 'http://localhost/doctra/hs/html_data/v1/physical_ajax';


	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", url);
	xmlhttp.setRequestHeader("Content-Type", "application/json");

	xmlhttp.onreadystatechange = function () {

		if (this.readyState == 4 && this.status == 200) {
			var responseObj = JSON.parse(this.responseText);

			console.log('a');
	
			if (!responseObj.last_request || responseObj.last_request == 'false') {
				if (countTries < 150) {
					get_generated_data(requestGuid, clearData, forPrint);
					countTries++;
				}
			} else {
				document.getElementById("fullcontent").innerHTML = responseObj.fullcontent;
				physicalProperties = JSON.parse(responseObj.physicalProperties);
				initialize(forPrint);
			}
		}

	}

	xmlhttp.send(JSON.stringify({ uid: requestGuid, clear: clearData }));
	xmlhttp = null;
}

function drawChart(chartID)
{   
	pediatricScaleData = physicalProperties[chartID];
	periods = pediatricScaleData["periods"];
	physicaldata = pediatricScaleData["physicaldata"];
	yLabelStringText = pediatricScaleData["yLabelStringText"];
	xLabelStringText = pediatricScaleData["xLabelStringText"];
	yearMonth = pediatricScaleData["yearMonth"];
	durationVar = pediatricScaleData["duration"];
	responsiveVar = pediatricScaleData["responsive"];
	legendDisplayVar = pediatricScaleData["legendDisplay"];
	
	var ctx = document.getElementById(chartID);
	var myChart = new Chart(ctx, {
		 type: 'line',
		 data: {
			labels: periods,
			datasets: physicaldata
		},
		options: {  scaleBeginAtZero: false,
			responsive: responsiveVar,
			spanGaps: true,
			tooltips: {
				mode: 'index',
				callbacks: {
					title: function(tooltipItem, data) { 
						var title = title = data.labels[tooltipItem[0].index] || '';
						return title + yearMonth;
					}
				}
			},
			legend: {
				position: 'top',display: legendDisplayVar					    
			},
			animation: {
				duration: durationVar, // general animation time
			},
			scales: {    
				xAxes: [{
					scaleLabel: {
						display: true,
						labelString: xLabelStringText
					},
					ticks: {
						major: {
							fontSize: 14,
							fontStyle: 'bold'
						},     
						callback: function(value, index, values) { 
							if(values[index] !== undefined)
							{
								if(value%1 == 0)
								{
									return value + " " + yearMonth;
								}
								else
								{
									return "";
								}
							}
						}
					}
				}],
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: yLabelStringText
					}
				}]
			}
		}
	}); 
	
}

function initialize(forPrint) {
	
	for (var key in physicalProperties) {
		drawChart(key);
	}
	
	setTimeout(function (forPrint) {
		loadingcontent = document.getElementById("loadingcontent");
		loadingcontent.className = "hdb";
		fullcontent = document.getElementById("fullcontent");
		fullcontent.style.visibility = "visible";
		if (forPrint) {
			window.external.goToPreview();
		}
	}, 800, forPrint);
}