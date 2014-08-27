// YELLING ABOUT SPORTS

var sportsApp = {};

sportsApp.key = "ak5wszy8vyct8hfpjcuu2yj8";

sportsApp.init = function() {
	$('form').on('submit', function(event) {
      	event.preventDefault();
      	if ($('#sport').val() == "baseball") {
      		sportsApp.getInfoBaseball();
      	} else if ($('#sport').val() == "basketball"){
 			sportsApp.getInfoBasketball();     		
      	} else if ($('#sport').val() == "football"){
 			sportsApp.getInfoFootball();     		
      	} else if ($('#sport').val() == "hockey"){
 			sportsApp.getInfoHockey();     		
      	};

	});
}
sportsApp.getInfoBaseball = function() {
	$.ajax({
	    url: 'http://api.espn.com/v1/sports/baseball/mlb/teams',
	    type: 'GET',
	    data: {
	    	apikey: sportsApp.key,
	    	format: 'json',
	    },
	    dataType: 'jsonp',
	    success: function(data){
	    	var mlbTeams = data.sports[0].leagues[0].teams;
	    	var mlbNortheast = [
	    		mlbTeams[0], // Baltimore Orioles
	    		mlbTeams[1], // Boston Red Sox
	    		mlbTeams[9], // New York Yankees
	    		mlbTeams[13], //...and Canada (Toronto Blue Jays)
	    		mlbTeams[19], // Washington Nationals
	    		mlbTeams[20], // New York Mets
	    		mlbTeams[21] // Phillies (Philadelphia)
	    		];
	    	var mlbNorthwest = [
	    		mlbTeams[11], // Seattle Mariners
	    		mlbTeams[26] // Colorado Rockies (Denver)
	    	];
	    	var mlbSoutheast = [
	    		mlbTeams[14], // Atlanta Braves
	    		mlbTeams[27], // Miami Marlins
	    		mlbTeams[29] // Tampa Bay Rays
	    	];
	    	var mlbSouthwest = [
	    		mlbTeams[2], // Los Angeles Angels
	    		mlbTeams[10], // Oakland Athletics
	    		mlbTeams[12], // Texas Rangers
	    		mlbTeams[17], // Houston Astros	 
	    		mlbTeams[18], // Los Angeles Dodgers   		
	    		mlbTeams[24], // San Diego Padres
	    		mlbTeams[25], // San Francisco Giants
	    		mlbTeams[28] // Arizona Diamondbacks

	    	];
	    	var mlbMidwest = [
	    		mlbTeams[3], // Chicago White Sox
	    		mlbTeams[4], // Cleveland Indians
	    		mlbTeams[5], // Detroit Tigers
	    		mlbTeams[6], // Kansas City Royals
	    		mlbTeams[8], // Minnesota Twins
	    		mlbTeams[15], // Chicago Cubs
	    		mlbTeams[16], // Cincinnati Reds
	    		mlbTeams[7], // Milwaukee Brewers
	    		mlbTeams[22], // Pittsburgh Pirates
	    		mlbTeams[23] // St. Louis Cardinals
	    	];
	    	
	    	$('form').on('submit', function(event) {
    			event.preventDefault();

	   		if ($('#city').val() == "MW") {
	    		var team = mlbMidwest[Math.floor(mlbMidwest.length * Math.random())].name; // Has to happen on event trigger otherwise it only generates once.
				var place = mlbMidwest[Math.floor(mlbMidwest.length * Math.random())].location;
	    		} else if ($('#city').val() == "NY" || $('#city').val() == "NE" || $('#city').val() == "DC" || $('#city').val() == "TO" || $('#city').val() == "MTL" || $('#city').val() == "CAN" || $('#city').val() == "DQ") {
     				var team = mlbNortheast[Math.floor(mlbNortheast.length * Math.random())].name; 
					var place = mlbNortheast[Math.floor(mlbNortheast.length * Math.random())].location;
	    		} else if ($('#city').val() == "CALI" || $('#city').val() == "TX") {
	    			var team = mlbSouthwest[Math.floor(mlbSouthwest.length * Math.random())].name; 
					var place = mlbSouthwest[Math.floor(mlbSouthwest.length * Math.random())].location;
		    	} else if ($('#city').val() == "DS" || $('#city').val() == "SE") {
	    			var team = mlbSoutheast[Math.floor(mlbSoutheast.length * Math.random())].name; 
					var place = mlbSoutheast[Math.floor(mlbSoutheast.length * Math.random())].location;
		    	} else {
		    		var team = mlbNorthwest[Math.floor(mlbNorthwest.length * Math.random())].name; 
					var place = mlbNorthwest[Math.floor(mlbNorthwest.length * Math.random())].location;
	    		};
	    		
	    	var highWeepySentence = [
				zero = ["Did you hear that the " + team + " pooped in some guy's shower after their game in " + place + "? Hey, let's go to McDonald's."], // This took me fucking forever to figure out. I am dumb. 
				one = ["I heard the " + team + " died in " + place + " in 1972 and now they're all secretly ghosts."],
				two = ["Do you think the " + team + " ever eat pancakes together? I think it would be so sad if they never ate pancakes together."],
				three = ["They say it was crazy of the " + team + " to run naked in a loop around the entire geographical area of " + place + ", but 'crazy' is so subjective."],
				four = ["That ball looks like a soaring eagle. All the " + team + " are like beautiful soaring eagles. But everything that rises must fall."]
			];
			var smugPensiveSentence = [
				zero = ["According to three peer-reviewed studies, everyone playing for the " + team + " has been injecting steroids. Steroids are bad for you. I read that in another peer-reviewed study."],
				one = ["I can't believe the National League still doesn't allow designated hitters. It's obviously why the " + team + " lost the game last night."],
				two = ["I know the " + team + " won last night but I just feel so much better when I'm doing yoga."],					
				three = ["Oh, I couldn't make it to the " + team + " game in " + place + ". I was DJing at Monsterkabinett in Berlin. Martha Stewart was there."],
				four = ["The " + team + " would never be playing New York-style baseball if it weren't for the Civil War."],
				five = ["I think the " + team + " game yesterday was fixed. It was like the dead-ball era all over again."],
				six = ["I know baseball experts consider their team owner to be perhaps the most influential owner in MLB history, but that should have no bearing on whether the " + team + " win in " + place + " tomorrow."],
				seven = ["The " + team + " should really invest in better artificial turf. It's throwing off their game."],
				eight = ["Well of course we won. The " + team + " ALWAYS win. Would you like a sip of my rare, single malt Macallan? It was bottled in 1910. It's spicy AND silky."],
				nine = ["I'm looking forward to the " + team + " game tomorrow. A pitching revolution would not be unprecedented."],
				ten = ["It was just dreadful to se the " + team + " lose yesterday. You know their pitcher chose to retire rather than face a 100-game suspension for his second positive steroid test, and I don't think they've recovered emotionally."]
			];
			var indignantSentence = [
				zero = ["Fuck that ump. He was obviously biased towards the " + team +"."],
				one = ["Did the " + team + " intentionally desecrate the " + team + " logo? That's some next-level meta shit."],
				two = ["The " + team + " are a disgrace to this and every city. They're a disgrace to the sport itself."],
				three = ["The " + team + " would have won if " + place + " wasn't such a miserable fucking city for sporting events."],
				four = ["Did you see the " + team + " game? What a fucked up call. I watched the slow-mo replay six times."],
				five = ["The " + team + " are being completely unreasonable in their demands for a post-deadline trade. It's like everyone from " + place + " was raised in a barn."]
			];
			var stokedSentence = [
				zero = ["Bro, I am so fucking stoked that the " + team + " won yesterday."],
				one = ["Bro, I am so fucking stoked that the " + team + " lost yesterday."],
				two = ["Bro, I am so fucking stoked that the " + team + " are playing the " + team + " in " + place + " on Sunday."],
				three = ["Bro, I am so fucking stoked that you live in " + place + " and love the " + team + ". I do too, bro. I do too."],
				three = ["Bro, the " + team + " cheerleaders are really, really hot."]
			];

				var cryify = highWeepySentence[Math.floor(highWeepySentence.length * Math.random())];
				var smuggify = smugPensiveSentence[Math.floor(smugPensiveSentence.length * Math.random())];
				var mad = indignantSentence[Math.floor(indignantSentence.length * Math.random())];
				var yaBro = stokedSentence[Math.floor(stokedSentence.length * Math.random())];

      			if ($('#sport').val() == "baseball" && 
      				$('#emotion').val() == "smug" || 
      				$('#emotion').val() == "pensive") {
      					$('#yellHere p').text(smuggify);
      			} else if ($('#sport').val() == "baseball" && 
      				$('#emotion').val() == "high" || 
      				$('#emotion').val() == "weepy") {
      					$('#yellHere p').text(cryify);
      			} else if ($('#sport').val() == "baseball" && 
      				$('#emotion').val() == "mad") {
      					$('#yellHere p').text(mad);
      			} else if ($('#sport').val() == "baseball" && 
      				$('#emotion').val() == "stoked") {
      					$('#yellHere p').text(yaBro);
      			} else {
 //     				$('#yellHere p').text("");
      			};

    		}); // End submit event
	    } //End success actions. 100% sure I'm not supposed to make everything happen in here, but I can't figure out how the fuck else to do it.

 	}); // End of AJAX request...
}; // End of baseball thinger

