$(document).ready(function() {

// INITIALIZE variables & primary function

	getLocation();
	var latitude;
	var longitude;
	var link;

// GET location coordinates of user

	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(success, error);
	    } else { 
	        $("#location").html("Geolocation is not supported by this browser.");
	    }
	}
		function success(position) {
			latitude = position.coords.latitude;
			longitude = position.coords.longitude;

// DEFER GET WEATHER *AFTER* GET LOCATION to ensure proper coordinates sent with GET request

	    	var defer = $.Deferred();
    		defer.done(getWeather(latitude, longitude, link));
    		defer.resolve();

		}
		function error(err) {
			console.warn( "ERROR! " + err);
			$("#location").html("Please enable location or click the shuffle button.");
		}


// GET & LOAD weather data: (name, coords, temp, images)

	function getWeather (latitude, longitude) {
		link = "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude;
		$.getJSON( link , function(data) {
			console.log('Acquired Location!','lat: ' + latitude + ', lon: ' + longitude);
			console.log(data);

			displayName(data.name, data.sys.country);

			var latfloor = Math.floor(latitude);
			var lonfloor = Math.floor(longitude);
			$("#coordinates").html('( ' + latfloor + ' ° , ' + lonfloor + ' ° )');

			var temp = Math.floor(data.main.temp);
			$("#temp").html(temp + '°');

			var weather = data.weather[0].id;
			var time = new Date(data.dt * 1000).getHours();

			var defer = $.Deferred();
    		defer.done(changeImages(weather, time, temp));
    		defer.done(preserveTemp());
    		defer.resolve();
			
		})
		.fail(function() {
		    console.log( "ERROR! getWeather did not execute." );
		    $("#location").html("Please try again.");
		});
	}

// CHECK location names, do not display Undefined/blank

		function displayName(name, country) {
			if (name === "" || name === undefined ||country === "" || country === undefined) {
				$("#location").html("Undetermined, Earth");
			} else if (name) {
				$("#location").html(name + ", " + country);
			}
		}

// CHECK unit of measurement, ensure temp matches
		function preserveTemp() {
			var unit = $("#unit").data("unit");
		  	var change = '';
		  	var prev = $("#temp").html().replace(/\xb0/g,'');
		    var temp = parseInt(prev, 10);

			if (unit === 'F') {
		  		temp = ((temp * 9) / 5)+ 32;
		  		temp = Math.round(temp * 1) / 1;
		  		$("#temp").html(temp + '°');
				console.log('Preserved units. Adj temp from ' + prev + ' to ' + temp + '° ' + unit);
			}
		}


