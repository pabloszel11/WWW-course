function bad()
{
	x = 3.14;	//niezadeklarowana zmienna
	with(Math)	//używanie with
	{
		y = cos(0) + 25;
	}
	object = {a: 12, b: 15, a: 11, b:12}; //definiowanie wlasciwosci wiecej niz raz
	c = object.a + object.b + y;
	while(c != 0)
	{
		function f() //zagnieżdżona funkcja
		{
			return 0;
		}
		c = f();
	}
	delete bad2; //usuwanie funkcji
	delete x;	//usuwanie zmiennej
	console.log(c);
}
function good()
{
	"use strict";
	var x = 3.14;
	var y = Math.cos(0) + 25;
	object = {a:11, b:12};
	var c = object.a + object.b + y;
	while(c != 0)
	{
		function f2()
		{
			return 0;
		}
		c = f2();
	}
	console.log(y);
}

bad();
good();
