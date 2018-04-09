function getTriangle(base, height)
{
  if (base == undefined) base = 1;
  if (height == undefined) height = 1;
  return base * height / 2;

}

print("三角形の面積 : ", getTriangle());
