function sum()
{
  var result = 0;
  for (var i = 0, len = arguments.length; i < len; i++)
  {
    var tmp = arguments[i];
    if(typeof tmp != "number") throw new Error('引数が数値ではありません :', tmp);
    result += tmp;
  }
  return result;
}


try {
  print(sum(1,2,3,4,5));
}catch(e)
{
  print(e.message);
}
