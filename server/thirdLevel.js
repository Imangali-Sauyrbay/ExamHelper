module.exports = [
  {
    title: 'Дан  массив  Q(27). Вычислить сумму  отрицательных элементов',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=27;
    var a:array[1..n] of integer;
     i,sum:integer;
    begin
    randomize;
    for i:=1 to n do a[i]:=random(200)-100;
    sum:=0;
    for i:=1 to n do
     if a[i]<0 then
     begin
      sum:=sum+a[i];
     end;
     label1.Caption:=IntToStr(sum)
    end;
    `,
  },
  {
    title: 'Матрица N (10, 10) состоит из элементов целого   типа. Вычислить произведение элементов',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    var a:array[1..n,1..m] of integer;
   i,sum, proizvedenie:integer;
  begin
        proizvedenie:=1;
        for i:=1 to n do
          for j:=1 to m do
            if a[i,j] <> 0 then
              begin
                proizvedenie := proizvedenie * a[i,j];
              end;
  `,
  },
  {
    title: 'Массив А состоит из 17 элементов. Элементы целочисленного типа. Опишите',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=17;
      var a:array[1..n] of integer;
     i:integer;
    begin
    randomize;
    for i:=1 to n do a[i]:=random(200)-100;
    for i:=1 to n do 
    begin
    label1.Caption:= IntToStr(a[i])
    end;
    `,
  },
  {
    title: 'Массив Ді состоит из 10 элементов. Вычислить максимальный элемент и его порядковый номер',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=10;
      var a:array[1..n] of integer;
    k,i,max:integer;
    begin
    k:=0;
    max:=0;
    randomize;
    for i:=1 to n do a[i]:=random(200)-100;
    for i:=1 to n do
           begin
              if a[i] > max then begin
               max:=a[i];
               k:=i;
           end;
           label1.Caption:= IntToStr(a[i])
            label2.Caption:= IntToStr(k)
    end;
    `,
  },
  {
    title: 'Массив Сі состоит из 7 элементов, вычислите среднее арифметическое элементов',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=7;
      var a:array[1..n] of integer;
    i:integer;
    sum:Double;
    begin
    k:=0;
    max:=0;
    randomize;
    for i:=1 to n do a[i]:=random(200)-100;
    sum:=0;
    for i:=1 to n do
           begin
              sum:=sum+a[i];
           end;
    sum:=sum/n;
           label1.Caption:= IntToStr(sum)
    end;
    `,
  },
  {
    title: 'Массив Аі состоит из 12 элементов. Определите отрицательные элементы и их порядковые номера',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=12;
    var a:array[1..n] of integer;
     i,k,otriz:integer;
    begin
    k=0;
    otriz=0
    randomize;
    for i:=1 to n do a[i]:=random(200)-100;
    sum:=0;
    for i:=1 to n do
     if a[i]<0 then
     begin
      otriz:=a[i];
      k:=i; 
      label1.Caption:=IntToStr(otriz);
      label2.Caption:=IntToStr(k);
     end;
    end;
    `,
  },
  {
    title: 'Массив F состоит из 35 элементов. Определите  минимальный элемент и его порядковый номер',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=35;
      var a:array[1..n] of integer;
    k,i,max:integer;
    begin
    k:=0;
    min:=1000;
    randomize;
    for i:=1 to n do a[i]:=random(200)-100;
    for i:=1 to n do
           begin
              if a[i] < min then begin
               max:=a[i];
               k:=i;
           end;
    label1.Caption:= IntToStr(a[i])
    label2.Caption:= IntToStr(k)
    end;
    `,
  },
  {
    title: 'Массив I состоит из 30 элементов. Определите количество и сумму элементов кратных 3',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=30;
      var a:array[1..n] of integer;
    k,i,sum:integer;
    begin
    k:=0;
    sum:=0;
    randomize;
    for i:=1 to n do a[i]:=random(200)-100;
    for i := 1 to n do 
       begin 
          if a[i] mod 3 = 0 then sum := sum + a[i];
          k:=k+1;
       end;
    label1.Caption:= IntToStr(sum)
    label2.Caption:= IntToStr(k)
    end;
    `,
  },
  {
    title: 'Массив Сі состоит из 17 элементов. Определите наименьшее из элементов',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=35;
      var a:array[1..n] of integer;
    k,i,max:integer;
    begin
    k:=0;
    min:=1000;
    randomize;
    for i:=1 to n do a[i]:=random(200)-100;
    for i:=1 to n do
           begin
              if a[i] < min then begin
               max:=a[i];
               k:=i;
           end;
    label1.Caption:= IntToStr(a[i])
    label2.Caption:= IntToStr(k)
    end;
    `,
  },
  {
    title: 'Массив Аі состоит из 20 элементов. Определите произведение отрицательных элементов',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=20;
      var a:array[1..n] of integer;
    i, proizvedenie:integer;
    begin
    randomize;
    for i:=1 to n do a[i]:=random(200)-100;
    proizvedenie:=1;
    for i := 1 to n do 
       begin 
          proizvedenie:=1;
          for i:=1 to n do
              if a[i] < 0 then
                begin
                  proizvedenie := proizvedenie * a[i];
                end;
    label1.Caption:= IntToStr(proizvedenie)
    end;
    `,
  },
  {
    title: 'Массивы А, В состоят из 10 элементов. Найдите сумму элементов',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=10;
      var 
    a:array[1..n] of integer;
    b:array[1..n] of integer;
    i,sum:integer;
    begin
    sum:=0;
    randomize;
    for i:=1 to n do a[i]:=random(200)-100;
    for i:=1 to n do b[i]:=random(200)-100;
    for i := 1 to n do 
       begin 
          sum := sum + a[i]+ b[i];
       end;
    label1.Caption:= IntToStr(sum)
    end;
    `,
  },
  {
    title: 'Массив Аі состоит из 30 элементов. Элементы целочисленного типа. Напечатать элементы, кратные 5',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=30;
      var a:array[1..n] of integer;
    k,i:integer;
    begin
    k:=0;
    sum:=0;
    randomize;
    for i:=1 to n do a[i]:=random(200)-100;
    for i := 1 to n do 
       begin 
          if a[i] mod 5 = 0 then 
            label1.Caption:= IntToStr(a[i]);
       end;
    end;
    `,
  },
  {
    title: 'Массив Ді состоит из 10 элементов. Определите сумму отрицательных элементов',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=10;
    var a:array[1..n] of integer;
     i,sum:integer;
    begin
    randomize;
    for i:=1 to n do a[i]:=random(200)-100;
    sum:=0;
    for i:=1 to n do
     if a[i]<0 then
     begin
      sum:=sum+a[i];
     end;
    label1.Caption:=IntToStr(sum);
    end;
    `,
  },
  {
    title: 'Матрица B имеет размер 5x7. Вычислить сумму элементов',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=5;
    const m=7;
      var a:array[1..n,1..m] of integer;
     i,sum:integer;
    begin
          randomize;
          sum:=0
          for i:=1 to n do
            for j:=1 to m do
              for i:=1 to n do a[i,j]:=random(200)-100;
              begin
              sum:=sum+a[i,j];
              end;
    label1.Caption:=IntToStr(sum);
     end;
    `,
  },
  {
    title: 'Массив А состоит из 10 элементов. Печатать элементы кратные 4',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=10;
      var a:array[1..n] of integer;
    k,i:integer;
    begin
    k:=0;
    sum:=0;
    randomize;
    for i:=1 to n do a[i]:=random(200)-100;
    for i := 1 to n do 
       begin 
          if a[i] mod 4 = 0 then 
            label1.Caption:= IntToStr(a[i]);
       end;
    end;
    `,
  },
  {
    title: 'Матрица С размером 2x5. Найдите произведение элементов',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=2;
    const m=5;
      var a:array[1..n,1..m] of integer;
     i,sum, proizvedenie:integer;
    begin
          randomize;
          sum:=0;
          proizvedenie := 1;
          for i:=1 to n do
            for j:=1 to m do
              for i:=1 to n do a[i,j]:=random(200)-100;
              begin
              proizvedenie := proizvedenie * a[i,j];
              end;
    label1.Caption:=IntToStr(proizvedenie);
     end;
    `,
  },
  {
    title: 'Массив Н состоит из 30 элементов. Элементы символьного типа. Выедите на печать в поле Memo1',
    answer: `
    procedure TForm25.Button1Click(Sender: TObject);
    var
      B:array [0..29] of Char;
      i,j:integer;
    begin
      for i := 0 to 29 do begin
              B[i]:=Chr(random(26)+65);
              Memo1.Lines.Add(B[i]);
      end;
    end;

    `,
  },
  {
    title: 'Массив а состоит из 15 элементов. Определите количество положительных  элементов',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=15;
      var a:array[1..n] of integer;
    k,i:integer;
    begin
    k:=0;
    randomize;
    for i:=1 to n do a[i]:=random(200)-100;
    for i := 1 to n do 
       begin 
          if a[i]>0 then 
              begin
              k:=k+1;
              end;
    label1.Caption:=IntToStr(k);
    end;`,
  },
  {
    title: 'Дана матрица Д(10, 10) Вычислить сумму элементов главного  диагоналя',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=10;
    const m=10;
      var a:array[1..n,1..m] of integer;
     i,sum,j:integer;
    begin
          randomize;
          sum:=0;
          for i:=1 to n do
            for j:=1 to m do
              a[i,j]:=random(200)-100;
          for i:=1 to n do  
             sum:=sum+a[i,i];
    label1.Caption:=IntToStr(sum);
     end;
    `,
  },
  {
    title: 'Дан массив G (20)  Вычислить сумму отрицательных элементов',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=20;
    var a:array[1..n] of integer;
     i,sum:integer;
    begin
    randomize;
    for i:=1 to n do a[i]:=random(200)-100;
    sum:=0;
    for i:=1 to n do
     if a[i]<0 then
     begin
      sum:=sum+a[i];
     end;
    label1.Caption:=IntToStr(sum);
    end;
    `,
  },
  {
    title: 'Дана матрица Р(к, к) (к=7). Вместо отрицательных элементов в матрице ставим ноли и выводим на печать',
    answer: `var
    Form22: TForm22;
    r,c: integer;
    S: real;
    D:array [0..6,0..6] of integer;
    i,j:integer;
  
    implementation
    
    {$R *.dfm}
    
    procedure TForm22.Button1Click(Sender: TObject);
    begin
      val(Edit1.Text, r, c);
    
      for i := 0 to 6 do begin
    
          for j := 0 to 6 do begin
              D[i,j]:=Random(r)-20;
              stringgrid1.Cells[i,j]:=inttostr(D[i,j]);
          end;
    
      end;
    end;
    
    procedure TForm22.Button2Click(Sender: TObject);
    begin
        S := 0;
      for i := 0 to 6 do begin
          for j := 0 to 6 do begin
                if D[i,j] < 0 then D[i,j] := 0;
    
                stringgrid2.Cells[i,j]:=inttostr(D[i,j]);
          end;
      end;
    
    end;
  
  `,
  },
  {
    title: 'Массив Аі состоит из 15 элементов. Найдите умножение квадратов положительных элементов',
    answer: `procedure TForm24.Button1Click(Sender: TObject);
    var
     a1: real;
    r,c: integer;
    a:array [1..15] of real;
     i:integer;
    begin
     val(Edit1.Text, r, c);
     a1 := 1;
    
      for i:=1 to 15 do
      begin
        a[i]:=Random(r)-25;
    
        if a[i]>0 then a1 := a1 * Power(a[i],2);
    
        Memo1.Lines.Add('x' + FloatToStr(i) + ':  ' + FloatToStr(a[i]));
      end;
    Memo1.Lines.Add('умножение квадратов положительных элементов:'+FloatToStr(a1));
    end;
    `,
  },
  {
    title: 'Массив G(22) состоит из целых элементов. Вычислить произведение элементов',
    answer: `procedure TForm24.Button1Click(Sender: TObject);
    var
      a1: real;
      r,c: integer;
      a:array [1..22] of real;
      i:integer;
    begin
      val(Edit1.Text, r, c);
    
      for i:=1 to 22 do
      begin
        a[i]:=Random(r)-5;
    
        a1 := a1 * a[i];
    
        Memo1.Lines.Add('x' + FloatToStr(i) + ':  ' + FloatToStr(a[i]));
      end;
      Memo1.Lines.Add('Произведение элементов массива: ' + FloatToStr(a1));
    end;
    `,
  },
  {
    title: 'Дан массив R (9). Вместо отрицательных элементов пишем 0, вместо положительных- 1',
    answer: `procedure TForm24.Button1Click(Sender: TObject);
    var
      r,c: integer;
      a:array [1..9] of real;
      i:integer;
    begin
      val(Edit1.Text, r, c);
    
      for i:=1 to 9 do
      begin
        a[i]:=Random(r)-15;
    
        if a[i]>0 then a[i] := 1
        else if a[i]<0 then a[i] := 0;
    
        Memo1.Lines.Add('x' + FloatToStr(i) + ':  ' + FloatToStr(a[i]));
      end;
    
    end;
    `,
  },
  {
    title: 'Массив N состоит из 40 элементов. Вычислите сумму положительных  элементов',
    answer: `procedure TForm24.Button1Click(Sender: TObject);
    var
      S: real;
      r,c: integer;
      a:array [1..40] of real;
      i:integer;
    begin
      val(Edit1.Text, r, c);
      S := 0;
    
      for i:=1 to 40 do
      begin
        a[i]:=Random(r)-15;
    
        if a[i]>0 then S := S + a[i];
    
        Memo1.Lines.Add('x' + FloatToStr(i) + ':  ' + FloatToStr(a[i]));
      end;
      Memo1.Lines.Add('сумму положительных  элементов: ' + FloatToStr(S));
    end;
    `,
  },
  {
    title: 'Дана матрица R (М, N). Вычислить  сумму элементов',
    answer: `var
    Form22: TForm22;
    r,c: integer;
    S: real;
    R1:array [0..6,0..4] of integer;
    i,j:integer;
  implementation
  {$R *.dfm}
  
  procedure TForm22.Button1Click(Sender: TObject);
  begin
     val(Edit1.Text, r, c);
  
     for i := 0 to 6 do begin
         for j := 0 to 4 do begin
             R1[i,j]:=Random(r)-10;
             stringgrid1.Cells[i,j]:=inttostr(R1[i,j]);
         end;
     end;
  end;
  
  procedure TForm22.Button2Click(Sender: TObject);
  begin
      S := 0;
     for i := 0 to 6 do begin
         for j := 0 to 4 do begin
               S := S + R1[i,j];
  
         end;
     end;
     Memo1.Lines.Add('Сумма: ' + FloatToStr(S));
  end;
  `,
  },
  {
    title: 'Дан  массив  Т(20).   Определите сумму элементов, кратную 3',
    answer: `procedure TForm24.Button1Click(Sender: TObject);
    var
      S: real;
      r,c: integer;
      T:array [1..20] of integer;
      i:integer;
    begin
      val(Edit1.Text, r, c);
    
      for i:=1 to 20 do
      begin
        T[i]:=Random(r);
    
        Memo1.Lines.Add('x' + FloatToStr(i) + ':  ' + FloatToStr(T[i]));
      end;
    
      for i:=1 to 20 do
      begin
        if (T[i]>=3) and (T[i] mod 3 = 0) then
          begin
          Memo1.Lines.Add('кратные 2: x' + IntToStr(i) + ' = ' + FloatToStr(T[i]));
          end;
      end;
    end;
    `,
  },
  {
    title: 'Матрица В состоит из символических элементов размером 5x5. Выведите на печать элементы первого столбца',
    answer: `var
    Form22: TForm22;
    r,c: integer;
    S: real;
    B:array [0..4,0..4] of integer;
    i,j:integer;
  implementation
  {$R *.dfm}
  
  procedure TForm22.Button1Click(Sender: TObject);
  begin
     val(Edit1.Text, r, c);
  
     for i := 0 to 4 do begin
         for j := 0 to 4 do begin
             B[i,j]:=Random(r)-10;
             stringgrid1.Cells[i,j]:=inttostr(B[i,j]);
         end;
     end;
  end;
  
  procedure TForm22.Button2Click(Sender: TObject);
  begin
      S := 0;
     for i := 0 to 4 do begin
         for j := 0 to 4 do begin
               if i = 0 then Memo1.Lines.Add(FloatToStr(B[i,j]));
         end;
     end;
  end;
  `,
  },
  {
    title: 'Массив Аі состоит из 15 элементов. Найдите произведение квадратов положительных элементов',
    answer: `procedure TForm24.Button1Click(Sender: TObject);
    var
      S: real;
      r,c: integer;
      A:array [1..15] of integer;
      i:integer;
    begin
      val(Edit1.Text, r, c);
      S := 1;
      for i:=1 to 15 do
      begin
        A[i]:=Random(r)-15;
    
        Memo1.Lines.Add('x' + FloatToStr(i) + ':  ' + FloatToStr(A[i]));
      end;
    
      for i:=1 to 15 do
      begin
        if A[i]>0 then S := S * Power(A[i],2);
      end;
    Memo1.Lines.Add('произведение квадратов положительных элементов'+ ' = ' +FloatToStr(S));
    end;
    `,
  },
  {
    title: 'Дана матрица В (7, 7). Вычислите сумму элементов',
    answer: `var
    Form22: TForm22;
    r,c: integer;
    S: real;
    B:array [0..6,0..6] of integer;
    i,j:integer;
    implementation
    {$R *.dfm}
    
    procedure TForm22.Button1Click(Sender: TObject);
    begin
      val(Edit1.Text, r, c);
    
      for i := 0 to 6 do begin
          for j := 0 to 6 do begin
              B[i,j]:=Random(r)-10;
              stringgrid1.Cells[i,j]:=inttostr(B[i,j]);
          end;
      end;
    end;
    
    procedure TForm22.Button2Click(Sender: TObject);
    begin
        S := 0;
      for i := 0 to 6 do begin
          for j := 0 to 6 do begin
                S := S + B[i,j];
          end;
      end;
      Memo1.Lines.Add(FloatToStr(S));
    end;
  `,
  },
  {
    title: 'Массив N (10) состоит из целых чисел. Вычислить сумму элементов кратные 2',
    answer: `procedure TForm24.Button1Click(Sender: TObject);
      var
        S: real;
        r,c: integer;
        N:array [1..10] of integer;
        i:integer;
      begin
        val(Edit1.Text, r, c);
      
        for i:=1 to 10 do
        begin
          N[i]:=Random(r);
      
          Memo1.Lines.Add('x' + FloatToStr(i) + ':  ' + FloatToStr(N[i]));
        end;
      
        for i:=1 to 10 do
        begin
          if (N[i]>=2) and (N[i] mod 2 = 0) then
            begin
            Memo1.Lines.Add('кратные 2: x' + IntToStr(i) + ' = ' + FloatToStr(N[i]));
            end;
        end;
      end;
    `,
  },
  {
    title: 'Дана матрица R (5, 5). Найдите в элементах матрицы числа кратные 7 и выведите на печать',
    answer: `var
    Form22: TForm22;
    r,c: integer;
    S: real;
    R1:array [0..4,0..4] of integer;
    i,j:integer;
    implementation
    {$R *.dfm}
    
    procedure TForm22.Button1Click(Sender: TObject);
    begin
      val(Edit1.Text, r, c);
    
      for i := 0 to 4 do begin
          for j := 0 to 4 do begin
              R1[i,j]:=Random(r);
              stringgrid1.Cells[i,j]:=inttostr(R1[i,j]);
          end;
      end;
    end;
    
    procedure TForm22.Button2Click(Sender: TObject);
    begin
        S := 0;
      for i := 0 to 4 do begin
          for j := 0 to 4 do begin
                if (R1[i,j] mod 7 = 0) and (R1[i,j]>=7) then
                begin
                    Memo1.Lines.Add('кратные 7: x' + ' = ' +  FloatToStr(R1[i,j]));
                end;
          end;
      end;
    end;
  `,
  },
  {
    title: 'Дан массив N(10). Вычислите произведение положительных и отрицательных элементов по отдельности',
    answer: `procedure TForm24.Button1Click(Sender: TObject);
      var
        S: real;
        r,c: integer;
        N:array [1..10] of integer;
        i:integer;
      begin
        val(Edit1.Text, r, c);
        S := 1;
        for i:=1 to 10 do
        begin
          N[i]:=Random(r)-25;
      
          Memo1.Lines.Add('x' + FloatToStr(i) + ':  ' + FloatToStr(N[i]));
        end;
      
        for i:=1 to 10 do
        begin
          if N[i]>0 then S := S * N[i];
        end;
        Memo1.Lines.Add('произведение положительных' + ' = ' + FloatToStr(S));
      
      
        for i:=1 to 10 do
        begin
          if N[i]<0 then S := S * N[i];
      
        end;Memo1.Lines.Add('произведение отрицательных' + ' = ' + FloatToStr(S));
      end;
    `,
  },
  {
    title: 'Дана матрица Д(К, N). Матрица символического типа. Вывести на печать элементы главного диагонала',
    answer: `procedure TForm1.Button1Click(Sender: TObject);
    const n=10;
    const m=10;
      var a:array[1..n,1..m] of char;
     i,j:integer;
    begin
          randomize;
          sum:=0;
          for i:=1 to n do
            for j:=1 to m do
              for i:=1 to n do a[i,j]:= chr(Random(9));
          for i:=1 to n do  
             label1.Caption:=IntToStr(a[i,i]);
     end;
    `,
  },
  {
    title: 'Дан  массив  Q(27). Найдите и распечатайте отрицательные элементы',
    answer: `procedure TForm24.Button1Click(Sender: TObject);
      var
        r,c: integer;
        Q:array [1..27] of integer;
        i:integer;
      begin
        val(Edit1.Text, r, c);
      
        for i:=1 to 27 do
        begin
          Q[i]:=Random(r)-27;
      
          Memo1.Lines.Add('x' + FloatToStr(i) + ':  ' + FloatToStr(Q[i]));
        end;
      
        for i:=1 to 27 do
        begin
          if Q[i]<0 then
            begin
            Memo1.Lines.Add('отрицательные элементы'+ FloatToStr(Q[i]));
            end;
        end;
      end;
    `,
  },
  {
    title: 'Матрица N (10, 15) состоит из элементов целого типа. Вычислить произведение элементов',
    answer: `procedure TForm22.Button1Click(Sender: TObject);
      begin
        val(Edit1.Text, r, c);
        S := 1;
        for i := 0 to 9 do begin
            for j := 0 to 14 do begin
                N[i,j]:=Random(r)+1;
                stringgrid1.Cells[i,j]:=inttostr(N[i,j]);
      
            end;
        end;
      
      end;
      
      procedure TForm22.Button2Click(Sender: TObject);
      begin
          S := 1;
        for i := 0 to 9 do begin
            for j := 0 to 14 do begin
                S := S * N[i,j];
            end;
        end;
          Memo1.Lines.Add(FloatToStr(S));
      end;
    `,
  },
  {
    title: 'Массив Q (20) состоит из элементов целого типа. Напечатать элементы кратные 2 и кратные 3',
    answer: `procedure TForm24.Button1Click(Sender: TObject);
      var
        S: real;
        r,c: integer;
        Q:array [1..20] of integer;
        i:integer;
      begin
        val(Edit1.Text, r, c);
      
        for i:=1 to 20 do
        begin
          Q[i]:=Random(r);
      
          Memo1.Lines.Add('x' + FloatToStr(i) + ':  ' + FloatToStr(Q[i]));
        end;
      
        for i:=1 to 20 do
        begin
          if (Q[i]>=2) and (Q[i] mod 2 = 0) and (Q[i] mod 3 = 0) then
            begin
            Memo1.Lines.Add('кратные 2 и 3: x' + IntToStr(i) + ' = ' + FloatToStr(Q[i]));
            end;
        end;
      end;
    `,
  },
  {
    title: 'Дан массив А(10). Замените самый первый элемент массива на самый последний элемент',
    answer: `procedure TForm24.Button1Click(Sender: TObject);
      var
        S: real;
        r,c: integer;
        A:array [1..10] of integer;
        i, z:integer;
      begin
        val(Edit1.Text, r, c);
      
        for i:=1 to 10 do
        begin
          A[i]:=Random(r);
      
          Memo1.Lines.Add('x' + FloatToStr(i) + ':  ' + FloatToStr(A[i]));
        end;
      
      Memo1.Lines.Add('-----');
      
      z := A[1];
      
      for i:=1 to 10 do
        begin
          if i = 1 then A[1] := A[10];
      
          if i = 10 then A[10] := z;
      
          Memo1.Lines.Add('x' + FloatToStr(i) + ':  ' + FloatToStr(A[i]));
        end;
        Memo1.Lines.Add('-----');
      end;
    `,
  },
  {
    title: 'Дана матрица R(M,N) символьного типа. Вычислить сумму элементов',
    answer: `var
    Form22: TForm22;
    r,c: integer;
    S: real;
    R1:array [0..9,0..14] of integer;
    i,j:integer;
    implementation
    {$R *.dfm}
    
    procedure TForm22.Button1Click(Sender: TObject);
    begin
      val(Edit1.Text, r, c);
      S := 1;
      for i := 0 to 9 do begin
          for j := 0 to 14 do begin
              R1[i,j]:=Random(r)+1;
              stringgrid1.Cells[i,j]:=inttostr(R1[i,j]);
    
          end;
      end;
    
    end;
    
    procedure TForm22.Button2Click(Sender: TObject);
    begin
        S := 0;
      for i := 0 to 9 do begin
          for j := 0 to 14 do begin
              S := S + R1[i,j];
          end;
      end;
        Memo1.Lines.Add(FloatToStr(S));
    end;
  `,
  },
  {
    title: 'Дан   массив  L(10).   Вывести  элементы кратные 5',
    answer: `procedure TForm24.Button1Click(Sender: TObject);
    var
      S: real;
      r,c: integer;
      L:array [1..10] of integer;
      i:integer;
    begin
      val(Edit1.Text, r, c);
    
      for i:=1 to 10 do
      begin
        L[i]:=Random(r);
    
        Memo1.Lines.Add('x' + FloatToStr(i) + ':  ' + FloatToStr(L[i]));
      end;
    
      for i:=1 to 10 do
      begin
        if (L[i]>=5) and (L[i] mod 5 = 0) then
          begin
          Memo1.Lines.Add('кратные 5: x' + IntToStr(i) + ' = ' + FloatToStr(L[i]));
          end;
      end;
    end;
    `,
  },
  {
    title: 'Массив А состоит из 10 элементов. Элементы целочисленного типа. Напечатать элементы, кратные 7',
    answer: `procedure TForm24.Button1Click(Sender: TObject);
    var
      S: real;
      r,c: integer;
      A:array [1..10] of integer;
      i:integer;
    begin
      val(Edit1.Text, r, c);
    
      for i:=1 to 10 do
      begin
        A[i]:=Random(r);
    
        Memo1.Lines.Add('x' + FloatToStr(i) + ':  ' + FloatToStr(A[i]));
      end;
    
      for i:=1 to 10 do
      begin
        if (A[i]>=7) and (A[i] mod 7 = 0) then
          begin
          Memo1.Lines.Add('кратные 7: x' + IntToStr(i) + ' = ' + FloatToStr(A[i]));
          end;
      end;
    end;
    `,
  },
];
