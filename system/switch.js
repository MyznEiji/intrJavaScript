var rank = 'B';
switch (rank)
{
  case 'A':
    print("Aランクです");
    break;
  case 'B':
    print("Bランクです");
    break;
  case 'C':
    print("Cランクです");
    break;
  default:
    print("ランク外です");
    break;

}



// フォースルー
var rank = 'B';
switch (rank)
{
  case 'A':
  case 'B':
  case 'C':
    print("合格!");
    break;
  default:
    print("不合格");
    break;

}
