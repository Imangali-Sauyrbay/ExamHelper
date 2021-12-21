module.exports = [
  {
    title: '2 3 2',
    answer: `
    public class Main
    {
      public static void main(String[] args) {
          double a, b, x, y;
          a=12; b=15;
          x=(a+b)/2;
          y=2*x+a*Math.pow(x,3)+Math.tan(Math.abs(x)/a);
          System.out.println("x="+x);
          System.out.println("y="+y);
      }
    }
    `,
  },
  {
    title: '2 2 5',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double t, x, f, y;
          t=12.13; x=85.86;
          f=Math.pow(t+x, 2/5);
          y=Math.sin(x+f)/Math.sqrt(2);
          System.out.println("f="+f);
          System.out.println("y="+y);
      }
    }
    `,
  },
  {
    title: '3 3 2 2 4 3 4 2 3',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double b, x, y, z;
          b=11.11; y=22.22;
          x=(b-y*y)/3;
          z=Math.pow(x,3)*y+3*x*x*y*y-4*x*Math.pow(y,3)+Math.pow(y,4);
          System.out.println("x="+x);
          System.out.println("z="+z);
      }
    }
    `,
  },
  {
    title: '20 2 2',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double f, x, a, y;
          f=5.505; x=7.707;
          a=f/2+x*x;
          y=Math.sin(a+Math.cos(a))-Math.log(Math.abs(a-20));
          System.out.println("a="+a);
          System.out.println("y="+y);
      }
    }
    `,
  },
  {
    title: '0.5 2 2',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double f, x, a, y;
          f=5.505; x=7.707;
          a=f/2+x*x;
          y=Math.cos(a+Math.sin(a))+Math.pow(f,0.5);
          System.out.println("a="+a);
          System.out.println("y="+y);
      }
    }
    `,
  },
  {
    title: '1 2 1 2 3 2',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double t, x, y;
          x=1;
          t=Math.atan(x*x);
          y=Math.sqrt(1+t*t)+Math.log(1+t*t)/Math.pow(1+t,1/3);
          System.out.println("t="+t);
          System.out.println("y="+y);
      }
    }
    `,
  },
  {
    title: '1 1 2 2',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double a, x, y, z;
          x=1; a=0.01;
          y=Math.pow(a+x,2);
          z=Math.sqrt(1+Math.sqrt(1+x+Math.sqrt(2+y)));
          System.out.println("y="+y);
          System.out.println("z="+z);
      }
    }
    `,
  },
  {
    title: '2',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double b, x, y, z;
          b=1.111; y=0.001;
          x=b*b/y;
          z=Math.log(x)/Math.sin(x+y);
          System.out.println("x="+x);
          System.out.println("z="+z);
      }
    }
    `,
  },
  {
    title: '6 2',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double a, x, y;
          x=5.5;
          a=Math.atan(Math.sqrt(x));
          y=Math.sqrt(x+6)/2+Math.sin(x-a);
          System.out.println("a="+a);
          System.out.println("y="+y);
      }
    }
    `,
  },
  {
    title: '23 2 5 2 21 68 2 10',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double a, b, x, t;
          a=20; b=10;
          x=Math.pow(a-b,2)/10;
          t=Math.sqrt(23+Math.sqrt(2*x+Math.sqrt(5*x*x+21*x+68)));
          System.out.println("x="+x);
          System.out.println("t="+t);
      }
    }
    `,
  },
  {
    title: '3 2',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double a, x, y;
          x=1000;
          a=Math.pow(Math.log(x),2);
          y=Math.sqrt(Math.sqrt(x)+Math.pow(x*Math.sqrt(a),1/3));
          System.out.println("a="+a);
          System.out.println("y="+y);
      }
    }
    `,
  },
  {
    title: '5 2 0.7 2 0.35 7 2',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double a, b, x, z;
          a=100; b=101;
          x=Math.pow(a/b-7,2);
          z=Math.pow(5,2*x)-Math.pow(0,7,x)-Math.pow(a,2*x)*0.35;
          System.out.println("x="+x);
          System.out.println("z="+z);
      }
    }
    `,
  },
  {
    title: '3 0.8 2 3',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double a, n, x, z;
          a=543210; n=12345;
          x=Math.log(a)/n;
          z=Math.log(Math.pow(x,3)+0.8)+2*Math.pow(x,3/n);
          System.out.println("x="+x);
          System.out.println("z="+z);
      }
    }
    `,
  },
  {
    title: '1 10 1 2 2',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double u, x, y;
          u=120;
          x=Math.tan(u/2);
          y=Math.log(Math.sqrt(1+x))-Math.pow(10,1-x*x-x);
          System.out.println("x="+x);
          System.out.println("y="+y);
      }
    }
    `,
  },
  {
    title: '6 2 3 1 4 2',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double a, x, z;
          a=900;
          x=Math.log(a+1)/(Math.log(4)-Math.log(2));
          z=Math.pow(6,2*x+3)*Math.sqrt(a-Math.sqrt(x));
          System.out.println("x="+x);
          System.out.println("z="+z);
      }
    }
    `,
  },
  {
    title: '2 4 2 1 2 3 3 1 2 1',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double a, x, y;
          a=1; 
          x=(a-1)/(a*a+1);
          y=Math.log((x*x-4*a)/(x*x+x+1));
          System.out.println("x="+x);
         System.out.println("y="+y);
      }
    }
    `,
  },
  {
    title: '1 1 2 2 2 4',
    answer: `public class Main
    {
      public static void main(String[] args) {
          double a, b, x, y, z;
          x=5.55; y=0.77; z=7.77;
          a=(Math.sqrt(Math.abs(x-1))-Math.sqrt(Math.abs(y)))/(1+(x*x)/2+(y*y)/4)
          b=x*(Math.atan(z)+Math.exp(1));
          System.out.println("a="+a);
         System.out.println("b="+b);
      }
    }
    `,
  },
  {
    title: '3 2 1 2 1 2 2 2 3',
    answer: `public class Main {
      public static void main(String[] args) {
          double x, y, z, a, b;
         x=5.2; y=1.2; z=3.4;
         a=(3+Math.exp(3))/(1+x*x*Math.abs(y-Math.tan(z)));
         System.out.println("a=" +a); 
         b=1+Math.abs(y-x)+(Math.pow((y-x),2)/2)+(Math.pow((x-y),2)/3);
         System.out.println("b=" +b); 
      }
    }
    `,
  },
  {
    title: '1 2 4 2 1 2 4 1 2 2 2 2',
    answer: `public class Main {
      public static void main(String[] args) {
          double x, y, z, a, b;
         x=5.2; y=1.2; z=5.3;
         a=(1+y)*((x+(y/(x*x+4)))/(Math.exp(2)+4));
         System.out.println("a=" +a); 
         b=(1+Math.pow(Math.cos(y-x),3))/(((x*x)/2)+Math.pow(Math.sin(z),2));
         System.out.println("b=" +b); 
      }
    }
    `,
  },
  {
    title: '2 2 2 1 2 2 2',
    answer: `public class Main {
      public static void main(String[] args) {
          double x, y, z, a, b;
         x=5.2; y=1.2; z=5.3;
         a=y+(x/(y*y+Math.abs((x*x)/(y+x*x))));
         System.out.println("a=" +a); 
         b=Math.pow((1+Math.pow(Math.tan(z/2),2)),2);
         System.out.println("b=" +b); 
      }
    }
    `,
  },
  {
    title: '2 4 6 1 2 2 1 2 3 2 5',
    answer: `public class Main {
      public static void main(String[] args) {
          double x, y, z, a, b;
         x=5.2; y=1.2; z=5.3;
         a=2*Math.pow(Math.cos(x-Math.PI/6),4)/(1/2+Math.pow(Math.sin(y),2));
         System.out.println("a="+a); 
         b=1+Math.pow(z,2)/(3+Math.pow(z,2)/5);
         System.out.println("b="+b); 
      }
    }
    `,
  },
  {
    title: '1 1 2 2 2 4 3 3',
    answer: `public class Main {
      public static void main(String[] args) {
          double x, y, z, a, b;
         x=5.2; y=1.2; z=5.3;
         a=(Math.sqrt(Math.abs(x-1))-Math.sqrt(Math.abs(y)))/(1+Math.pow(x,2)/2+Math.pow(y,2)/4);
         System.out.println("a="+a); 
         b=Math.pow(x,3)*(Math.pow(Math.atan(z),3)+Math.exp(1));
         System.out.println("b="+b); 
      }
    }
    `,
  },
  {
    title: '1 2 2 2 1 2 2 2 1',
    answer: `public class Main {
      public static void main(String[] args) {
          double x, y, z, a, b;
         x=5.2; y=1.2; z=5.3;
         a=(1+Math.pow(Math.sin(x+y),2))/(2+Math.abs(x-(2*x)/(1+x*x*y*y)));
         System.out.println("a="+a); 
         b=Math.pow(Math.cos(Math.atan(1/z)),2);
         System.out.println("b="+b); 
      }
    }
    `,
  },
  {
    title: '2 4 2 3',
    answer: `public class Main {
      public static void main(String[] args) {
          double x, y, z, a, b;
         x=5.2; y=1.2; z=5.3;
         a=Math.log(Math.abs((y-Math.sqrt(Math.abs(x)))*(x-y/(z+(x*x)/4))));
         System.out.println("a="+a); 
         b=x-(x*x)/3+(x+y)/x;
         System.out.println("b="+b); 
      }
    }
    `,
  },
  {
    title: '2 8 2 3 2 6 3 1',
    answer: `public class Main {
      public static void main(String[] args) {
         double x, y, z, a, b;
         x=5.2; y=1.2; z=5.3;
         a=(x*x)/(8+(x*x)/3+(y*y)/6);
         System.out.println("a="+a); 
         b=x*(Math.pow(Math.cos(x+z),3)+1);
         System.out.println("b="+b); 
      }
    }
    `,
  },
  {
    title: '5 2 1 2 4 2 6 2 7',
    answer: `public class Main {
      public static void main(String[] args) {
          double x, y, z, a, b;
         x=5.2; y=1.2; z=5.3;
         a=Math.abs(5-2*Math.exp(1))/(1+x*x*(y-Math.tan(z)));
         System.out.println("a="+a); 
         b=Math.abs(y-4)+Math.pow(y-x,2)/6+Math.pow(x-y,2)/7;
         System.out.println("b="+b); 
      }
    }    
    `,
  },
];