sportsApp.getInfoBasketball = function() {
	$.ajax({
	    url: 'http://api.espn.com/v1/sports/basketball/nba/teams',
	    type: 'GET',
	    data: {
	    	apikey: sportsApp.key,
	    	format: 'json',
	    },
	    dataType: 'jsonp',
	    success: function(data){
	    	var nbaTeams = data.sports[0].leagues[0].teams;
	    	var nbaNortheast = [
	    		nbaTeams[1], // Boston Celtics
	    		nbaTeams[16], // Brooklyn Nets
	    		nbaTeams[17], // New York Knicks
	    		nbaTeams[19], // Philadelphia 76ers
	    		nbaTeams[27] // Toronto Raptors
	    	];
	    	var nbaNorthwest = [
	    		nbaTeams[6], // Denver Nuggets
	    		nbaTeams[15], // Minnesota Timberwolves
	    		nbaTeams[24], // Oklahoma City Thunder
	    		nbaTeams[21], // Portland Trail Blazers
	    		nbaTeams[25] // Utah Jazz
	    	];
	    	var nbaSoutheast = [
	    		nbaTeams[0], // Atlanta Hawks
	    		nbaTeams[29], // Charlotte Hornets
	    		nbaTeams[13], // Miami Heat
	    		nbaTeams[18], // Orlando Magic
	    		nbaTeams[26] // Washington Wizards (D.C.)
	    	];
	    	var nbaPacific = [
	    		nbaTeams[8], // Golden State Warriors (Oakland, CA)
	    		nbaTeams[11], // Los Angeles Clippers
	    		nbaTeams[12], // Los Angeles Lakers
	    		nbaTeams[20], // Phoenix Suns (AZ)
	    		nbaTeams[22] // Sacramento Kings (CA)
	    	];
	    	var nbaSouth = [
	    		nbaTeams[5], // Dallas Mavericks
	    		nbaTeams[9], // Houston Rockets
	    		nbaTeams[28], // Memphis Grizzlies
	    		nbaTeams[2], // New Orleans Pelicans
	    		nbaTeams[23] // San Antonio Spurs
	    	];
	    	var nbaMidwest = [
	    		nbaTeams[3], // Chicago Bulls
	    		nbaTeams[4], // Cleveland Cavaliers
	    		nbaTeams[7], // Detroit Pistons
	    		nbaTeams[10], // Indiana Pacers
	    		nbaTeams[14] // Milwaukee Bucks
	    	];
	    
	    	$('form').on('submit', function(event) {
      			event.preventDefault();

	   		if ($('#city').val() == "MW") {
	    		var team = nbaMidwest[Math.floor(nbaMidwest.length * Math.random())].name; // Has to happen on event trigger otherwise it only generates once.
				var place = nbaMidwest[Math.floor(nbaMidwest.length * Math.random())].location;
	    		} else if ($('#city').val() == "NY" || $('#city').val() == "NE" || $('#city').val() == "DC" || $('#city').val() == "TO" || $('#city').val() == "MTL" || $('#city').val() == "CAN" || $('#city').val() == "DQ") {
     				var team = nbaNortheast[Math.floor(nbaNortheast.length * Math.random())].name; 
					var place = nbaNortheast[Math.floor(nbaNortheast.length * Math.random())].location;
	    		} else if ($('#city').val() == "CALI") {
	    			var team = nbaPacific[Math.floor(nbaPacific.length * Math.random())].name; 
					var place = nbaPacific[Math.floor(nbaPacific.length * Math.random())].location;
		    	} else if ($('#city').val() == "SE") {
	    			var team = nbaSoutheast[Math.floor(nbaSoutheast.length * Math.random())].name; 
					var place = nbaSoutheast[Math.floor(nbaSoutheast.length * Math.random())].location;
		    	} else if ($('#city').val() == "DS" || $('#city').val() == "TX") {
	    			var team = nbaSouth[Math.floor(nbaSouth.length * Math.random())].name; 
					var place = nbaSouth[Math.floor(nbaSouth.length * Math.random())].location;
		    	} else {
		    		var team = nbaNorthwest[Math.floor(nbaNorthwest.length * Math.random())].name; 
					var place = nbaNorthwest[Math.floor(nbaNorthwest.length * Math.random())].location;
	    		};
	    		
	    	var highWeepySentence = [
				zero = ["Did you hear that the " + team + " pooped in some guy's shower after their game in " + place + "? Hey, let's go to McDonald's."], // This took me fucking forever to figure out. I am dumb. 
				one = ["I heard the " + team + " died in " + place + " in 1972 and now they're all secretly ghosts."],
				two = ["Do you think the " + team + " ever eat pancakes together? I think it would be so sad if they never ate pancakes together."],
				three = ["They say it was crazy of the " + team + " to run naked in a loop around the entire geographical area of " + place + ", but 'crazy' is so subjective."],
				four = ["That ball looks like a soaring eagle. All the " + team + " are like beautiful soaring eagles. But everything that rises must fall."]
			];
			var smugPensiveSentence = [
				zero = ["According to three peer-reviewed studies, everyone playing for the " + team + " has been drinking Go-Go Juice. Go-Go Juice is bad for you. I read that in another peer-reviewed study."],
				one = ["I can't believe the NBA still doesn't allow pajama parties. It's obviously why the " + team + " lost the game last night."],
				two = ["I know the " + team + " won last night but I just feel so much better when I'm doing yoga."],					
				three = ["Oh, I couldn't make it to the " + team + " game in " + place + ". I was DJing at Monsterkabinett in Berlin. Martha Stewart was there."],
				four = ["The " + team + " would never be playing New York-style basketball if it weren't for the Civil War."],
				five = ["I think the " + team + " game yesterday was fixed. It was like Aliens 2 all over again."],
				six = ["I know basketball experts consider peaches to be perhaps the most important fruit in NBA history, but that should have no bearing on whether the " + team + " win in " + place + " tomorrow."],
				seven = ["The " + team + " should really invest in better showtune soundtracks to play in the " + place + " arena. It's throwing off their game."],
				eight = ["Well of course we won. The " + team + " ALWAYS win. Would you like a sip of my rare, single malt Macallan? It was bottled in 1910. It's spicy AND silky."],
				nine = ["I'm looking forward to the " + team + " game tomorrow. A clawing, hair-pulling revolution would not be unprecedented."],
				ten = ["It was just dreadful to se the " + team + " lose yesterday. You know their point guard chose to retire rather than face a 100-game suspension for his insistence on keeping a small wheel of brie in his pocket, and I don't think they've recovered emotionally."]
			];
			var indignantSentence = [
				zero = ["Fuck that ref. He was obviously biased towards the " + team +"."],
				one = ["Did the " + team + " intentionally desecrate the " + team + " logo? That's some next-level meta shit."],
				two = ["The " + team + " are a disgrace to this and every city. They're a disgrace to the sport itself."],
				three = ["The " + team + " would have won if " + place + " wasn't such a miserable fucking city for sporting events."],
				four = ["Did you see the " + team + " game? What a fucked up call. I watched the slow-mo replay six times."],
				five = ["The " + team + " are being completely unreasonable in their demands for a post-deadline trade. It's like everyone from " + place + " was raised in a barn."]
			];
			var stokedSentence = [
				zero = ["Bro, I am so fucking stoked that the " + team + " won yesterday."],
				one = ["Bro, I am so fucking stoked that the " + team + " lost yesterday."],
				two = ["Bro, I am so fucking stoked that the " + team + " are playing the " + team + " in " + place + " on Sunday."],
				three = ["Bro, I am so fucking stoked that you live in " + place + " and love the " + team + ". I do too, bro. I do too."],
				three = ["Bro, the " + team + " cheerleaders are really, really hot."]
			];

				var cryify = highWeepySentence[Math.floor(highWeepySentence.length * Math.random())];
				var smuggify = smugPensiveSentence[Math.floor(smugPensiveSentence.length * Math.random())];
				var mad = indignantSentence[Math.floor(indignantSentence.length * Math.random())];
				var yaBro = stokedSentence[Math.floor(stokedSentence.length * Math.random())];

      			if ($('#emotion').val() == "smug" || 
      				$('#emotion').val() == "pensive") {
      					$('#yellHere p').text(smuggify);
      			} else if ($('#emotion').val() == "high" || 
      				$('#emotion').val() == "weepy") {
      					$('#yellHere p').text(cryify);
      			} else if ($('#emotion').val() == "mad") {
      					$('#yellHere p').text(mad);
      			} else if ($('#emotion').val() == "stoked") {
      					$('#yellHere p').text(yaBro);
      			} else {
 //     				$('#yellHere').html("");
      			};

      		}); // End form submit event
	    } // End success function
 	}); // End AJAX request
}; // End basketball stuff

