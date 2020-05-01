module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return item.enhancement < 20
   ? { ...item, enhancement: item.enhancement + 1 }
   : { ...item};
}

function fail(item) {
  const {enhancement, durability} = item;
  return enhancement > 16
  ? { ...item, enhancement: enhancement - 1,
  durability: durability - 1 }: enhancement >= 15
  ? { ...item, durability: durability - 10}
  : { ...item, durability: durability -5};
}

function repair(item) {
  return item.durability === 100
  ? { ...item }
  : { ...item, name: `[+${item.enhancement}] ${item.name}`};
}

function get(item) {
  let newName = item.name;
  if(item.enhancement > 0 && item.enhancement <= 20) {
    newName = `[+${item.enhancement}] ${item.name}`;
    console.log('New Name:', newName);
    return { ...item, name: newName};
  } else if ( item.enhancement === 0 ) {
    return { ...item };
  } else {
    return 'item not available for modification'
  }
}
