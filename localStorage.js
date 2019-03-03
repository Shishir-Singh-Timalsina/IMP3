var controller = new ViewController();

controller.updatePersonsView();

function load(){
	var name = document.getElementById('name').value;
	controller.addPerson(name);
}