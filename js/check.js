global = "";
(function(){
$(document).ready(function(){
	textgen = function(name, alter , beruf){
		this.name = name;
		this.alter = alter;
		this.beruf = beruf;
	}
	textgen.prototype.dump = function(){
		return this.name + ": " + this.alter + ": " + this.beruf;
 	}
	var automatischertext = "Das wurde automatisch erzeug";
	var langevariable = "Das modul hat das automatisch geschrieben";
	$('#text1').html(automatischertext);
	for(var i = 0; i < 10; i++){
		$('#text2').append(langevariable + "<br>");
	}
	global = new textgen("Tom",34,"Koch");
	
})}());