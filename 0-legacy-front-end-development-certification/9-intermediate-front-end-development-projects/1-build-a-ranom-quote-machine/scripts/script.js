$(document).ready(function() {

	checkAPI();

	function checkAPI() {
		$.getJSON( "https://cors-anywhere.herokuapp.com/https://morbotron.com/api/random", function(data) {
			console.log( "SUCCESS!" );
		})
		.fail(function(err) {
		    console.log( "ERROR! " + err);
		    $("#generate").on("click", function(){
			    $("#quote").html('Please try again. <br> If the issue persists, tweet me this issue by clicking baby Bender!');
			    $("#quoteBox").scrollTop(0);
				var link = 'https://twitter.com/intent/tweet?text=' + '@stefaniedev Please fix freeCodeCamp Futurama Quote Generator - cannot connect to API! https://bit.ly/2s5LwGO';
				$(".btnLink").attr("href", link);
		  	});
		});
	}

	$("#generate").on("click", function(){

		getQuote();

		function getQuote () {
			$.getJSON( "https://cors-anywhere.herokuapp.com/https://morbotron.com/api/random", function(data) {
				$("#quote").html(data.Subtitles[0].Content);
				var quotes = [data.Subtitles[0].Content];
				for (var i = 1; i < data.Subtitles.length; i++) {
					$("#quote").append('<br>' + data.Subtitles[i].Content);
					quotes += ' ' + data.Subtitles[i].Content;
				}
				
				var season = data.Episode.Key;
				var episode = data.Episode.Title;
				$("#episode").html(season + ' ~ "' + episode + '"');
				$("#quoteBox").scrollTop(0);

				var link = 'https://twitter.com/intent/tweet?text=' + '"' + quotes + '"' + '%20~' + episode + ' https://bit.ly/2s5LwGO';
				$(".btnLink").attr("href", link);
				
				console.log(quotes, season, episode);
			

			})
			.fail(function(err) {
			    console.log( "ERROR! " + err);
			    $("#generate").on("click", function(){
				    $("#quote").html('Please try again. <br> If the issue persists, tweet me this issue by clicking baby Bender!');
				    $("#quoteBox").scrollTop(0);
					var link = 'https://twitter.com/intent/tweet?text=' + '@stefaniedev Please fix freeCodeCamp Futurama Quote Generator - cannot load quotes! https://bit.ly/2s5LwGO';
					$(".btnLink").attr("href", link);
			  	});
			});
		}

	});




});