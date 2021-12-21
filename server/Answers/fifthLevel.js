module.exports = [
  {
    title: 'given two numbers x, y. if X<y, then multiply the value of x by 5. if x >y, then divide the value of x by 5. if the two are equal, double the value of X.Write down the program.',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double x, y;
          x=15; y=15;
          if(x<y) x=x*5;
          else if(x>y) x=x/5;
          else if(x==y) x=2*x;
          System.out.println("x="+x);
      }
    }
    `,
  },
  {
    title: ' given two numbers x, y. if x=y, then the value of x is doubled. Write down the program.',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double x, y;
          x=15; y=15;
          if(x==y) x*=2;
          System.out.println("x="+x);
      }
    }`,
  },
  {
    title: '1, х2 -write a program that calculates the arithmetic mean of the variables x1, x2.',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double x1, x2, s;
          x1=15; x2=15;
          s=(x1+x2)/2;
          System.out.println("s="+s);
      }
    }
    `,
  },
  {
    title: 'write a program to calculate the price of purchased items at a discount. If the purchased item costs more than 500 tenge, then a 3 percent discount is provided, and over 1000 tenge-a 5 percent discount.',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double baga=1250;
          if(baga>500 && baga<=1000)
          baga=0.97*baga;
          else if(baga>1000)
          baga=0.95*baga;
          System.out.println("baga="+baga);
      }
    }
    `,
  },
  {
    title: 'given two numbers x, y (xy).If the first is greater than the second, say N = 100, then in the opposite case N = 0. You need to print the sign.',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double x, y;
          x=100; y=1000;
          if(x>y) System.out.println("N=100");
          if(x<y) System.out.println("N=0");
      }
    }
    `,
  },
  {
    title: 'а және в given two numbers a and B. If A and b are negative, then replace each with its own modulus; if only one of them is negative, then increase both by 0.7; if both are non-negative, then increase both by a factor of 10.',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double a, b;
          a=1000; b=2000;
          if(a<0 && b<0) 
          {
              a=Math.abs(a);
              b=Math.abs(b);
          }
          else if(a<0 || b<0) 
          {
              a=a+0.7;
              b=b+0.7;
          }
          else if(a>0 && b>0) 
          {
              a=a*10;;
              b=b*10;
          }
          System.out.println("a="+a);
          System.out.println("b="+b);
      }
    }
    `,
  },
  {
    title: '2 3 2 8 8 8',
    answer: `public class Main {
      public static void main(String[] args) {
          double x, y, a, b;
          double s;
          a=12; b=13; y=2;
          x=a*a+b*b;
          System.out.println("x="+x);
          if (x>8) 
          {s=Math.pow((x*x+y),3); System.out.println("s=" +s); }
          else if (x==8) 
          {s=Math.abs(x)+Math.abs(y); System.out.println("s=" +s); }
          else if (x<8) 
          {s=Math.sqrt(Math.abs(x+y*y)); System.out.println("s=" +s); }
      }
    `,
  },
  {
    title: '2 1 1 2 1 2 1 5 5',
    answer: `public class Main {
      public static void main(String[] args) {
          double x, y, a;
          double s;
          a=12; y=2;
          x=Math.sqrt(a*a+1);
          System.out.println("x="+x);
          if (x>5) 
          {s=Math.exp(x*x+1)+1; System.out.println("s=" +s); }
          else if (x<=5) 
          {s=x*x+Math.sqrt(y+1); System.out.println("s=" +s); }
      }
    }
    `,
  },
  {
    title: '1 2 0.7 0.7 0.96',
    answer: `public class Main {
      public static void main(String[] args) {
          double x, a, b;
          double Y;
           b=0.96;
          a=b*b*b;
          x=Math.exp(a+b);
          System.out.println("x="+x);
          if (x<=0.7) 
          {Y=a*x+b; System.out.println("Y=" +Y); }
          else if (x>0.7) 
          {Y=Math.exp(a+1)+a*b; System.out.println("Y=" +Y); }
      }
    }
    `,
  },
  {
    title: '2 2 1.002 1.048',
    answer: `public class Main {
      public static void main(String[] args) {
          double x, a, b;
          double Y;
          a=1.002; b=1.048;
          x=Math.abs(a*a-b);
          System.out.println("x="+x);
          if (x<a) 
          {Y=Math.exp(x)*Math.cos(a*x); System.out.println("Y=" +Y); }
          else if (x==a) 
          {Y=Math.sin(a*x); System.out.println("Y=" +Y); }
          else if (x>a) 
          {Y=Math.exp(2*x)*Math.cos(b*x); System.out.println("Y=" +Y); }
      }
    }
    `,
  },
  {
    title: '3 1 2 1 2 2 2 2 2 0.2323 0.7777',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double a,b, x, y, t;
          b=0.7777; a=0.2323;
          t=Math.sqrt(a*a+b*b);
          x=Math.pow(t, Math.pow(t,3))+1;
          if(a*x<t) y=a*t*t+Math.sqrt(t+1);
         else if(a*x==t) y=a-b;
          else if(a*x>t) y=b*t*t+Math.sqrt(a*b);
          System.out.println("t="+t);
    
          System.out.println("x="+x);
         System.out.println("y="+y);
      }
    }
    `,
  },
  {
    title: '3 5 5 10 10 2.7171 3.145145',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double a,b, x, y, t;
          b=3.145145; a=2.7171, t=1;
          x=Math.exp(a+Math.exp(a)+b);
          if(x<5) y=t*Math.pow(t-a,1/3);
         else if(x>=5&&x<=10) y=Math.sin(a*t);
          else if(x>10) y=Math.cos(a*t);
          System.out.println("x="+x);
         System.out.println("y="+y);
      }
    }
    `,
  },
  {
    title: '0.7 0.7 0.7 2.1 0.7777',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double a,b, x, y, t;
          b=0.7777; a=2.1;
          x=Math.exp(a*b);
          if(x<0.7) y=a*Math.exp(Math.cos(x));
         else if(x==0.7) y=a*b;
          else if(x>0.7) y=b*Math.exp(Math.sin(x));
          System.out.println("x="+x);
         System.out.println("y="+y);
      }
    }
    `,
  },
  {
    title: '2 2 2 2 2 2 2 0.2727 -1.02102',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double a,b, x, y;
          b=-1.02102; a=0.2727;
          x=Math.sqrt(a*a+b*b);
          if(x>=2) y=Math.exp(x)+Math.pow(Math.cos(x),2*x);
         else if(x<2) y=Math.sin(2*x*x);
          System.out.println("x="+x);
         System.out.println("y="+y);
      }
    }
    `,
  },
  {
    title: '1 1.2 2 2.5 1.2 2.1 2.5 2.1 3 3 1.8 -1.57 2.41',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double a,b, c, x, y;
          a=1.8; b=-1.57; c=2.41;
          x=Math.sqrt(Math.abs(Math.pow(a,3)+Math.pow(b,3)));
          if(x<1.2) y=a*x+Math.sqrt(Math.abs(x-1));
         else if(x>=1.2&&x<=2.1) y=a*x+b*x*x+2.5*c;
          else if(x>2.1) y=Math.sqrt(a+b*x-2.5*c);
          System.out.println("x="+x);
         System.out.println("y="+y);
      }
    }
    `,
  },
  {
    title: '2 1 1 1 2 1 2 1 1 2 2 1 2 1',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double x, y, S;
          y=1;
          x=Math.sqrt(Math.pow(y,Math.pow(y,2))+1);
          if(x>y+1) S=Math.exp(x*x+1)+1;
         else if(x==y+1) S=x*x+Math.sqrt(x*x+y+1);
          else if(x<y-1) y=Math.pow(Math.asin(2*x+y),2);
          System.out.println("x="+x);
         System.out.println("S="+S);
      }
    }
    `,
  },
  {
    title: '7 2 7 2 1 7 2 3.022022',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double a,b, x, y, t;
          x=3.022022;
          a=Math.exp(x); b=Math.exp(2*x);
          if(x<a) y=Math.log10(x+7*Math.sqrt(x));
         else if(x==a) y=a*x*x+7*Math.sqrt(x);
          else if(x>a) y=Math.log(1+7*Math.sqrt(x))/Math.log(2);
          System.out.println("x="+x);
         System.out.println("y="+y);
      }
    }
    `,
  },
  {
    title: '2 2 2 2 2 2 0.27 -1.02',
    answer: `public class Main {
      public static void main(String[] args) {
        double x, y, a, b;
        a=0.27; b=-1.02;
        x=Math.sqrt(a*a+b*b);
        System.out.println("x="+x); 
        if(x>=2) 
        {y=Math.exp(x)+Math.pow(Math.cos(x),2); System.out.println("y="+y);}
        else if(x<2) 
        {y=Math.cos(2*x); System.out.println("y="+y);}
      }
    }
    `,
  },
  {
    title: '2 5 5 2.71 3.145',
    answer: `public class Main {
      public static void main(String[] args) {
        double x, y, a, b, t;
        a=2.71; b=3.145; t=0.999;
        x=Math.exp(a+b);
        System.out.println("x="+x); 
        if(x>5) 
        {y=t*Math.pow(t-a,1/3); System.out.println("y="+y);}
        else if(x<=5) 
        {y=Math.sin(a*t);; System.out.println("y="+y);}
      }
    }
    `,
  },
  {
    title: '5 5 5',
    answer: `public class Main {
      public static void main(String[] args) {
        double x, y, a, t;
        x=1.11; a=2.22; t=3.33; 
        if(x<5) 
        {y=t;  System.out.println("y="+y);}
        else if(x==5) 
        {y=Math.sin(a*t); System.out.println("y="+y);}
        else if(x>5) 
        {y=Math.cos(a*t); System.out.println("y="+y);}
      }
    }
    `,
  },
  {
    title: '3 7 7 7 в середине sinat x=e^a+b',
    answer: `public class Main {
      public static void main(String[] args) {
        double x, y, a, b, t;
        a=1001; b=2002; t=3003;
        x=Math.exp(a+b);
        System.out.println("x="+x); 
        if(x<7) 
        {y=Math.pow(t-a,1/3);  System.out.println("y="+y);}
        else if(x==7) 
        {y=Math.sin(a*t); System.out.println("y="+y);}
        else if(x>7) 
        {y=Math.cos(a*t); System.out.println("y="+y);}
      }
    }
    `,
  },
  {
    title: '3 7 7 7 x=e^a',
    answer: `public class Main {
      public static void main(String[] args) {
        double x, y, a, b, t;
        a=0.0099; t=0.99;
        x=Math.exp(a);
        System.out.println("x="+x); 
        if(x<7) 
        {y=Math.pow(t+a,1/3);  System.out.println("y="+y);}
        else if(x==7) 
        {y=Math.sin(a+t); System.out.println("y="+y);}
        else if(x>7) 
        {y=Math.cos(a-t); System.out.println("y="+y);}
      }
    }
    `,
  },
  {
    title: '3 7 7 7 в середине sinat + B x=e^a+b',
    answer: `public class Main {
      public static void main(String[] args) {
        double x, y, a, b, t;
        a=7.997; b=5.444; t=3003;
        x=Math.exp(a+b);
        System.out.println("x="+x); 
        if(x<7) 
        {y=Math.pow(t+a*b,1/3);  System.out.println("y="+y);}
        else if(x==7) 
        {y=Math.sin(a*t+b); System.out.println("y="+y);}
        else if(x>7) 
        {y=Math.cos(a*t-b); System.out.println("y="+y);}
      }
    }
    `,
  },
];