sportsApp.getInfoFootball = function() {
	$.ajax({
	    url: 'http://api.espn.com/v1/sports/football/nfl/teams',
	    type: 'GET',
	    data: {
	    	apikey: sportsApp.key,
	    	format: 'json',
	    },
	    dataType: 'jsonp',
	    success: function(data){
	    	var nflTeams = data.sports[0].leagues[0].teams;
	    	var nflNortheast = [
	    		nflTeams[1], // Buffalo Bills
	    		nflTeams[16], // New England Patriots
	    		nflTeams[18], // New York Giants
	    		nflTeams[19], // New York Jets
	    		nflTeams[22], // Pittsburgh Steelers
	    		nflTeams[30] // Baltimore Ravens
	    	];
	    	var nflWest = [
	    		nflTeams[6], // Denver Broncos
	    		nflTeams[12], // Oakland Raiders
				nflTeams[21], // Arizona Cardinals
	    		nflTeams[23], // San Diego Chargers
	    		nflTeams[24], // San Francisco 49ers
	    		nflTeams[25], // Seattle Seahawks
	    		nflTeams[27] // Washington Redskins
	    	];
	    	var nflSouth = [
	    		nflTeams[14], // Miami Dolphins
	    		nflTeams[26], // Tampa Bay Buccaneers
				nflTeams[28], // Carolina Panthers
	    		nflTeams[29], // Jacksonville Jaguars
				nflTeams[0], // Atlanta Falcons
	    		nflTeams[5], // Dallas Cowboys
	    		nflTeams[31], // Houston Texans
	    		nflTeams[17], // New Orleans Saints
	    		nflTeams[9] // Tennessee Titans
	    	];
	    	var nflMidwest = [
				nflTeams[2], // Chicago Bears
	    		nflTeams[3], // Cincinnati Bengals
	    		nflTeams[4], // Cleveland Browns
	    		nflTeams[7], // Detroit Lions
	    		nflTeams[8], // Green Bay Packers (Wisconsin)
	    		nflTeams[10], // Indianapolis Colts
	    		nflTeams[11], // Kansas City Chiefs (Missouri)
	    		nflTeams[15], // Minnesota Vikings
	    		nflTeams[13], // St. Louis Rams
	    	];

	    	$('form').on('submit', function(event) {
      			event.preventDefault();

	   		if ($('#city').val() == "MW") {
	    		var team = nflMidwest[Math.floor(nflMidwest.length * Math.random())].name; // Has to happen on event trigger otherwise it only generates once.
				var place = nflMidwest[Math.floor(nflMidwest.length * Math.random())].location;
	    		} else if ($('#city').val() == "NY" || $('#city').val() == "NE" || $('#city').val() == "DC" || $('#city').val() == "TO" || $('#city').val() == "MTL" || $('#city').val() == "CAN" || $('#city').val() == "DQ") {
     				var team = nflNortheast[Math.floor(nflNortheast.length * Math.random())].name; 
					var place = nflNortheast[Math.floor(nflNortheast.length * Math.random())].location;
		    	} else if ($('#city').val() == "DS" || $('#city').val() == "TX" || $('#city').val() == "SE") {
	    			var team = nflSouth[Math.floor(nflSouth.length * Math.random())].name; 
					var place = nflSouth[Math.floor(nflSouth.length * Math.random())].location;
		    	} else {
		    		var team = nflWest[Math.floor(nflWest.length * Math.random())].name; 
					var place = nflWest[Math.floor(nflWest.length * Math.random())].location;
	    		};
	    		
	    	var highWeepySentence = [
				zero = ["Did you hear that the " + team + " pooped in some guy's shower after their game in " + place + "? Hey, let's go to McDonald's."], // This took me fucking forever to figure out. I am dumb. 
				one = ["I heard the " + team + " died in " + place + " in 1972 and now they're all secretly ghosts."],
				two = ["Do you think the " + team + " ever eat pancakes together? I think it would be so sad if they never ate pancakes together."],
				three = ["They say it was crazy of the " + team + " to run naked in a loop around the entire geographical area of " + place + ", but 'crazy' is so subjective."],
				four = ["That ball looks like a soaring eagle. All the " + team + " are like beautiful soaring eagles. But everything that rises must fall."]
			];
			var smugPensiveSentence = [
				zero = ["According to three peer-reviewed studies, everyone playing for the " + team + " has been drinking Go-Go Juice. Go-Go Juice is bad for you. I read that in another peer-reviewed study."],
				one = ["I can't believe the NFL still doesn't allow pajama parties. It's obviously why the " + team + " lost the game last night."],
				two = ["I know the " + team + " won last night but I just feel so much better when I'm doing yoga."],					
				three = ["Oh, I couldn't make it to the " + team + " game in " + place + ". I was DJing at Monsterkabinett in Berlin. Martha Stewart was there."],
				four = ["The " + team + " would never be playing New York-style football if it weren't for the Civil War."],
				five = ["I think the " + team + " game yesterday was fixed. It was like Aliens 2 all over again."],
				six = ["I know football experts consider spoons to be perhaps the most influential utensil in NFL history, but that should have no bearing on whether the " + team + " win in " + place + " tomorrow."],
				seven = ["The " + team + " should really invest in better showtune soundtracks to play in the " + place + " arena. It's throwing off their game."],
				eight = ["Well of course we won. The " + team + " ALWAYS win. Would you like a sip of my rare, single malt Macallan? It was bottled in 1910. It's spicy AND silky."],
				nine = ["I'm looking forward to the " + team + " game tomorrow. A clawing, hair-pulling revolution would not be unprecedented."],
				ten = ["It was just dreadful to se the " + team + " lose yesterday. You know their quarterback chose to retire rather than face a 100-game suspension for his insistence on keeping a small wheel of brie in his pocket, and I don't think they've recovered emotionally."]
			];
			var indignantSentence = [
				zero = ["Fuck that ref. He was obviously biased towards the " + team +"."],
				one = ["Did the " + team + " intentionally desecrate the " + team + " logo? That's some next-level meta shit."],
				two = ["The " + team + " are a disgrace to this and every city. They're a disgrace to the sport itself."],
				three = ["The " + team + " would have won if " + place + " wasn't such a miserable fucking city for sporting events."],
				four = ["Did you see the " + team + " game? What a fucked up call. I watched the slow-mo replay six times."],
				five = ["The " + team + " are being completely unreasonable in their demands for a post-deadline trade. It's like everyone from " + place + " was raised in a barn."]
			];
			var stokedSentence = [
				zero = ["Bro, I am so fucking stoked that the " + team + " won yesterday."],
				one = ["Bro, I am so fucking stoked that the " + team + " lost yesterday."],
				two = ["Bro, I am so fucking stoked that the " + team + " are playing the " + team + " in " + place + " on Sunday."],
				three = ["Bro, I am so fucking stoked that you live in " + place + " and love the " + team + ". I do too, bro. I do too."],
				three = ["Bro, the " + team + " cheerleaders are really, really hot."]
			];

				var cryify = highWeepySentence[Math.floor(highWeepySentence.length * Math.random())];
				var smuggify = smugPensiveSentence[Math.floor(smugPensiveSentence.length * Math.random())];
				var mad = indignantSentence[Math.floor(indignantSentence.length * Math.random())];
				var yaBro = stokedSentence[Math.floor(stokedSentence.length * Math.random())];

      			if ($('#emotion').val() == "smug" || 
      				$('#emotion').val() == "pensive") {
      					$('#yellHere p').text(smuggify);
      			} else if ($('#emotion').val() == "high" || 
      				$('#emotion').val() == "weepy") {
      					$('#yellHere p').text(cryify);
      			} else if ($('#emotion').val() == "mad") {
      					$('#yellHere p').text(mad);
      			} else if ($('#emotion').val() == "stoked") {
      					$('#yellHere p').text(yaBro);
      			} else {
 //     				$('#yellHere').html("");
      			};

      		});
	    } // End success function
 	}); // End AJAX request
}; // End football stuff


