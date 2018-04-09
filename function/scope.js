var scope = 'Grobal';

function getValue()
{
  var scope = 'Local Variable';
  return scope;
}

print(getValue());
print(scope);
