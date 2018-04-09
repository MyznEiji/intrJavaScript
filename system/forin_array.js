var data = ['apple', 'orange' , 'banana'];
for (var key in data)
{
  print(data[key]);
  print(key);
}


var data = {apple:150, orange: 100, banana: 120};
for (var key in data)
{
  print(key , "=" , data[key]);
}
