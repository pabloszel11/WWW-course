function* generator()
{
	var index = 1;
	while(true)
		yield index++;
}

function isPrime(x)
{
	for(var i = 2; i < x; i++)
	{
		if(x % i == 0)
			return false;
	}
	return true;
}
function primeFinder()
{
	var n = generator();
		while(n.next().done === false)
	{
		a = n.next().value;
		if(isPrime(a))
			console.log(a);
	}
}

primeFinder();
			
		
		
