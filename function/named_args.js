function getTriangle(args)
{
  if (args.base == undefined) args.base = 1;
  if (args.height == undefined) args.height = 1;
  return args.base * args.height / 2;

}

print("三角形の面積 : ", getTriangle({base:5, height:4}));
