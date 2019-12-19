$(document).ready(function() {
// SCROLLSPY NAVIGATION FUNCTION	
	$("body").attr({ "data-spy": "scroll", "data-target": ".navbar",
	});

// ERROR-handling if failed connection to API
	$.getJSON( "http://api.chrisvalleskey.com/fillerama/get.php?count=ALL&format=json&show=futurama", function(data) {
	  console.log( "SUCCESS!" );
	})
	  .fail(function() {
	    console.log( "ERROR!" );
	    $("#generate").on("click", function(){
		      $("#quote").html(':( <br> Unfortunately, CodePen has blocked the quote generator API. Tweet them this issue by clicking baby Bender! <br> Error: [blocked] The page at https://s.codepen.io/stefaniedev/debug/bvLJLL/VGrWNnBGjPGM# was not allowed to display insecure content from http://api.chrisvalleskey.com/fillerama/get.php?count=ALL&format=json&show=futurama. <a href="https://github.com/freeCodeCamp/freeCodeCamp/issues/3264" target="_blank"> Click here </a> to read more on GitHub.');
		      $("#quoteBox").scrollTop(0);
			  var link = 'https://twitter.com/intent/tweet?text=' + '@CodePen @freeCodeCamp Please fix blocked API in JavaScript quote generator projects created in CodePen!';
			  $(".btnLink").attr("href", link);
	  });
	});

// SUCCESS connection to API
// Split here to implement test code

  $("#generate").on("click", function(){
    $.getJSON("http://api.chrisvalleskey.com/fillerama/get.php?count=ALL&format=json&show=futurama", function(data) {
      var x = Math.floor(Math.random() * 321);
      console.log(x + ': ' + ' "' + data.db[x].quote + '"' + "－" + data.db[x].source);

      $("#quote").html('<span class="oi oi-double-quote-serif-left dblQ"></span> ' + data.db[x].quote+ ' <span class="oi oi-double-quote-serif-right dblQ"></span>');
      $("#author").html(('~' + data.db[x].source));
      $("#quoteBox").scrollTop(0);
	  var link = 'https://twitter.com/intent/tweet?text=' + '"' + data.db[x].quote + '"' + '%20~' + data.db[x].source;
	  $(".btnLink").attr("href", link);
     });
  });

// TEST CODE
// figure out longest quote & longest author

 //    var lengths = [];
 //    for (var i = 0; i < data.db.length; i++) {
 //    	lengths[i] = data.db[i].source;
 //  	}
 //  	var origin;
	// origin = lengths.filter(function(val) {
 //   		return val.length >= 22;
 //  	}); console.log(origin[0]);

 //  	var lens = [];
 //    for (var i = 0; i < data.db.length; i++) {
 //    	lens[i] = data.db[i].quote;
 //  	}
 //  	var org;
	// org = lens.filter(function(val) {
 //   		return val.length >= 335;
 //  	}); console.log(org[0]);

	// $("#quote").html('<span class="oi oi-double-quote-serif-left dblQ"></span> ' + org[0] + ' <span class="oi oi-double-quote-serif-right dblQ"></span>');
 //    $("#source").html(('~' + origin[0]));
 //  	$("#quoteBox").scrollTop(0);
  //    });
  // });

// PRE-LOAD DATA FOR TEST CODE AS OF APRIL 2018
// current longest quote & longest author

	// $("#quote").html('<span class="oi oi-double-quote-serif-left dblQ"></span> It\'s just like the story of the grasshopper and the octopus. All year long, the grasshopper kept burying acorns for winter, while the octopus mooched off his girlfriend and watched TV. But then the winter came, and the grasshopper died, and the octopus ate all his acorns. Also he got a race car. Is any of this getting through to you? <span class="oi oi-double-quote-serif-right dblQ"></span>');
 //    $("#source").html(('~Wizard in the Audience'));
 //  	$("#quoteBox").scrollTop(0);
 	


});