sportsApp.getInfoHockey = function() {
	$.ajax({
	    url: 'http://api.espn.com/v1/sports/hockey/nhl/teams',
	    type: 'GET',
	    data: {
	    	apikey: sportsApp.key,
	    	format: 'json',
	    },
	    dataType: 'jsonp',
	    success: function(data){
	    	var nhlTeams = data.sports[0].leagues[0].teams;
	    	var nhlNorth = [
	    		nhlTeams[0], // Boston Bruins
	    		nhlTeams[1], // Buffalo Sabres
	    		nhlTeams[2], // Calgary Flames
	    		nhlTeams[5], // Edmonton Oilers
	    		nhlTeams[9], // Montreal Canadiens
	    		nhlTeams[10], // New Jersey Devils
	    		nhlTeams[11], // New York Islanders
	    		nhlTeams[12], // New York Rangers
	    		nhlTeams[13], // Ottawa Senators
	    		nhlTeams[20], // Toronto Maple Leafs
		    	nhlTeams[21], // Vancouver Canucks
		    	nhlTeams[27] // Winnipeg Jets
	    	];
	    	var nhlMidwest = [
	    		nhlTeams[3], // Chicago Blackhawks
	    		nhlTeams[4], // Detroit Red Wings
	    		nhlTeams[14], // Philadelphia Flyers
	    		nhlTeams[15], // Pittsburgh Penguins
	    		nhlTeams[16], // Colorado Avalanche
	    		nhlTeams[18], // St. Louis Blues
	    		nhlTeams[28], // Columbus Blue Jackets
	    		nhlTeams[29] // Minnesota Wild
	    	];
	    	var nhlSoutheast = [
		    	nhlTeams[6], // Carolina Hurricanes
		    	nhlTeams[19], // Tampa Bay Lightning
		    	nhlTeams[22], // Washington Capitals
		    	nhlTeams[25], // Florida Panthers
		    	nhlTeams[26] // Nashville Predators
	    	];
	    	var nhlSouthwest = [
		    	nhlTeams[7], // Los Angeles Kings
		    	nhlTeams[8], // Dallas Stars	
		    	nhlTeams[17], // San Jose Sharks	
	    		nhlTeams[23], // Arizona Coyotes
		    	nhlTeams[24] // Anaheim Ducks
	    	];

	    	$('form').on('submit', function(event) {
      			event.preventDefault();

	   		if ($('#city').val() == "MW") {
	    		var team = nhlMidwest[Math.floor(nhlMidwest.length * Math.random())].name; // Has to happen on event trigger otherwise it only generates once.
				var place = nhlMidwest[Math.floor(nhlMidwest.length * Math.random())].location;
	    		} else if ($('#city').val() == "NY" || $('#city').val() == "NE" || $('#city').val() == "DC" || $('#city').val() == "TO" || $('#city').val() == "MTL" || $('#city').val() == "CAN" || $('#city').val() == "DQ") {
     				var team = nhlNorth[Math.floor(nhlNorth.length * Math.random())].name; 
					var place = nhlNorth[Math.floor(nhlNorth.length * Math.random())].location;
		    	} else if ($('#city').val() == "DS" || $('#city').val() == "SE") {
	    			var team = nhlSoutheast[Math.floor(nhlSoutheast.length * Math.random())].name; 
					var place = nhlSoutheast[Math.floor(nhlSoutheast.length * Math.random())].location;
		    	} else {
		    		var team = nhlSouthwest[Math.floor(nhlSouthwest.length * Math.random())].name; 
					var place = nhlSouthwest[Math.floor(nhlSouthwest.length * Math.random())].location;
	    		};
	    		
	    	var highWeepySentence = [
				zero = ["Did you hear that the " + team + " pooped in some guy's shower after their game in " + place + "? Hey, let's go to McDonald's."], // This took me fucking forever to figure out. I am dumb. 
				one = ["I heard the " + team + " died in " + place + " in 1972 and now they're all secretly ghosts."],
				two = ["Do you think the " + team + " ever eat pancakes together? I think it would be so sad if they never ate pancakes together."],
				three = ["They say it was crazy of the " + team + " to run naked in a loop around the entire geographical area of " + place + ", but 'crazy' is so subjective."],
				four = ["That puck looks like a swooping salmon. All the " + team + " are like beautiful moose. But everything that-- A fish filet. That's what I want! I want a fish filet."]
			];
			var smugPensiveSentence = [
				zero = ["According to three peer-reviewed studies, everyone playing for the " + team + " has been drinking Go-Go Juice. Go-Go Juice is bad for you. I read that in another peer-reviewed study."],
				one = ["I can't believe the NFL still doesn't allow pajama parties. It's obviously why the " + team + " lost the game last night."],
				two = ["I know the " + team + " won last night but I just feel so much better when I'm doing yoga."],					
				three = ["Oh, I couldn't make it to the " + team + " game in " + place + ". I was DJing at Monsterkabinett in Berlin. Martha Stewart was there."],
				four = ["The " + team + " would never be playing New York-style basketball if it weren't for the Civil War."],
				five = ["I think the " + team + " game yesterday was fixed. It was like Aliens 2 all over again."],
				six = ["I know football experts consider spoons to be perhaps the most influential utensil in NFL history, but that should have no bearing on whether the " + team + " win in " + place + " tomorrow."],
				seven = ["The " + team + " should really invest in better showtune soundtracks to play in the " + place + " arena. It's throwing off their game."],
				eight = ["Well of course we won. The " + team + " ALWAYS win. Would you like a sip of my rare, single malt Macallan? It was bottled in 1910. It's spicy AND silky."],
				nine = ["I'm looking forward to the " + team + " game tomorrow. A clawing, hair-pulling revolution would not be unprecedented."],
				ten = ["It was just dreadful to se the " + team + " lose yesterday. You know their goalie chose to retire rather than face a 100-game suspension for always insulting people's moms."]
			];
			var indignantSentence = [
				zero = ["Fuck that ref. He was obviously biased towards the " + team +"."],
				one = ["Did the " + team + " intentionally desecrate the " + team + " logo? That's some next-level meta shit."],
				two = ["The " + team + " are a disgrace to this and every city. They're a disgrace to the sport itself."],
				three = ["The " + team + " would have won if " + place + " wasn't such a miserable fucking city for sporting events."],
				four = ["Did you see the " + team + " game? What a fucked up call. I watched the slow-mo replay six times and it was NOT offside."],
				five = ["The " + team + " are being completely unreasonable in their demands for a post-deadline trade. It's like everyone from " + place + " was raised in a barn."]
			];
			var stokedSentence = [
				zero = ["Bro, I am so fucking stoked that the " + team + " won yesterday."],
				one = ["Bro, I am so fucking stoked that the " + team + " lost yesterday."],
				two = ["Bro, I am so fucking stoked that the " + team + " are playing the " + team + " in " + place + " on Sunday."],
				three = ["Bro, I am so fucking stoked that you live in " + place + " and love the " + team + ". I do too, bro. I do too."],
				three = ["Bro, the " + team + " cheerleaders are really, really cold."]
			];

				var cryify = highWeepySentence[Math.floor(highWeepySentence.length * Math.random())];
				var smuggify = smugPensiveSentence[Math.floor(smugPensiveSentence.length * Math.random())];
				var mad = indignantSentence[Math.floor(indignantSentence.length * Math.random())];
				var yaBro = stokedSentence[Math.floor(stokedSentence.length * Math.random())];

      			if ($('#emotion').val() == "smug" || 
      				$('#emotion').val() == "pensive") {
      					$('#yellHere p').text(smuggify);
      			} else if ($('#emotion').val() == "high" || 
      				$('#emotion').val() == "weepy") {
      					$('#yellHere p').text(cryify);
      			} else if ($('#emotion').val() == "mad") {
      					$('#yellHere p').text(mad);
      			} else if ($('#emotion').val() == "stoked") {
      					$('#yellHere p').text(yaBro);
      			} else {
 //     				$('#yellHere').html("");
      			};

      		});
	    } // End success function
 	}); // End AJAX request
}; // End hockey stuff

$(function() {
	sportsApp.init();
});
