scope = 'Grobal';

function getValue()
{
  scope = 'Local Variable';
  return scope;
}

print(getValue());
print(scope);
