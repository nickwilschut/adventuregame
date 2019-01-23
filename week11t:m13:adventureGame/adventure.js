document.getElementsByTagName('body')[0].setAttribute('style', 'background-color:black');

var description = document.getElementById('description');

var title = document.getElementById('title');
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var img = document.getElementById('inventoryItem');
var image

var dagger = false;
var bow = false;
var longsword = false;

function weaponsFalse(){
	image.style.display = "none";
}

	
function settext(button1,button2,button3){
	if(button1 != null){
		btn1.style.display = "inline";
		btn1.innerHTML = button1;
	}else{
		btn1.style.display = "none";
	}
	if(button2 != null){
		btn2.style.display = "inline";
		btn2.innerHTML = button2;
	}else{
		btn2.style.display = "none";
	}

	if(button3 != null){
		btn3.style.display = "inline";
	btn3.innerHTML = button3;
	}else{
		btn3.style.display = "none";
	}
}

function beginscreen(){
	settext('Press to start', null, null);
	img.src = 'Wallpapers/adventuregameWallPaper1.png'
	btn1.onclick = startGame;
	weaponsFalse();
	

}
beginscreen();

function startGame(){

	settext("Take a look at the mountain", "Stay where you are", "Go back")
	img.src = 'Wallpapers/adventuregameWallPaper2.png'
	btn1.onclick = checkCave;
	btn2.onclick = gameOver;
	
	btn3.onclick = beginscreen;

	alert("You wake up at your little camp, and you see a mountain, now you have two options. Option 1 = go towards the mountain. Option 2 = stay at your camp")
}


function checkCave(){

	settext("Take a look at the the cave", "Go back", null)
	img.src = 'Wallpapers/adventuregameWallPaper3.png'
	btn1.onclick = openChest;
	btn2.onclick = startGame;

	alert("Do you wanna go inside the cave or do you wanna go back to the camp?")
}


function openChest(){

	settext("Open the chest", "Go back", null )
	img.src = 'Wallpapers/adventuregameWallPaper4.png'
	btn1.onclick = pickAWeapon;
	btn2.onclick = checkCave;

	alert("Oke, so you made it into the cave, and now you see a chest, you can open the chest or go back to the cave entrance.")
}


function DaggerTrue(){
	dagger = true
	if (dagger){
		settext("Go further", null, null)
		img.src = 'Wallpapers/chestWithoutDagger.png'
		
		image = document.createElement("img");
		image.src = 'Weapons/Dagger.png'
		image.setAttribute("id", "dagger");

		description.appendChild(image);
		
		btn1.onclick = bridge;
	}	
}

function BowTrue(){
	bow = true
	if (bow){
		settext("Go further", null, null)
		img.src = 'Wallpapers/chestWithoutBow.png'

		image = document.createElement("img");
		image.src = 'Weapons/Bow.png'
		image.setAttribute("id", "Bow");

		description.appendChild(image);

		btn1.onclick = bridge;
	}	
}

function SwordTrue(){
	longsword = true
	if (longsword){
		settext("Go further", null, null)
		img.src = 'Wallpapers/chestWithoutSword.png'

		image = document.createElement("img");
		image.src = 'Weapons/LongSword.png'
		image.setAttribute("id", "longsword");

		description.appendChild(image);

		btn1.onclick = bridge;
	}	
}

function pickAWeapon(){
	settext("Take the Dagger", "Take the bow", "Take the longsword")
	img.src = 'Wallpapers/adventuregameWallPaper5.png'
	
	btn1.onclick = DaggerTrue;
	btn2.onclick = BowTrue;
	btn3.onclick = SwordTrue;

	alert("Good so you opend the chest, now you see three weapons: a longsword, a dagger and a bow. you have to pick a weapen, witch one? that your choice")
}


function bridge(){

	
	if (bow){
		settext("keep moving", "shoot the skull", null)
	}else{
		settext("keep moving", null, null)
	}
	img.src = 'Wallpapers/adventuregameWallPaper6.png'

	btn1.onclick = wakeUp;
	btn2.onclick = campFire;

	alert("you are standing in front of a bridge, you can walk further towards the other side.")
	if(bow){
		alert("because you picked the bow you can shoot the skull, that meens you dont have the risk of it falling on your head.")
	}
}


function wakeUp(){

	settext("Take look at the campFire", null, null)
	img.src = 'Wallpapers/adventuregameWallPaper7.png'

	btn1.onclick = campFire;

	title.innerHTML("The skull felt on your head, and now you wake up in a camp.");
}

function campFire(){

	settext("Talk to the people", "Wait for them to react", null)
	img.src = 'Wallpapers/adventuregameWallPaper8.png'

	btn1.onclick = upsideDownWorld;
	btn2.onclick = gameOver;
	
}

function upsideDownWorld(){

	settext("Stay where you are", "Keep walking", "Don't go back")
	img.src = 'Wallpapers/adventuregameWallPaper9.png'

	btn1.onclick = castleOutside;
	btn2.onclick = gameOver;
	btn3.onclick = campFire;


}

function castleOutside(){

	settext("Go inside the castle", "Stay where you are", "Don't go back")
	img.src = 'Wallpapers/adventuregameWallPaper10.png'

	btn1.onclick = gameOver;
	btn2.onclick = castleInside;
	btn3.onclick = upsideDownWorld;
}

function castleInside(){

	settext("Help him in a good painless way", "Help him in a fast painfull way", null)
	img.src = 'Wallpapers/adventuregameWallPaper11.png'

	btn1.onclick = endgame;
	btn2.onclick = gameOver;
	btn3.onclick = castleOutside;
}

function endgame(){

	settext("Back to Start", null, null)
	img.src = 'Wallpapers/adventuregameWallPaperEndGame.png'

	btn1.onclick = beginscreen;
	
}

function gameOver(){

	settext( "Go back To the start", null, null)
	img.src = "Wallpapers/adventuregameGameOverByTime.png"
	btn1.onclick = beginscreen;
	weaponsFalse();

	return true;

}

