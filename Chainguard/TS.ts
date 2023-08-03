/* Make code production ready */

/* using var keyword instead of const */

interface Item {
    name: String
    price: Number,
    color: String,
    from: String
    generation?: Number,
    screen?: String,
    diameter?: Number
  }
  
  
  const items: Item[] = [
    { name: 'Banana', price: 10, color: 'yellow', from: 'Peru' },
    { name: 'Banana', price: 5, color: 'brown', from: 'Brasil' },
    /* Screen, Generation */
    { name: "iPad", price: 255, color: "silver", from: "China", screen: "OLED", generation: 8 },
    /* Diameter */
    { name: 'Beach ball', price: 5, color: 'pink', from: 'USA', diameter: 10 },
  ];
  
  interface Condition {
    field: String,
    value: String
  
  }
  
  const toExclude: Condition[] = [
    { field: 'name', value: 'Banana' },
    { field: 'color', value: 'pink' },
  ];
  
  
  function exclude(items: Item[], toExclude: Condition[]):Item[]{
  
    for (let i = 0; i < toExclude.length; i++) {
  
      const exclude: Condition = toExclude[i];

      var temp: Item[] = [];
      for (var j = 0; j < items.length; j++) {
        // { name: 'Banana', price: 10, color: 'yellow', from: 'Peru' },
        var item = items[j];
  
        if (item[exclude.field] !== exclude.value) {
          temp.unshift(item);
        } else {
          console.log('Excluded');
        }
      }
      items = temp;
    }
    return temp;
  }
  //JSON.stringify(value, replacer, space)
  //value: result of invoking helper function with items and toexclude as args
  //replacer: null
  //space: 4
  console.log(JSON.stringify(exclude(items, toExclude), null, 4));