$(document).ready(function() {

	$("#searchBox").focus();

	populateSearch();
	function populateSearch() {
		var words = [
			"chips",
			"crisps",
			"dip",
			"butter",
			"avocado",
			"steak",
			"mincemeat",
			"meatballs",
			"eggs",
			"chicken",
			"drumsticks",
			"olive oil",
			"coconut oil",
			"bérnaise",
			"vinaigrette",
			"ghee",
			"lard",
			"tallow",
			"duck fat",
			"goose fat",
			"avocado oil",
			"peanut oil",
			"sesame oil",
			"flaxseed oil",
			"mayonnaise",
			"gravy",
			"hollandaise",
			"aoli",
			"tamari",
			"tapatio",
			"sriracha",
			"pork",
			"bacon",
			"ham",
			"carnitas",
			"pork butt",
			"pork shoulder",
			"tenderloin",
			"london broil",
			"tri tip",
			"salami",
			"prosciutto",
			"pancetta",
			"sausage",
			"pecans",
			"brazil nuts",
			"macadamia nuts",
			"escargot",
			"parmigiano",
			"mozzarella",
			"colby jack",
			"monterey jack",
			"gouda",
			"pico de gallo",
			"guacamole",
			"sour cream",
			"cream",
			"whipped cream",
			"milk",
			"broccoli",
			"asparagus",
			"artichokes",
			"mushrooms",
			"zucchini",
			"eggplant",
			"cucumber",
			"cauliflower",
			"brussels sprouts",
			"cabbage",
			"tomatoes",
			"spinach",
			"lettuce",
			"peppers",
			"celery",
			"blackberries",
			"raspberries",
			"blueberries",
			"strawberries",
			"boysenberries",
			"kumquats",
			"clementines",
			"cinnamon",
			"vanilla",
			"psyllium husk",
			"coconut flour",
			"cocoa"
			]
		var choice = Math.floor(Math.random() * (words.length));
		$("body").scrollTop(0);
		$("#searchBox").attr("placeholder", words[choice]);
	}

	$("#searchBox").on("focus click", function(event) {

	    genTitleLink('populate');
	});

	$("#searchBox").keyup(function(event) {
	    if (event.keyCode === 13) {
	    	event.preventDefault();
	        $("#searchBtn").click();
	    } else if ((event.keyCode != 13 || event.keyCode === 0) && ($('#searchBtn').data('when') === 'first')){

	    	genTitleLink('populate');
	    }
	});

	function genTitleLink(which) {
		
		if (which === 'populate') {
			var title = $("#searchBox").val();
			if (title === "") {
				title = $("#searchBox").attr("placeholder");
			}
			var link = "https://en.wikipedia.org/w/api.php?action=query&list=prefixsearch&pssearch=" + title + "&generator=links&format=json&formatversion=2&callback=?";
			
			checkAPI(link);
			populatePredictions(link);

		} else if (which === 'fill') {
			var title = $("#searchBox").val();
			if (title === "") {
				title = $("#searchBox").attr("placeholder");
			} else if (title != "") {
				$("#searchBox").attr("placeholder", title);
				$("#searchBox").val("");
			}
			var link = "https://en.wikipedia.org/w/api.php?action=query&list=search&generator=links&srlimit=max&srsearch=" + title + "&format=json&formatversion=2&callback=?";

			checkAPI(link);
			fillData(title, link);
		}


	}

	function populatePredictions(link) {
		$.getJSON(link, function(data) {
			console.log(data);
			var predContainer =	$('<div/>', {
									id: 'predContainer',
									class: 'list-group'
								}).append(predLink);
			$("#predictions").html(predContainer);

			var predList = [];
			if (data.query.prefixsearch.length > 1) {
			var i = predList.length;
			var x;
			if (data.query.prefixsearch.length === 10) {
				x = 10;
			} else if (data.query.prefixsearch.length < 10) {
				x = data.query.prefixsearch.length;
			}
			for (i; i<x; i++) {

				var predTitle = 	$('<h6/>', {
										id: data.query.prefixsearch[i].title,
										text: data.query.prefixsearch[i].title
									});
				predList[i] =		$('<div/>', {
										id: 'prediction' + i,
									}).append(predTitle);
				var predLink = 	$('<a/>', {
										class: 'list-group-item list-group-item-action listy',
										target: '_blank',
										href: 'https://www.wikipedia.org/wiki/' + data.query.prefixsearch[i].title,
										'data-click': 'ready'
									}).appendTo($("#predContainer")).append(predList[i]);
			}
		} $("#predictions").scrollTop(0);

		})
		.fail(function() {
		    console.log("ERROR! Couldn't populate predictions.");
		    $("#bugs").data('error-pred', 'yes');
		});
	}

	$("#predictions").on("mouseenter", "#predContainer", function(){
		$(this).focus();
	});

	$("#predictions").on("mouseleave click", "#predContainer", function(){
		$(".listy").data("click", "done");
	});

	$("#main").click(function(event){
		if ((event.target.id != $("#predictions").attr("id")) && (event.target.id != $("#searchBox").attr("id")) && ( !$(".listy").has(event.target).length)) {
			$("#predContainer").blur();
		}
	});

	$("#predictions").on("blur", "#predContainer", function(){
		hidePredictions();
	});

	$("#searchBox").blur(function(event) {
		if ($(".listy").data("click") === 'done') {
			hidePredictions();
		}
	});



	function hidePredictions() {
		var emptyPredContainer =	$('<div/>', {
										id: 'emptyPredContainer'
									});
		$("#predictions").html(emptyPredContainer);
	}

	$("#searchBtn").click(function(){
		var when = $('#searchBtn').data('when');
		loadLoading();
		if (when === 'first') {
			$('#searchBtn').data('when', 'next');		
			createNavbar();
        }
        searchQuery();
	});

	function loadLoading() {
		var loadInner =	$('<div/>', {
							id: 'loading'
						});
		var loadOuter =	$('<div/>', {
							id: 'loadOuter'
						}).append(loadInner);
		$("#load").html(loadOuter);

	}

	function createNavbar() {
		$("#searchBox").addClass('next');
		var movImg = 	$('#wikipedia');
		var newInput = 	$('<div/>', {
							id: 'containSearch',
							class: 'form-control input-group'
						}).append($('#searchBox'), $('.input-group-append'));
		var newA = 		$('<a/>', {
							class: 'navbar-brand',
							target: '_blank',
							href: 'https://www.wikipedia.org'
						}).append(movImg);
		var movSearch = $('#search').removeClass('mx-auto front').prepend(newA, newInput);
		var newNav = 	$('<nav/>', {
							id: 'newNav',
							class: 'navbar fixed-top navbar-light justify-content-between'
						}).append(movSearch);
		var origMain =	$('<div/>', {
								id: 'origMain'
							});

		$("body").prepend(newNav);
		$("#main").replaceWith(origMain);
	}

	function searchQuery() {

		genTitleLink('fill');

		$("body").scrollTop(0);
		$("#searchBox").focus();
	}

	function checkAPI(link) {
		$.getJSON(link, function(data) {
			// console.log("SUCCESS! Connected to API.");
		})
		.fail(function() {
		    console.log("ERROR! Couldn't connect to API.");
		    $("#bugs").data('error-api', 'yes');
		});
	}

	function genBug(error) {
		var bugSpan = 		$('<span/>', {
								class: 'oi oi-bug'
							});
		var bugBtn = 		$('<button/>', {
								id: 'bugBtn',
								class: 'btn',
								type: 'button'
							}).append(bugSpan);
		var bugSubText = 	$('<h6/>', {
								text: 'If the issue persists, tweet me this issue by clicking the bug below!'
							});
		var bugText = 		$('<h5/>', {
								text: 'Please try again.'
							});
		var bugAlert = 		$('<div/>', {
								id: 'bugAlert',
								class: 'alert',
								role: 'alert'
							}).append(bugText).append(bugSubText).append(bugBtn);
		var bugContain = 	$('<div/>', {
								id: 'bugContain',
							}).append(bugAlert);

		$("#bugs").html(bugContain);
		$('#loadOuter').remove();

		var errors = $("#bugs").data();
		var errorLink;

		if (error === 'data') {
			errorLink = "data fill error";
			if (errors) {
				if ($("#bugs").data('error-api') === 'yes') {
					errorLink += ", API error";
				} else if ($("#bugs").data('error-pred') === 'yes') {
					errorLink += ", predictions error";
				}
			}
		}

		var link = 'https://twitter.com/intent/tweet?text=' + 
					'@stefaniedev Please fix freeCodeCamp Wikipedia Viewer in CodePen - ' + 
					errorLink + '! https://bit.ly/XYZ';
		$("#bugs").data('error', link);
	}

	function fillData(title, link) {
		$.getJSON(link, function(data) {
			console.log(data);



				$('#footer').css({
					bottom: 'auto'
				});

			var newMain =	$('<div/>', {
									id: 'newMain'
								}).append(resultLink);
			$("#origMain").replaceWith(newMain);


			var resultList = [];
			var i = resultList.length;
			var x;
			if (data.query.searchinfo.totalhits > 10) {
				x = 10;
				var many = (data.query.searchinfo.totalhits - resultList.length).toLocaleString();
				var moreResults = 	$('<button/>', {
										id: 'moreBtn',
										class: 'btn clicky',
										type: 'button',
										'data-title': title,
										text: many + ' more results...'
									});
				$('#more').html(moreResults);
				$('#more').addClass('more');
			} else if (data.query.searchinfo.totalhits <= 10) {
				x = data.query.searchinfo.totalhits;
				var noMoreResults = $('<div/>');
				$('#more').html(noMoreResults);
			}
			for (i; i<x; i++) {

				var resultSnip = 	$('<p/>', {
										html: data.query.search[i].snippet + '...'
									});
				var resultTitle = 	$('<h6/>', {
										id: data.query.search[i].title,
										text: data.query.search[i].title
									});
				resultList[i] =		$('<div/>', {
										id: 'result' + i,
										class: 'results'
									}).append(resultTitle).append(resultSnip);
				var resultLink = 	$('<a/>', {
										class: 'clicky',
										target: '_blank',
										href: 'https://www.wikipedia.org/wiki/' + data.query.search[i].title
									}).appendTo($("#newMain")).append(resultList[i]);

				$('#loadOuter').remove();
			}
		})
		.fail(function() {
		    console.log("ERROR! Couldn't fill data.");
		    genBug('data');
		});
	}

	$("#more").click(function(){
		var dataTitle = $('#moreBtn').data('title');
		var page = "https://en.wikipedia.org/w/index.php?title=Special:Search&search=" + dataTitle + "&fulltext=1";
		window.open(page);
	});


	$("#randomBtn").click(function(){
		window.open("https://en.wikipedia.org/wiki/Special:Random");
	});


	$("#bugs").on("click", "#bugBtn", function(){
		var link = $('#bugs').data('error');
		window.open(link);
	});
















});