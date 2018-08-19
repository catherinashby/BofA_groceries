"use strict";
//
//	should be read in from a separate file ....
var list = [
				{
					"category": "beverage",
					"item": "Milk",
					"brand": "Jabron",
					"type": "Organic 2% Milk",
					"qty": 1
				},
				{
					"category": "pantry",
					"item": "Farfalle",
					"brand": "Micoy",
					"type": "Pasta",
					"qty": 3
				},
				{
					"category": "pantry",
					"item": "Linguini",
					"brand": "Micoy",
					"type": "Pasta",
					"qty": 2
				},
				{
					"category": "dairy",
					"item": "Yogurt",
					"brand": "Labels",
					"type": "Plain Non-Fat Greek Yogurt",
					"qty": 12
				},
				{
					"category": "produce",
					"item": "Apples",
					"brand": "Zambony",
					"type": "Honeycrisp",
					"qty": 6
				},
				{
					"category": "produce",
					"item": "Lemons",
					"brand": "KC",
					"type": "Pink Variegated",
					"qty": 6
				},
				{
					"category": "beverage",
					"item": "Water",
					"brand": "Switch",
					"type": "Grapefruit Sparkling Water",
					"qty": 8
				},
				{
					"category": "alcohol",
					"item": "Vodka",
					"brand": "Flamingo",
					"type": "L'Orange",
					"qty": 1
				}
			];
//
( function ( json ) {
	function renderItem( itm )	{
		var el = document.createElement( 'div' );
		el.classList.add( 'grocery_item' );
//		'Qty' line
		var line = document.createElement( 'div' );
		line.classList.add( 'accent', 'qty' );
		line.appendChild( document.createTextNode( 'QTY: ' + itm.qty ) );
		el.appendChild( line );
//		'item' line
		line = document.createElement( 'div' );
		line.classList.add( 'emph' );
		line.appendChild( document.createTextNode( itm.item ) );
		el.appendChild( line );
//		'brand' and 'type' line
		line = document.createElement( 'div' );
		line.classList.add( 'stretch' );
		line.appendChild( document.createTextNode( itm.brand + ' ' + itm.type ) );
		el.appendChild( line );
//		'category' line
		line = document.createElement( 'div' );
		line.classList.add( 'accent' );
		line.appendChild( document.createTextNode( itm.category.toUpperCase() ) );
		el.appendChild( line );
//		
		return el;
	};
	var sect = document.querySelector( 'section.main' );
//	create header
	var hdr = document.createElement( 'div' );
	hdr.classList.add( 'emph' );
	hdr.appendChild( document.createTextNode( 'Grocery List' ) );
	sect.appendChild( hdr );
//	create grocery list
	var base = document.createElement( 'div' );
	base.classList.add( 'grocery_list' );
//	create each grocery item, adding to list
	json.forEach( function ( itm ) {
		var elem = renderItem( itm );
		base.appendChild( elem );
	} );
//	add grocery list to page
	sect.appendChild( base );
} )( list );
var size = list.length;
//
