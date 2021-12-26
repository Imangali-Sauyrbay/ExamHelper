module.exports = [
  {
    title: '1.5 2 -0.75',
    answer: `var
    Form1: TForm1;
    a:Double;
    b:Double;
    c:Double;
    y:Double;
  
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  a:=1.5;
  b:=2;
  c:= -0.75;
  y:=a*Power(c,Sqrt(b))*cos(a)*b+c;
  label1.Caption:='y='+FloatToStr(y);
  end;
  `
  },
  {
    title: '2 -0.7 0.5',
    answer: `var
    Form1: TForm1;
    a:Double;
    b:Double;
    c:Double;
    y:Double;
  
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  a:=2;
  b:= -0.7;
  c:= 0.5;
  y:=a*cos(b+sin(a))+c;
  label1.Caption:='y='+FloatToStr(y);
  end;
  `
  },
  {
    title: '1 2 1.2',
    answer: `var
    Form1: TForm1;
    a:Double;
    b:Double;
    c:Double;
    y:Double;
  
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  a:=2;
  b:= 1.2;
  c:= 1;
  z:=Sqrt(a+b*Power(c,sin(a))+1);
  label1.Caption:='z='+FloatToStr(z);
  end;
  `
  },
  {
    title: '2 -1',
    answer: `var
    Form1: TForm1;
    m:Double;
    c:Double;
    r:Double;
    g:Double;
    f:Double;
  
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  m:=2;
  c:= -1;
  r:= 1.5;
  g:= 2;
  f:=Sqrt(m*r*g*c+c*sin(m));
  label1.Caption:='f='+FloatToStr(f);
  end;
  `
  },
  {
    title: '1.5 -0.5 1.5',
    answer: `var
    Form1: TForm1;
    a:Double;
    b:Double;
    c:Double;
    z:Double;
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  a:=-0.5;
  b:= 1.5;
  c:= 1;
  z:=b*Exp(a*b*c)+ a*Sqrt(b+1.5);
  label1.Caption:='z='+FloatToStr(z);
  end;
  `
  },
  {
    title: '1 0.7 2.1',
    answer: `var
    Form1: TForm1;
    m:Double;
    c:Double;
    k:Double;
    z:Double;
  
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  m:=0.7;
  c:= 2.1;
  k:= 1;
  z:=sin(m)/(Sqrt(1+(Sqr(m)*Sqr(sin(k))))) -c*Ln(m);
  label1.Caption:='z='+FloatToStr(z);
  end;
  `
  },
  {
    title: '1 -0.5 2.3',
    answer: `var
    Form1: TForm1;
    a:Double;
    b:Double;
    z:Double;
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  a:= -0.5;
  b:= 2.3;
  y:=(b*Power(a,a)-a)/(Exp(a*b)-1);
  label1.Caption:='y='+FloatToStr(y);
  end;
  `
  },
  {
    title: '1 1.5 0.5 1',
    answer: `var
    Form1: TForm1;
    a:Double;
    b:Double;
    S:Double;
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  a:= 0.5;
  b:= 1;
  S:=Exp(-a)*Sqrt(b+1)+Exp(-1)*Power(a+1.5,1/3);
  label1.Caption:='S='+FloatToStr(S);
  end;
  `
  },
  {
    title: '3.7 0.5',
    answer: `var
    Form1: TForm1;
    a:Double;
    b:Double;
    y:Double;
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  a:= 3.7;
  b:= 0.5;
  y:=b*ArcTan(b/a)-Power(b+a,0.2);
  label1.Caption:='y='+FloatToStr(y);
  end;
  `
  },
  {
    title: '2 3 4.1 -2.3',
    answer: `var
    Form1: TForm1;
    a:Double;
    b:Double;
    z:Double;
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  a:= 4.1;
  b:= -2.3;
  z:=(b+a*cos(2*x))/(a+Sqrt(a+b*sin(3*x)));
  label1.Caption:='z='+FloatToStr(z);
  end;
  `
  },
  {
    title: '1 1 2.3 0.75',
    answer: `var
    Form1: TForm1;
    a:Double;
    b:Double;
    l:Double;
    y:Double;
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  a:= 2.3;
  b:= 0.75;
  c:= 1;
  y:=ArcSin(b/a) – Power(l,-b*a)*Sqrt(a+1);
  label1.Caption:='y='+FloatToStr(y);
  end;
  `
  },
  {
    title: '0.5 0.8',
    answer: `var
    Form1: TForm1;
    a:Double;
    b:Double;
    c:Double;
    h:Double;
    s:Double;
    S:Double;
    procedure TForm1.Button1Click(Sender: TObject);
    begin
    a:= 0.5;
    b:= 0.8;
    c:= 1;
    h:= 2;
    s:= 3;
    S:=Exp(-a)*c*h*b+Exp(-b)*s*h*a;
    label1.Caption:='S='+FloatToStr(S);
    end;
  `},
  {
    title: '2 3 1.2 0.7',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    var
    a,b,z: real;
    begin
         a := StrToFloat(Edit1.Text);
         b := StrToFloat(Edit2.Text);
    
         z := Power(2,a) *Log10(a*b) - Power(3,a) * Log10(b);
         Label3.Caption := FloatToStr(z);
    end;
    
    procedure TForm1.Button2Click(Sender: TObject);
    begin
        Form1.Close;
    end;
    `
  },
  {
    title: '0.5 1.3',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
      var
      a,b,y: real;
      begin
          a := StrToFloat(Edit1.Text);
          b := StrToFloat(Edit2.Text);
      
          y := exp(-a) * (b + sqrt(b+a))/(b - sqrt(b-a));
          Label3.Caption := FloatToStr(y);
      end;
      
      procedure TForm1.Button2Click(Sender: TObject);
      begin
          Form1.Close;
      end;
    `
  },
  {
    title: '2 2.7 1.7',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    var
    a,b,f: real;
    begin
         a := StrToFloat(Edit1.Text);
         b := StrToFloat(Edit2.Text);
    
         f := a /(b+2) * exp(-b) * ln(a+b*a);
         Label3.Caption := FloatToStr(f);
    end;
    
    procedure TForm1.Button2Click(Sender: TObject);
    begin
        Form1.Close;
    end;
    `
  },
  {
    title: '1 1.5 0.9',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    var
    a,b,y: real;
    begin
         a := StrToFloat(Edit1.Text);
         b := StrToFloat(Edit2.Text);
    
         y := (a*a + b*b * Cos(a+b) * a)/(a+1);
         Label3.Caption := FloatToStr(y);
    end;
    
    procedure TForm1.Button2Click(Sender: TObject);
    begin
        Form1.Close;
    end;
    `
  },
  {
    title: '1.5 2.5',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    var
    a,b,S: real;
    begin
         a := StrToFloat(Edit1.Text);
         b := StrToFloat(Edit2.Text);
    
         S := a * ArcTan(b/a) + b * ArcSin(a/b);
         Label3.Caption := FloatToStr(S);
    end;
    
    procedure TForm1.Button2Click(Sender: TObject);
    begin
        Form1.Close;
    end;
    `
  },
  {
    title: '0.5 3.2',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    var
    a,b,f: real;
    begin
         a := StrToFloat(Edit1.Text);
         b := StrToFloat(Edit2.Text);
    
         f := exp(2) * Log10(a+b) - b*b*b * Log10(b-a);
         Label3.Caption := FloatToStr(f);
    end;
    
    procedure TForm1.Button2Click(Sender: TObject);
    begin
        Form1.Close;
    end;
    `
  },
  {
    title: '1 2.1 -0.3',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    var
    a,b,S: real;
    begin
         a := StrToFloat(Edit1.Text);
         b := StrToFloat(Edit2.Text);
    
         S := b * Sin(a*a + Cos(2*b)) - 1;
         Label3.Caption := FloatToStr(S);
    end;
    
    procedure TForm1.Button2Click(Sender: TObject);
    begin
        Form1.Close;
    end;
    `
  },
  {
    title: '2 0.5 3.1',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    var
    a,b,z: real;
    begin
         a := StrToFloat(Edit1.Text);
         b := StrToFloat(Edit2.Text);
    
         z := sqrt(a*b*Sin(2*a) + exp(-2) * (a+b));
         Label3.Caption := FloatToStr(z);
    end;
    
    procedure TForm1.Button2Click(Sender: TObject);
    begin
        Form1.Close;
    end;
    `
  },
  {
    title: '1.2 2',
    answer: `var
    Form1: TForm1;
    a:Double;
    x:Double;
    y:Double;
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  a:= 1.2;
  x:= 2;
  if  x>=a then  y:=x*Sqrt(x-a);
  if  x<a  then  y:=x;
  label1.Caption:='y='+FloatToStr(y);
  end;
  `
  },
  {
    title: '1 2 1 2 -0.5 2 1',
    answer: `var
    Form1: TForm1;
    a:Double;
    t:Double;
    b:Double;
    z:Double;
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  a:= -0.5;
  b:= 2;
  t:= 1;
  if  t>=1 and t<=2    then  z:=a*Sqr(t)*Ln(t);
  if  t>2 then  z:=Exp(a*t)*cos(b*t);
  if  t<1  then  z:=t;
  label1.Caption:='z='+FloatToStr(z);
  end;
  `
  },
  {
    title: '0.3 0.3 0.3 2.3 1',
    answer: `var
    Form1: TForm1;
    a:Double;
    x:Double;
    f:Double;
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  a:= 2.3;
  x:= 1;
  if  x>0.3 then  f:=Power(x+a,0.2);
  if  x=0.3 then  f:=x;
  if  x<0.3  then  f:=cos(x-a);
  label1.Caption:='f='+FloatToStr(f);
  end;
  `
  },
  {
    title: '1 2.3 2.3 5 5 2.7 -0.27 5',
    answer: `var
    Form1: TForm1;
    a:Double;
    x:Double;
    b:Double;
    y:Double;
    procedure TForm1.Button1Click(Sender: TObject);
    begin
    a:= 2.7;
    b:= -0.27;
    x:= 5;
    if  x>=2.3 and x<5    then  y:=(a+b)(x+1);
    if  x>2.3 then  y:=(a+b)/(Exp(x)+Power(cos(x),x));
    if  x>=5  then  y:=Exp(x)+sin(x);
    label1.Caption:='y='+FloatToStr(y);
    end;
  `
  },
  {
    title: '0.5 10 10 10 2.2 0.3 10',
    answer: `var
    Form1: TForm1;
    a:Double;
    i:Double;
    b:Double;
    z:Double;
    procedure TForm1.Button1Click(Sender: TObject);
    begin
    a:= 2.2;
    b:= 0.3;
    i:= 10;
    if   i<10  then  z:=a*Power(i,4)+b*i;
    if  i>10 then  z:=Exp(2*i)+Sqrt(Power(a,3)+Power(I,3));
    if  i=10  then  z:=tan(i+0.5);
    label1.Caption:='z='+FloatToStr(z);
    end;
  `
  },
  {
    title: '0.2 0.2 5 5 2.1 -3.7 0.75',
    answer: `var
    Form1: TForm1;
    a:Double;
    x:Double;
    b:Double;
    c:Double;
    S:Double;
    procedure TForm1.Button1Click(Sender: TObject);
    begin
    a:= 2.1;
    b:= -3.7;
    x:= 3;
    c:= 0.75;
    if  x>0.2  and x<=5  then  S:=a*x;
    if  x>5   then  S:=(a*Power(x,1.5)+b*Power(x,2/3))*c;
    if  x=0.2  then  S:= a*Power(x,1.5)+b*Power(x,2/3)+c;
    label1.Caption:='S='+FloatToStr(S);
    end;
  `},
  {
    title: '1 1 0.1 0.1 0.1 2.1 0.3 2',
    answer: `var
    Form1: TForm1;
    a:Double;
    t:Double;
    b:Double;
    z:Double;
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  a:= 2.1;
  b:= 0.3;
  t:= 2;
  if   i<0.1  then  z:=Sqrt(a*Sqr(t)*b*sin(t)+1);
  if  i>0.1 then  z:=Sqrt(a*Sqr(t)+b*cos(t)+1);
  if  i=0.1  then  z:=a*t+b;
  label1.Caption:='z='+FloatToStr(z);
  end;
  `
  },
  {
    title: '2.5 0.3 0.3 0.3 1.5 6',
    answer: `var
    Form1: TForm1;
    a:Double;
    x:Double;
    y:Double;
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  a:= 1.5;
  x:= 6;
  if   i<0.3  then  y:=a*Exp(sin(x))+2.5;
  if  i>0.3 then  y:=(sin(x))/(a+Exp(x));
  if  i=0.3  then  y:=Exp(cos(x))+a;
  label1.Caption:='y='+FloatToStr(y);
  end;
  `
  },
  {
    title: '0.4 0.4 0.4 0.5 1.3 4',
    answer: `var
    Form1: TForm1;
    c:Double;
    d:Double;
    t:Double;
    f:Double;
    procedure TForm1.Button1Click(Sender: TObject);
    begin
    c:= 0.5;
    d:= 1.3;
    t:= 4;
    if  t>0.4  then  f:=sin(c+d*t)+cos(d-t);
    if  t<0.4   then  f:=cotan(t)+Power(t+d,3);
    if  t=0.4  then  f:=c/(d*t)+Ln(Sqr(t)+c);
    label1.Caption:='f='+FloatToStr(f);
    end;
  `
  },
  {
    title: '3 3 7 7 -1.5 2.1 3.15 10',
    answer: `var
    Form1: TForm1;
    a:Double;
    b:Double;
    c:Double;
    i:Double;
    S:Double;
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  c:= -1.5;
  a:= 2.1;
  b:= 3.15;
  i:= 10;
  if  i>7  then  S:=a*i+b*Power(i,3);
  if  i<3   then  S:=a/t+b*Sqr(i)+c;
  if  i>=3 and i<=7    then  S:=i;
  label1.Caption:='S='+FloatToStr(S);
  end;
  `
  },
  {
    title: '2.5 1 1 1.2 1.2 1.2 1.8 -0.5 3.5 3',
    answer: `procedure TForm21.Button1Click(Sender: TObject);
    var
    a,b,c,x,y: real;
    
    begin
         a := 1.8;
         b := -0.5;
         c := 3.5;
         x := 3;
    
         if x<1.2 then y := a*x + b*x*x - 2.5*c
         else if x = 1.2 then y := a/x + sqrt(x+1)
         else y := (a + b*x)/sqrt(x+1);
    
         Label1.Caption := FloatToStr(y);
    end;
    `
  },
  {
    title: '1 1 1 0.5 0.5 0.5 1.5 2.2 4',
    answer: `procedure TForm21.Button1Click(Sender: TObject);
    var
    a,t,x: real;
    
    begin
         a := 1.5;
         x := 4;
         t := 2.2;
    
         if x<0.5 then t := (Power(ln(x),3) + x*x)/sqrt(x*1)
         else if x = 0.5 then t := sqrt(x+1) + 1/x
         else t := cos(x) + t*Sin(x)*Sin(x);
    
         Label1.Caption := FloatToStr(t);
    end;
    `
  },
  {
    title: '7 7 7 1.3 0.3 1.3 1.5 9',
    answer: `procedure TForm21.Button1Click(Sender: TObject);
    var
    a,x,y: real;
    
    begin
         a := 1.5;
         x := 9;
    
    
         if x < 1.3 then y := Pi *x*x - 7/(x*x)
         else if x = 0.3 then y := a * Power(x,3) + 7*sqrt(x)
         else if x > 1.3 then y := Log10(x + 7*sqrt(x));
    
         Label1.Caption := FloatToStr(y);
    end;
    `
  },
  {
    title: '5 5 10 10 2 -0.5',
    answer: `var
    Form1: TForm1;
    a:Double;
    b:Double;
    i:Double;
    y:Double;
  procedure TForm1.Button1Click(Sender: TObject);
  begin
  a:= 2;
  b:= -0.5;
  i:=5;
  if  i< 5   then  z:=a*i+b/i;
  if  i>10   then  z:=Power(i,3);
  if  i>=5 and i<=10  then  z:=a*Sqr(i)+b;
  label1.Caption:='z='+FloatToStr(z);
  end;
  `
  },
  {
    title: '2.5 5',
    answer: `procedure TForm21.Button1Click(Sender: TObject);
    var
    a,t,S: real;
    
    begin
         a := 2.5;
         t := 5;
    
         if t > a then S := t*t*t * sqrt(t-a)
         else if t = a then S := t * Sin(a*t)
         else if t < a then S := exp(-a*t) * Cos(a*t);
    
         Label1.Caption := FloatToStr(S);
    end;
    `
  },
  {
    title: '1 1 1 1 1.5 1',
    answer: `procedure TForm21.Button1Click(Sender: TObject);
    var
    a,x,f: real;
    
    begin
         a := 1.5;
         x := 1;
    
         if a*x < 1 then f := a*x - Log10(a*x)
         else if a*x = 1 then f := 1
         else if a*x > 1 then f := a*x + Log10(a*x);
    
         Label1.Caption := FloatToStr(f);
    end;
    `
  },
  {
    title: '1 3 4',
    answer: `procedure TForm21.Button1Click(Sender: TObject);
    var
    a,b,x,y: real;
    
    begin
         a := 1;
         b := 3;
         x := 4;
    
         if x < a then y := exp(b*x) * Sin(b*x)
         else if (a <= x) and (x <= b) then y := Cos(a*x)
         else if x > b then y := exp(-2*x) * Cos(x);
    
         Label1.Caption := FloatToStr(y);
    end;
    `
  },
  {
    title: '2.7 3',
    answer: `var
    Form1: TForm1;
    a:Double;
    x:Double;
    y:Double;
    procedure TForm1.Button1Click(Sender: TObject);
    begin
    a:= 2.7;
    x:= 3;
    if  x < a   then  y:=Exp(-Sqrt(x))*cos(a*x);
    if  x=a   then  y:=sin(a*x);
    if  x>a   then  y:=Exp(-x)*cos(b*x);
    label1.Caption:='y='+FloatToStr(y);
    end;
  `
  },
  {
    title: '1 1 1 -1.3 -0.5 3',
    answer: `var
    Form1: TForm1;
    a:Double;
    b:Double;
    x:Double;
    z:Double;
    procedure TForm1.Button1Click(Sender: TObject);
    begin
    a:= -1.3;
    b:= -0.5;
    x:= 3;
    if  x > 1   then  z:=abs(Exp(-2*x)*sin(b)*x);
    if  x=1   then  z:=cos(b)*x;
    if  x<1   then  z:=Exp(-x)*cos(b)*x;
    label1.Caption:='z='+FloatToStr(z);
    end;
  `
  },
  {
    title: '1 1 1 1 2 2 1.3 -0.54 3',
    answer: `var
    Form1: TForm1;
    a:Double;
    b:Double;
    t:Double;
    f:Double;
    procedure TForm1.Button1Click(Sender: TObject);
    begin
    a:= 1.3;
    b:= -0.5;
    t:= 3;
    if  t <= 1   then  f:=a*Sqr(t)+b*Sqrt(t+1);
    if  t>=1 and t<=2   then  f:=a-b;
    if  t>2   then  f:=a*Power(t,2/3) – b*Power(t+1,1/3);
    label1.Caption:='f='+FloatToStr(f);
    end;
  `
  },
  {
    title: '2 1 2 17.9 15.8',
    answer: `procedure TForm21.Button1Click(Sender: TObject);
    var
    x,y,a,b,f: real;
    
    begin
         x := 17.9;
         y := 15.8;
         a := x + 1;
         b := y - 2;
    
         f := a/(b+2);
    
         Label1.Caption := FloatToStr(f);
    end;
    `
  },
  {
    title: '1 9.5 2.9',
    answer: `procedure TForm21.Button1Click(Sender: TObject);
    var
    a,b,S: real;
    
    begin
         a := 9.5;
         b := 2.9 + Power(a,4);
    
         S := exp(-a) + sqrt(b+1) + Power(a,7);
    
         Label1.Caption := FloatToStr(S);
    end;
    `
  },
];