// CHANGE icon & background image based on weather conditions

		function changeImages(weather, time, temp) {
			var icon = '<span class="oi oi-star"></span>';
			var image = 'https://farm1.staticflickr.com/891/41413457811_176fd53086_o.jpg';
//NIGHTTIME
			if (5 >= time || time >= 21) {
				if (temp >= 25) {
					image = 'https://farm1.staticflickr.com/866/40494310505_aec0435bfe_o.jpg';
				} else if (25 > temp && temp >= 10) {
					image = 'https://farm1.staticflickr.com/810/27540604618_a748aeca5f_o.jpg';
				} else if (10 > temp && temp > 0) {
					image = 'https://farm1.staticflickr.com/803/41369070042_8e26c175d6_o.jpg';
				} else if (temp <= 0) {
					image = 'https://farm1.staticflickr.com/796/27540604248_4e7e2a6e6a_o.jpg';
				} icon = '<span class="oi oi-moon"></span>';
//SUNSET
			} else if (21 > time && time >= 16) {
				if (temp >= 25) {
					image = 'https://farm1.staticflickr.com/869/41369459212_b2ef63d32f_o.jpg';
				} else if (25 > temp && temp >= 10) {
					image = 'https://farm1.staticflickr.com/894/41369459382_c2b7756a82_o.jpg';
				} else if (10 > temp && temp > 0) {
					image = 'https://farm1.staticflickr.com/883/41412290641_c643f93627_o.jpg';
				} else if (temp <= 0) {
					image = 'https://farm1.staticflickr.com/801/27540990598_213bf99d99_o.jpg';
				} icon = '<span class="oi oi-moon"></span>';
//DAYTIME
			} else if (16 > time && time > 5) {
//THUNDER
				if (299 >= weather && weather >= 200) {
					if (temp >= 25) {
						image = 'https://farm1.staticflickr.com/786/40516853235_3b3bf14262_o.jpg';
					} else if (25 > temp && temp >= 10) {
						image = 'https://farm1.staticflickr.com/822/40698138714_9179ef23ab_o.jpg';
					} else if (10 > temp && temp > 0) {
						image = 'https://farm1.staticflickr.com/794/40516853165_14d7cdc530_o.jpg';
					} else if (temp <= 0) {
						image = 'https://farm1.staticflickr.com/892/41369607412_021df9bdcb_o.jpg';
					} icon = '<span class="oi oi-bolt"></span>';
//RAINING
				} else if (699 >= weather && weather >= 300) {
					if (temp >= 25) {
						image = 'https://farm1.staticflickr.com/802/41412486601_28624f722f_o.jpg';
					} else if (25 > temp && temp >= 10) {
						image = 'https://farm1.staticflickr.com/822/40516909565_da549eaaa9_o.jpg';
					} else if (10 > temp && temp > 0) {
						image = 'https://farm1.staticflickr.com/868/41412486151_f738d27485_o.jpg';
					} else if (temp <= 0) {
						image = 'https://farm1.staticflickr.com/890/41412485561_238eb4a1bd_o.jpg';
					} icon = '<span class="oi oi-rain"></span>';
//FOGGY
				} else if (799 >= weather && weather >= 700) {
					if (temp >= 25) {
						image = 'https://farm1.staticflickr.com/796/41412697491_882de04576_o.jpg';
					} else if (25 > temp && temp >= 10) {
						image = 'https://farm1.staticflickr.com/892/39603421680_a53613303a_o.jpg';
					} else if (10 > temp && temp > 0) {
						image = 'https://farm1.staticflickr.com/797/41412697261_78a643774b_o.jpg';
					} else if (temp <= 0) {
						image = 'https://farm1.staticflickr.com/878/41412696621_bcfb63071f_o.jpg';
					} icon = '<span class="oi oi-cloud"></span>';
//CLEAR
				} else if (weather === 800) {
					if (temp >= 25) {
						image = 'https://farm1.staticflickr.com/881/41369935902_f7abfcdcd1_o.jpg';
					} else if (25 > temp && temp >= 10) {
						image = 'https://farm1.staticflickr.com/783/27541478858_6890221114_o.jpg';
					} else if (10 > temp && temp > 0) {
						image = 'https://farm1.staticflickr.com/875/41369935422_6884cd8790_o.jpg';
					} else if (temp <= 0) {
						image = 'https://farm1.staticflickr.com/875/27541478588_d40a2b05b6_o.jpg';
					} icon = '<span class="oi oi-sun"></span>';
//CLOUDY
				} else if ( 805 >= weather && weather >= 801) {
					if (temp >= 25) {
						image = 'https://farm1.staticflickr.com/873/27541738578_545a7889da_o.jpg';
					} else if (25 > temp && temp >= 10) {
						image = 'https://farm1.staticflickr.com/787/27541738358_9c3cb13ba2_o.jpg';
					} else if (10 > temp && temp > 0) {
						image = 'https://farm1.staticflickr.com/897/40698697894_7ae6346e2c_o.jpg';
					} else if (temp <= 0) {
						image = 'https://farm1.staticflickr.com/798/27541738048_7ff73b476b_o.jpg';
					} icon = '<span class="oi oi-cloudy"></span>';
				}

			} $("#pic").html(icon);
			$('#main').css('background-image', 'url(' + image + ')');
	}

// GENERATE & LOAD random location 

	$("#random").on("click", function(){
  		getRandomTemp();
		function getRandomTemp() {
			latitude = (Math.random() * (180 + 1) - 90) * (Math.floor(Math.random() * 2) == 1 ? 1 : -1);
			longitude = (Math.random() * (360 + 1) - 180) * (Math.floor(Math.random() * 2) == 1 ? 1 : -1);
			getWeather(latitude, longitude);
		}
	});


//CONVERT temperature data celsius <=> fahrenheit

	$("#convert").on("click", function(){
		convertTemp();
     });

	  	function convertTemp() {
		  	var unit = $("#unit").data("unit");
		  	var change = '';
		  	var prev = $("#temp").html().replace(/\xb0/g,'');
		    var temp = parseInt(prev, 10);

		  	if (unit === 'C') {
		  		unit = 'F';
				change = 'C';
		  		$("#unit").data("unit", 'F');
		  		temp = ((temp * 9) / 5)+ 32;
		  		temp = Math.round(temp * 1) / 1;
		  	} else if (unit === 'F') {
		  		unit = 'C';
		  		change = 'F';
		  		$("#unit").data("unit", 'C');
		  		temp = ((temp - 32) * 5) / 9;
		  		temp = Math.round(temp * 1) / 1;
		  	}

		     $("#unit").html(change);
		     $("#unit").data("unit", unit);
		     $("#temp").html(temp + '°');

		  	 console.log('Changed from ' + prev + ' to ' + temp + '° ' + unit);
		 }



// END OF DOM

});