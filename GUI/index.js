const button = document.querySelector('.Button');
const card = document.querySelectorAll('.box');
const dealer = document.querySelector('.dealer');
console.log(dealer);
const reset = document.querySelector('.reset');
const hit = document.querySelector(".hit");
var u1 = document.getElementById("user1");
let u2 = document.getElementById('user2');
let suits = ['Heart','Diamond','Aman','Rahul'];
let values = [2,3,4,5,6,7,8,9,'Jeck','Queen','King','Ace'];
let card1 = true;
let card2 = false;
class aman{
	constructor(){
		 this.deck = [];
	}
	createDeck(){
		for(const value of values){
			this.deck.push(value);
	 	}
		return this.deck;
	}
	displayCard(){
		let hand = [];
		let u1_array = [];
		let u2_array = [];
		let show1 = [];
		let show2 = [];
		let a;
		let u1_sum;
		let u2_sum;
		let u1_boolean = false;
		let u2_boolean = false;
		let user1_Name = prompt("Player1!! Please Enter your Name","Aman");
		let user2_Name  = prompt("Please!! Please Enter your Name","Rahul");
		hand.push(this.deck.pop());
		hit.addEventListener('click',function(){
			//hand.push(this.deck.pop());
			dealer.innerHTML = "Player1- "+user1_Name+" || Player2- "+user2_Name;
			for(const box of card)
			{
			console.log(box);
			//box.addEventListener('click',function(){
				dealer.classList.add("deal");
				if(card1 === true){
					card1 = false;
					//box.remove();
					u1.classList.add("user1_card1");
					a = hand.pop();
					show1.push(a);
					if(a === 'Jeck' || a === 'Queen' || a === 'King' || a === 'Ace'){
						u1_array.push(10);
					}
					else{
						u1_array.push(a);
					}
					u1.innerHTML = show1;
					card2 = true;
					u1_sum = u1_array.reduce(function(a,b){
						return a+b;
					});
					console.log("User1 ", u1_sum);
					if(u1_array.length === 3){
						u1_boolean = true;
					}
					//dealer.classList.add("deal");
					dealer.innerHTML = user2_Name+" Chance!!";
				}
				else{
					card2 = false;
					box.remove();
					u2.classList.add("user2_card1");
					a = hand.pop();
					show2.push(a);
					if(a === 'Jeck' || a === 'Queen' || a === 'King' || a === 'Ace'){
						u2_array.push(10);
					}
					else{
						u2_array.push(a);
					}
					u2.innerHTML = show2;
					card1 = true;
					u2_sum = u2_array.reduce(function(a,b){
						return a+b;
					});
					console.log("User2", u2_sum);
					if(u2_array.length === 3){
						u2_boolean = true;
					}
					dealer.innerHTML = user1_Name+" Chance !!";
				if(u1_boolean && u2_boolean){
				if(u1_sum > u2_sum && u1_sum <= 21){
					console.log("User1 is Winner");
					dealer.innerHTML = user1_Name+" Is Winner";
				}
				else if(u2_sum > u1_sum && u2_sum <= 21){
					console.log("User2 is Winner");
					dealer.innerHTML = user2_Name+" Is Winner";
				}
				else if(u1_sum > 21 && u2_sum > 21){
					console.log("Rematch");
					dealer.innerHTML = "Rematch";

				}
				else if(u1_sum <= 21 && u2_sum > 21){
					console.log("User1 is winner");
					dealer.innerHTML = user1_Name+" Is Winner";

				}
				else if(u1_sum > 21 && u2_sum <= 21){
					console.log("User2 is winner");
					dealer.innerHTML = user2_Name+" Is Winner";
				}
				else{
					console.log("Rematch");1
					dealer.innerHTML = "Rematch";
				}
				}
				}*/
				//});
			}
			});
			/*
		for(const box of card){

			hand.push(this.deck.pop());
			dealer.innerHTML = "Player1- "+user1_Name+" || Player2- "+user2_Name;
			box.addEventListener('click',function(){
				dealer.classList.add("deal");
				if(card1 === true){
					card1 = false;
					box.remove();
					u1.classList.add("user1_card1");
					a = hand.pop();
					show1.push(a);
					if(a === 'Jeck' || a === 'Queen' || a === 'King' || a === 'Ace'){
						u1_array.push(10);
					}
					else{
						u1_array.push(a);
					}
					u1.innerHTML = show1;
					card2 = true;
					u1_sum = u1_array.reduce(function(a,b){
						return a+b;
					});
					console.log("User1 ", u1_sum);
					if(u1_array.length === 3){
						u1_boolean = true;
					}
					//dealer.classList.add("deal");
					dealer.innerHTML = user2_Name+" Chance!!";
				}
				else{
					card2 = false;
					box.remove();
					u2.classList.add("user2_card1");
					a = hand.pop();
					show2.push(a);
					if(a === 'Jeck' || a === 'Queen' || a === 'King' || a === 'Ace'){
						u2_array.push(10);
					}
					else{
						u2_array.push(a);
					}
					u2.innerHTML = show2;
					card1 = true;
					u2_sum = u2_array.reduce(function(a,b){
						return a+b;
					});
					console.log("User2", u2_sum);
					if(u2_array.length === 3){
						u2_boolean = true;
					}
					dealer.innerHTML = user1_Name+" Chance !!";
				if(u1_boolean && u2_boolean){
				if(u1_sum > u2_sum && u1_sum <= 21){
					console.log("User1 is Winner");
					dealer.innerHTML = user1_Name+" Is Winner";
				}
				else if(u2_sum > u1_sum && u2_sum <= 21){
					console.log("User2 is Winner");
					dealer.innerHTML = user2_Name+" Is Winner";
				}
				else if(u1_sum > 21 && u2_sum > 21){
					console.log("Rematch");
					dealer.innerHTML = "Rematch";

				}
				else if(u1_sum <= 21 && u2_sum > 21){
					console.log("User1 is winner");
					dealer.innerHTML = user1_Name+" Is Winner";

				}
				else if(u1_sum > 21 && u2_sum <= 21){
					console.log("User2 is winner");
					dealer.innerHTML = user2_Name+" Is Winner";
				}
				else{
					console.log("Rematch");1
					dealer.innerHTML = "Rematch";
				}
				}
				}
			});
			button.addEventListener('click',function(){
				dealer.innerHTML = user1_Name+" Chance!!";
			});
			reset.addEventListener('click',function(){
				if(confirm("Are you sure!! You want to play Again")){
					location.reload();
				}
			});
		}*/
		};
	shuffle(){
		let counter = this.deck.length,temp,i;
		while(counter){
			i=Math.floor(Math.random() * counter--);
			temp = this.deck[counter];
			this.deck[counter] = this.deck[i];
			this.deck[i] = temp;
		}
		return this.deck;
	}
	/*
	Deal(){
		let hand = [];
		while(hand.length<2){
			hand.push(this.deck.pop());
		}
		console.log(hand);
	}*/
}
var a = new aman();
a.createDeck();
a.shuffle();
//a.Deal();
a.displayCard();
//a.Deal();
