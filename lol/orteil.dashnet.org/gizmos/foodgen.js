Gizmo.Play=function ()
{
	Gizmo.screen=l('gizmo');
	
	Gizmo.Ingredients=[
	'nutella',
	'peanut butter',
	'jam',
	'cheese',
	'onions',
	'sardines',
	'fishsticks',
	'ground beef',
	'ham',
	'bacon',
	'powder sugar',
	'honey',
	'popcorn',
	'tomato sauce',
	'ketchup',
	'coke',
	'chocolate milk',
	'vinegar',
	'beer',
	'eggs',
	'fried eggs',
	'scrambled eggs',
	'tabasco'
	];

	Gizmo.Form=[
	'in a sandwich',
	'on a pizza',
	'in a taco',
	'on a toast',
	'in a quesadilla',
	'in a burger',
	'in juice form',
	'in cake form'
	];
	
	Gizmo.Generate=function()
	{
		var str='';
		str+=Choose(Gizmo.Ingredients)+'<br>';
		str+=Choose(Gizmo.Ingredients)+'<br>';
		if (Math.random()<0.8) str+=Choose(Gizmo.Ingredients)+'<br>';
		if (Math.random()<0.4) str+=Choose(Gizmo.Ingredients)+'<br>';
		if (Math.random()<0.2) str+=Choose(Gizmo.Ingredients)+'<br>';
		str+='...'+Choose(Gizmo.Form)+'<br>';

		Gizmo.screen.innerHTML='<a onclick="Gizmo.Generate();">'+str+'</a>';
	}
	Gizmo.Generate();
}