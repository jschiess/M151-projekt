# Why am i here?

## run npm install 

## run npm build
```
in the dist folder there will be 

```



# unterichts stuff
```js {cmd=node} 

function Point(x, y) {
	let p = {
		x: x, 
		y: y,
		distanceFrom: function (obj)  {
			let x1 = this.x
			let x2 = obj.x
			
			let y1 = this.y
			let y2 = obj.y
			return Math.sqrt((x1-x2)**2 + (y1-y2)**2 )

		},
	}

	return p
}


var einseins = Point(1, 1)
var zwei = Point(2, 2)

var a = einseins.distanceFrom(zwei)



console.log(a)
```
