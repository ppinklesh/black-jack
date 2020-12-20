//Creating a card we push suits and and values of that suits..
class cards
{
	constructor(suits,values)
	{
		this.suits = suits;
		this.cards = values;
	}
}

//Creating a deck which contain total 52 card in one deck
class Deck {
	constructor()
	{
		//Empty array of deck
		this.deck = [];
	}
}

//From here we start to creating a prototype of a function
	//Creating a Deck 
       Deck.prototype.createDeck = function(values){
		//for(var suit of suits){
			for(var value of values){

				//Passing a value in empty deck
				this.deck.push(value);
			}
		return this.deck;
	}

	//We start to shuffle over here
	Deck.prototype.shuffle = function(){
		let counter = this.deck.length,temp,i;
		while(counter)
		{

			//swapping of array element.
			i = Math.floor(Math.random() * counter--);
			temp = this.deck[counter];
			this.deck[counter] = this.deck[i];
			this.deck[i] = temp;
		}
		//returning a shuffle deck
		return this.deck;
	}

       //we create here a Dealer which Distribute there card to Player
	Deck.prototype.Deal = function()
	{

		let hand = [];
		while(hand.length < 2)
		{
			//console.log("Hello");
			hand.push(this.deck.pop());
		}
		//it will return a two card from end of deck
		return hand;
	}


	Deck.prototype.isWinner = function(){
		let u2_boolean = false;
		let u1_boolean = true;
		var u1_sum;
		var u2_sum;
		let u1 = [];
		let u2 = [];
		let show1 = [];
		let show2 = [];
		var boolean1 = false;
		var boolean2 = false;
		var result = false;
		const readline = require('readline');
		const r1 = readline.createInterface({
    			input: process.stdin,
    			output: process.stdout
		});

		r1.question("Enter your name " , (user1) => {
		console.log("-------------------")
		r1.question("Enter your name ", (user2) => {
		console.log("-------------------")
		console.log("Hello "+user1);
		console.log("-------------")
		console.log("Hello "+user2);
		console.log("");
		console.log("Let Start ");
		console.log("------------");
		console.log("Remember that to start a game you can use your Name or use 1 , 2 and so on...");
		r1.on('line', (ch) => {
  		 switch(ch){
			 case user1:
       			 case "1":
          			 //console.log(user1+" Chance !!");
				 let a = this.deck.pop();
				 show1.push(a);
				 if(a === 'Jeck' || a === 'Queen' || a === 'King' || a === 'Ace'){
					 u1.push(10);
				 }
				 else
				 {
					 u1.push(a);
				 }
				 console.log(show1);
				 if(u1.length === 3){
					 u1_boolean = true;
				 }
				 u1_sum = u1.reduce(function(a,b){
					return a+b;
				 });
				 console.log("");
				 console.log(user2+" chance !")

        		break;

			case user2:
        		case "2":

				 let a1 = this.deck.pop();
				 show2.push(a1);
				 if(a1 === 'Jeck' || a1 === 'Queen' || a1 === 'King' || a1 === 'Ace'){
					 u2.push(10);
				 }
				 else{
					 u2.push(a1);
				 }
				 console.log(show2)
				 if(u2.length === 3){
					 u2_boolean = true;
				 }
				 u2_sum = u2.reduce(function(a,b){
					return a+b;
				 });
				 console.log("");
				 console.log(user1+" chance !");
        		break;

			case "Result":
				 result = true;
			break;

        		case "exit":
        			console.log('exiting...');
        			process.exit(0); //or you can use r1.close()
        		break;
    		}		
			if(u1_boolean && u2_boolean && result){
				console.log("");
				console.log("-------------Winner ---------------")
				console.log("");
				console.log(user1+" Score ",u1_sum);
				console.log("");
				console.log("----------------------");
				console.log("");
				console.log(	user2+" Score ",u2_sum);
				console.log("");
				console.log("");
				if(u1_sum > u2_sum && u1_sum <= 21){
					console.log(user1+" is Winner");
				}
				else if(u2_sum > u1_sum && u2_sum <= 21){
					console.log(user2+"is Winner");
				}
				else if(u1_sum > 21 && u2_sum > 21){
					console.log("Rematch");
				}
				else if(u1_sum <= 21 && u2_sum > 21){
					console.log(user1+" is winner");
				}
				else if(u1_sum > 21 && u2_sum <= 21){
					console.log(user2+" is winner");
				}
				else{
					console.log("Rematch");
				}
			}
		});
		});
		});
		//console.log(u1_sum);
}



//let suits = ["Diamond","Hearts","Clubs","Shades"];
let values = [2,3,4,5,6,7,8,9,10,'Jeck','Queen','King','Ace'];
let deck = new Deck();
deck.createDeck(values);
deck.shuffle();
//console.log(deck.Deal());
deck.isWinner();


//console.log(deck.shuffle());
//let c = new cards(suits,values);
//console.log(c);
