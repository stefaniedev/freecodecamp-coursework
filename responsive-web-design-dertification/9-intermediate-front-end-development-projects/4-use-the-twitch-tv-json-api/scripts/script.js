$(document).ready(function() {

// LIST of twitch streamers who stream programming regularly

	var users = [
		"Diregoldfish",
		"WobblyTrout",
		"topbraj",
		"wRadion",
		"Deskarter",
		"pajlada",
		"csharpfritz",
		"Adam13531",
		"luelly",
		"JessicaMak",
		"Doborog",
		"QaziTV",
		"2hmedia",
		"techlahoma",
		"rocknightstudios",
		"Clarkio",
		"CodeNJoy",
		"Omatum_Greg",
		"PlayDungeonmans",
		"Essial",
		"FreeCodeCamp",
		"MeteorDev",
		"SYNTAG",
		"noobs2ninjas",
		"Restreamio"
	];

//LIST of default twitch logos if cannot load user logo from wind bow API
	
	var defaultLogos = [
		"https://farm1.staticflickr.com/978/27238269987_915388d693_o.jpg",
		"https://farm1.staticflickr.com/903/27238270037_b10ce78ffa_o.jpg",
		"https://farm1.staticflickr.com/904/27238270137_1ea9a563a6_o.jpg",
		"https://farm1.staticflickr.com/971/27238270237_b26bc70bd1_o.png",
		"https://farm1.staticflickr.com/943/27238270387_b9196e609b_o.jpg",
		"https://farm1.staticflickr.com/968/27238270097_6915da7bf6_o.jpg",
		"https://farm1.staticflickr.com/909/27238270357_e82ec06c05_o.png"
	];
	
	var allStreamers = [];
	var onlineStreamers = [];
	var offlineStreamers = [];
	
		for (var i=0; i<users.length; i++) {
			allStreamers.push({name: users[i]});
			genInfo(users[i], genTable, genLists);
		}
	

// GENERATE user info from wind bow API

	function genInfo(user, callback1, callback2) {
		var streamUser = allStreamers[i];
// 		var linkChannel = 'https://wind-bow.gomix.me/twitch-api/channels/' + user + '?callback=?';
// 		$.ajax({
// 	        url: linkChannel,
// 	        async: false,
// 	        dataType: 'jsonp',
// 	        success: function(data) {
// // 				console.log(data);
// 	        }
// 	    });
		var linkLogo = 'https://wind-bow.gomix.me/twitch-api/users/' + user + '?callback=?';
		$.ajax({
	        url: linkLogo,
	        async: false,
	        dataType: 'jsonp',
	        success: function(data) {
	        	streamUser.logo = data.logo;
	        }
	    });
		var linkStatus = 'https://wind-bow.gomix.me/twitch-api/streams/' + user + '?callback=?';
		$.ajax({
	        url: linkStatus,
	        async: false,
	        dataType: 'jsonp',
	        success: function(data) {
	        	if (data.stream) {
	        		streamUser.live = "oi-audio"
	        	  	streamUser.status = data.stream.channel.status;
	        	}
	        }
	    })

// WAIT until data collection is done to load content

	    .done(function() {
			allStreamers = allStreamers.sort(function(a, b) {
				return a.name.localeCompare(b.name, "en-US");
			});
	    	callback1(genTableRows);
			callback2(streamUser);
	    });

	}

//LOAD basic outline of table

	function genTable(callback) {

		var tbody = 		$('<tbody/>', {
								id: 'tableBody'
							});
		var tStream = 		$('<img/>', {
								class: 'twitch',
								src: "https://farm1.staticflickr.com/982/41478803294_14c3d1dc1f_o.png"
							});
		var tProgram = 		$('<img/>', {
								class: 'twitch',
								src: "https://farm1.staticflickr.com/969/28327059108_5e1595670b_o.png"
							});
		var thead = 		$('<thead/>');
		var table = 		$('<table/>', {
								class: 'table table-hover'
							}).append(thead, tbody);
		var sp3 = 			$('<span/>', {
								class: "oi oi-bolt"
							});
		var navA3 = 		$('<a/>', {
								id: "offline",
								class: "nav-item nav-link",
								href: "#",
								"data-toggle": "tooltip",
								"data-placement": "bottom",
								title: "offline"
							}).append(sp3);
		var sp2 = 			$('<span/>', {
								class: "oi oi-infinity"
							});
		var navA2 = 		$('<a/>', {
								id: "all",
								class: "nav-item nav-link active",
								href: "#",
								"data-toggle": "tooltip",
								"data-placement": "bottom",
								title: "all streamers"
							}).append(sp2);
		var sp1 = 			$('<span/>', {
								class: "oi oi-audio"
							});
		var navA1 = 		$('<a/>', {
								id: "online",
								class: "nav-item nav-link",
								href: "#",
								"data-toggle": "tooltip",
								"data-placement": "bottom",
								title: "online"
							}).append(sp1);
		var navTabs = 		$('<nav/>', {
								class: 'nav nav-pills nav-justified'
							}).append(navA1, navA2, navA3);
		var streamer = 		$('<div/>', {
								id: 'streamers',
								class: 'table-responsive-sm text-center'
							}).append(tProgram, tStream, navTabs, table);
		callback(allStreamers, streamer);
		$(function () {
		  $('[data-toggle="tooltip"]').tooltip()
		});
	}

// LOAD data into table rows etc

	function genTableRows(list, div) {
		var newTbody = $('<tbody/>', {
						id: 'tableBody'
					});
		$('#tableBody').html(newTbody);
		for (var i=0; i<list.length; i++) {
			if (list[i].live) {
				var live = list[i].live;
				var status = list[i].status;
				var pGame = $('<p/>', {
								class: 'status',
								text: status
							});
				var which = " online";
			} else if (!list[i].live) {
				var live = "oi-bolt";
				var pGame = "";
				var which = " offline";
			}
			
			if (list[i].logo) {
				var logo = list[i].logo;
			} else {
				var choice = Math.floor(Math.random() * (defaultLogos.length));
				var logo = defaultLogos[choice];
			}
			var tdImg = $('<span/>', {
							class: 'icon oi ' + live,
						});
			var td2 = 	$('<td/>', {
							class: 'right'
						}).append(tdImg);

			var pName = $('<p/>', {
							class: 'username',
							text: list[i].name
						});
			
			var td1 =	$('<td/>').append(pName, pGame);
			var img = 	$('<img/>', {
							class: 'icon logo',
							src: logo
						});
			var tableRow = $('<th/>', {
							class: 'left',
							scope: 'row'
						}).append(img);
			var trow = 	$('<tr/>', {
							class: "clicky" + which
						}).append(tableRow, td1, td2);
			$('#main').html(div);
			$('#tableBody').append(trow);
		}
	}
	
// GENERATE lists for table tabs - online, all, offline streamers

	function genLists(user) {
		if (user.live) {
			onlineStreamers.push(user);
		} else {
			offlineStreamers.push(user);
		}
		onlineStreamers = onlineStreamers.sort(function(a, b) {
			return a.name.localeCompare(b.name, "en-US");
		});
		offlineStreamers = offlineStreamers.sort(function(a, b) {
			return a.name.localeCompare(b.name, "en-US");
		});
	}
	
// ON CLICK go to user twitch channel whether streaming or not

	$("#inner").on("click", ".clicky", function() {
		var user = $(".username", this).text();
		var link = "https://www.twitch.tv/"+ user;
		window.open(link);
	});
	
	$("#inner").on("click", ".nav-link", function() {
		$(this).closest("nav").find("a").removeClass("active");
		$(this).addClass("active");
	});
	
	$("#inner").on("click", "#online", function() {
		genTableRows(onlineStreamers);
	});
	$("#inner").on("click", "#all", function() {
		genTableRows(allStreamers);
	});
	$("#inner").on("click", "#offline", function() {
		genTableRows(offlineStreamers);
	});

});