function showMessage(value)
{
  if(arguments.length !== 1)
  {
    throw new Error("引数の数が間違っています: ", arguments.length);
  }
  print(value);
}

try{
  showMessage('山田', '鈴木');
}catch(e)
{
  print(e.message);
}
