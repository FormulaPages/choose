
// MORE LISPY Fucking shit in here...haha
export default function CHOOSE(index) {
  if (arguments.length < 2) {
    return error.value;
  }

  var values = [ ];
  for (var i = 1; i < arguments.length; i++) {
    var item = arguments[i];
    if (fn.ISRANGE(item)) {
      values = values.concat( item.values() );
    } else {
      values.push(item);
    }
  }

  var retVal = values[index-1];

  if (fn.ISCELL(retVal)){
    return (retVal).valueOf();
  }

  return retVal;
  
}
