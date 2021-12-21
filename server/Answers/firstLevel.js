module.exports = [
  {
    title: 'Integrated Java environments A program written in the Java language',
    answer: `Java is a unique programming language, unlike other programming languages. Its main feature is that almost all computers are organized to facilitate work in the Internet browser environment. The Java language, like other programming languages, is not limited to working with graphics and static texts. The ability of the Javanese language to work with various dynamic objects is a fundamental feature of the language. Another feature of the programming language is that the written program does not depend on the type of device. The Java language is part of Object-Oriented Programming Languages. A program written in this language consists of objects that are closely related to each other. A program written in this language does not accumulate in the memory of specific processor commands, but accumulates in machine commands. This is called the Java Virtual Machine. This is a set of codes for executing commands together with the system.
    Java is a unique programming language, unlike other programming languages. The company that developed the Java programming language is Sun Microsystems. According to official data, this language was released on May 23, 1995. Speaking about the history of the development of the Java language, it is worth mentioning several development groups of its technologies. These include JavaSE, JavaEE, JavaME, JavaFX, and JavaCard. The main edition of Java is Java SE Java Standard Edition, a special feature of which is the presence of APIs, Java Runtime Environment compilers. The goal is to create user-friendly applications. The technology for creating enterprise-level software is called Java Enterprise Edition. Java EE consists of a special set of tools. The next Java development technology is Java Micro Edition. Its purpose is to be used in devices with limited computing capabilities, in particular in pocket phones and pocket computers. The next step in Java Development Technology in the form of a Rich Client Platform is JavaFX. Its goal is to create cooperative apps and various business platforms. Latest technology Java Card. As the name suggests, this technology is designed to create smart cards. It is also based on the development of applications designed to work on other structures with limited memory and processing capacity.
    `,
  },
  {
    title: 'classes Methods',
    answer: `Classes are the basis of Object-Oriented Programming. An object model or description is a class, and an object represents an instance of that class. The description of the class begins with the word class, followed by the name of the class. The class name must be capitalized. All progamma written in the Javanese language consists of classes with their own name, starting with the word class Servant. If you want to create a new class, you can create a new class in the same class, or you can create a new class in the same class in the same class in the same class in the same class. After the word servant, the name of the class is written. The class name can be freely chosen by the programmer. That is, he can write the word he wants. After the class name, a square bracket opens. Then the class body begins. All components contained in a class belong to this class body. After the class body is completed, the square brackets must be closed. You can write class modifiers public, static, abstract, private, final, strictfp, and protected before the word SLASS. If no extensions are specified during the class description, i.e. the word extends and the class name are not written, then Java considers this class to be an extension of the object class, and the compiler writes this extension further by silent agreement: class Pet extends Object{ . . . } This extension can be written even more deciphered.
    Methods in Java are a complete sequence of actions (instructions) aimed at solving a particular task. In fact, these are functions (they are procedures, subroutines) of earlier, non-OOP languages. Only these functions are members of classes and, to distinguish them from ordinary functions, according to the terminology of object-oriented programming, they are called methods.
    Methods are always defined inside classes.
    `,
  },
  {
    title: 'constructed data types Operations applied to the data',
    answer: `A data type is a set of values and a set of operations defined on them.
    In Java, we have standard for all programming languages data types.
    Such as:
    Integers: 
    byte, short, int, long.
    Possible operations on them:
    * / + - %
    Floating point numbers:
    float, double.
    Possible operations on them:
    * / + - 
    Logical type:
    boolean.
    Possible operations on them:
    && || !
    String:
    String.
    Possible operations on them:
    + 
    Symbolic:
    char.
    Without operations on them.`,
  },
  {
    title: 'control operators Simple Java applications',
    answer: `Operator in Java is a symbol that is used to perform operations. For example: +, -, *, / etc.

    There are many types of operators in Java which are given below:
    
    Unary Operator, 	expr++ expr-- 	++expr --expr +expr -expr ~ !
    Arithmetic Operator, 	* / % 	+ -
    Shift Operator, 	<< >> >>>
    Relational Operator, 	< > <= >= instanceof 	== !=
    Bitwise Operator, & ^ |
    Logical Operator, && ||
    Ternary Operator and ? :
    Assignment Operator. = += -= *= /= %= &= ^= |= <<= >>= >>>=`,
  },
  {
    title: 'Using arithmetic operators in Java Increment and decrement',
    answer: `Arithmetic operations in mathematics include addition +, subtraction –, multiplication *, division / and remainder division%. The remainder division takes only an integer type. And the division is whole and real, while the other takes on a symbolic type as well. Access Operations are used to set conditions. These are: equality ==, greater or equal>=, lesser or equal<=, unequal != , large >, small <. Property operations simple property=, Sum Property+=, difference property-=, increment++, decree дек, product property *=, split property /=.`,
  },
  {
    title: 'assignment operator',
    answer: `The assignment operator is, as can be understood from the name, operators that assign a value. And depending on the type, they can also perform different operations. Like addition, subtraction and even bitwise operations!
    All assignment Operators in Java: = += -= *= /= %= &= ^= |= <<= >>= >>>=`,
  },
  {
    title: 'entering data',
    answer: `In to build the output stream to the System class. The object is defined. This object has several methods for extracting data. Data entry is performed by importing the Scanner object. It allows the user to enter a value corresponding to a variable without entering it in the program. To do this, we first import the scanner object using Import java util Scanner;. Subscription format:
    Scanner scan=new Scanner(System.in); A=scan.nextDouble (); in this case, the value of variable A is entered by the user after the program is executed. One thing to consider here is that input functions vary depending on the data types. For example, scan.nextDouble()scan.nextInt() scan.subscription formats for different types, such as nextFloat().`,
  },
  {
    title: 'data output',
    answer: `Out to create an output stream for the System class. The object is defined. This object has several methods for extracting data. The first is the println method. He moved to the next row after displaying the information on the screen. If you don't need to move to the next row, we use the print method. You can enter a method once and upload multiple data output to it. In this case, the data must be separated from each other by an addition symbol. The variable or any information that needs to be extracted is enclosed in parentheses. If there are explanatory words, you need to put additional quotation marks. The third method for extracting information is the prinf method, which provides formatting output of information. That is, when decimal numbers appear on the screen, the fraction is used only to produce the smallest fraction. You can also output values as exponential numbers.`,
  },
  {
    title: 'formatting method',
    answer: `КОПИЯ С ИНЕТА
    The java string format() method returns the formatted string by given locale, format and arguments.

    If you don't specify the locale in String.format() method, it uses default locale by calling Locale.getDefault() method.
    For example:
    String sf1=String.format("name is %s",name);  
    String sf2=String.format("value is %f",32.33434);
    Here, we are providing a table of format specifiers supported by the Java String.
    %a	floating point (except BigDecimal)	Returns Hex output of floating point number.
    %b	Any type	"true" if non-null, "false" if null
    %c	character	Unicode character
    %d	integer (incl. byte, short, int, long, bigint)	Decimal Integer
    %e	floating point	decimal number in scientific notation
    %f	floating point	decimal number
    %g	floating point	decimal number, possibly in scientific notation depending on the precision and value.
    %h	any type	Hex String of value from hashCode() method.
    %n	none	Platform-specific line separator.
    %o	integer (incl. byte, short, int, long, bigint)	Octal number
    %s	any type	String value
    %t	Date/Time (incl. long, Calendar, Date and TemporalAccessor)	%t is the prefix for Date/Time conversions. More formatting flags are needed after this. See Date/Time conversion below.
    %x	integer (incl. byte, short, int, long, bigint) Hex string.`,
  },
  {
    title: 'constants',
    answer: ` КОПИЯ 12% text.ru
    In order to make a variable a constant, you need to use the "final" keyword.

    Constants in the program are usually written in capital letters to distinguish them from ordinary variables.
    
    If the program attempts to change a constant, the javac compiler will issue an error message. Because you can only set the value of a constant 1 time.`,
  },
  {
    title: 'types of operators used Comparison and logical operators',
    answer: ` КОПИЯ С ИНЕТА
    == Checks whether the values of the two operands are equal or not, if so, the condition becomes true; (A == B) - not true
    != Checks whether the values of the two operands are equal or not, if the values are not equal, then the condition becomes true; (A != B) - the value is true
    > Checks whether the value of the left operand is greater than the value of the right operand, if so, the condition becomes true; (A > B) - not true
    < Checks whether the value of the left operand is less than the value of the right operand, if so, the condition becomes true; (A < B) - the value is true
    >= Checks whether the value of the left operand is greater than or equal to the value of the right operand, if so, the condition becomes true; (A>= B) - the value is not true
    <= Checks if the value of the left operand is less than or equal to the value of the right operand, if so, the condition becomes true; (A <= B) - the value is true
    
    && is called the logical operator "And". If both operands are non-zero, then the condition becomes true; (A && B) - the value is false
    || The logical operator "OR" is called. If either of the two operands is not zero, then the condition becomes true; (A || B) - the value is true
    !	The logical operator "NOT" is called. Usage changes the logical state of its operand. If the condition is true, then the logical "NOT" operator will do false; !(A && B) - true value`,
  },
  {
    title: 'The If statement',
    answer: `Structures whose implementation of the algorithm is divided into branches depending on whether a condition is true or false are called branched. For its implementation, the If operator is used. Its general format is given as follows: If (condition) expression; else expression;
      otherwise, the fragment may not be present. If the condition contains several series of expressions, they must be enclosed in Figure brackets.
      if (expression) { sequence of expressions }
      else { sequence of expressions }
      If the expression given as a condition is true, expressions or oerators that follow if are executed, otherwise expressions or operators that follow else are executed. int x=0; if(x==0) x=x+5; (this expression is executed) else x=x;
    `,
  },
  {
    title: 'switch version statement',
    answer: `Structures whose implementation of the algorithm is divided into branches depending on whether a condition is true or false are called branched. Sometimes it can be implemented using the switch –selection operator. the switch operator subscription format is as follows:
      switch (variable whose condition is being checked) {
      case X1: pattern;
      case X2: pattern;
      case X3: pattern;
      default: expression;}
      In order for the program to run, a variable is assigned a value of some integer or string type. The same variable is written in parentheses of the switch operator. If the value of this variable coincides with one of the Keyes instructions, the corresponding expression is executed. And if none of them match, the corresponding expressions for the default instruction are executed.
    `,
  },
  {
    title: 'cyclic operators FOR loop',
    answer: `A cycle is the repetition of certain actions at certain intervals. In some cases, programming has to repeat the same operation. These are executed using loop operators. One of its types is the For loop subscription format, which looks like this:
    for (Initialized expression; condition;increment ) expression;
    if the expressions corresponding to the operator consist of several rows, they must be enclosed in special shaped brackets.
    for (INP; condition; increment) { expression sequence }
    The initialized expression defines the starting point of the loop. The condition to exit the loop is a Boolean expression. If it is false, the cycle ends. The loop starts with the value of the initialized expression and continues until the loop condition is false. And there is a counter that determines the step of changing its argument. This is the increment operator: I++ or decrement I., if the change step is different i=i+3; i=i+n.
    `,
  },
  {
    title: 'WHILE loops',
    answer: `A cycle is the repetition of certain actions at certain intervals. In some cases, programming has to repeat the same operation. These are executed using loop operators. It is a type of while loop subscription format:
    While (condition) expression;
    if the expressions corresponding to the operator consist of several rows, they must be enclosed in special shaped brackets.
    while (condition) {loop body;}
    The expression inside parentheses defines the condition: when (while) is executed, the expression inside the form parentheses is executed. First, the initial value is given to the ainmal, where the cycle takes place. From it, the same value is checked for the condition. If the condition is true, the loop starts and runs once. Then the value of the argument changes using the counter operator. The cycle will continue if the expression takes on a more true value in the condition. The loop stops when the condition is valid.
    `,
  },
  {
    title: 'DO-WHILE statements',
    answer: `A cycle is the repetition of certain actions at certain intervals. In some cases, programming has to repeat the same operation. These are executed using loop operators. One of its types is the do - while operator subscription format::
    do
    operator
    "I don't know," he said.
    Here, first of all, expressions are executed, and then the value of the argument changes through the counter. Unlike the For and while loops, the condition is checked at the end, and the do-while operator checks the condition at the end of each iteration. That is, at this point, the loop is executed once, even if the condition is false. You can create an infinite loop without changing the argument value. The loop is executed until the condition accepts a false value. The expressions corresponding to the Do-while operator are enclosed in square brackets if they consist of several increments.
    do { expression; or operator} while (condition); (logotype)
    If the loop body consists of a single pattern, then figure brackets are optional.
    `,
  },
  {
    title: 'Arithmetic expressions written in Java',
    answer: `Consider the Math class, which consists of various mathematical functions. Math.sin (a) – sinus Math.cos (a) – cosine Math.tan (a) – tangent Math.arxinus Math.ASOS (a) – arccosinus Math.atan (a) – Arctangence Math.log (a) – natural logarithm; Math.pow (x,y) –Y degree of x;
    Math.sqrt (a) – square root; Math.abs (a) – numerical module; Math.round (a) – rounding a number; Math.log (n) is the natural logarithm of the number n. Math.log10 (n) is the decimal logarithm of the number n. Math.PI is the number" Pi " with an accuracy of 15 decimal places. Math.E is the Nepper number (exponential function base).
    `,
  },
  {
    title: 'arithmetic operations',
    answer: `Arithmetic operations in mathematics include addition +, subtraction –, multiplication *, division / and remainder division%. The remainder division takes only an integer type. And the division is whole and real, while the other takes on a symbolic type as well. Access Operations are used to set conditions.`,
  },
  {
    title: 'communication operations',
    answer: `what? What the f*ck is this? So, whoever checked it, please tell the person who compiled this test that "WE ARE NOT PSYCHICS AND WE CANNOT READ YOUR THOUGHTS!". No, seriously, what does that mean?  What to communicate with? Or with Whom? With the user? With another program? With another thread in a multithreaded program?
    I'm sorry about that! 
    If this means communicating with another program, then this requires a server that would be a bridge.
    And in Java there is a class java.io and java.net for "COMMUNICATIONS". The first is a class for data input/output. And the second one is for sending and receiving requests over the network via the HttpURLConnection method.`,
  },
  {
    title: 'assignment operation',
    answer: `The property operation is represented by the symbol"=", on the left of which there is a variable, on the right-an expression that merges with the variable type: int a; a = 5; 
    The property operation is marked with a symbol. It calculates the operand on the right and assigns it to the operand on the left. 
    Description of a variable and assigning its initial value (also called variable initialization): float k1 = 13.3; cannot assign a value to a literal: 5 = a; // this is an error. If the variable is located to the right of the operator or is considered as an argument of some method, then its value is read. int w = a; any variable, if used before the first reading, must have some value. Otherwise, there will be an error in the compilation.  The property operation also returns the property value as the result. This value can be used by other operations (including other properties).  The sequence of execution of multiple ownership operations is performed from right to left.`,
  },
  {
    title: 'logical operators',
    answer: `The results of logical operations are usually two: true or false. If the result is true, the value is set to=1, and if false, the value is set to =0.
    The following four operators work with boolean-type data.& Logical and, / logical or, ^ logical cancel,!  Negative.
    && Conditional and if both are true, if at least one is false,then the result is false.  The / / conditional or operator returns true if at least one of the conditions is true. They are often used in the iF Design. 
    & = ,/=, ^ = analog operator property`,
  },
  {
    title: 'Java comparison operators',
    answer: `Comparison operations are used to set conditions. These are: equality ==, greater or equal>=, lesser or equal<=, unequal != , large >, small <.`,
  },
  {
    title: 'break statement to exit the loop. CONTINUE statements. ',
    answer: `The Break operator is used in the switch manual and in all types of loop operators. Application in the loop the break operator is used to stop the execution of the loop depending on the given condition. That is, the condition for its use is given. When the same condition accepts the true value, the cycle stops prematurely. example of using the break operator:
    class BreakVFor {
    public static void main(String args[]) {
    for(int i=0; i<=99; i=i+1) {
    if (i == 50) break; / / exit the loop if i is equal to 10
    System.out.println("i = " + i);}
    System.out.println ("cycle completed.");}} 
    As you can see, although the for loop must be executed from 0 to 99 for the value of the control variable, when the value of the variable i is 10, the break operator causes it to exit earlier.
    There are opportunities to pre-complete the next iteration of the loop, which disrupts the normal execution of the command. It is executed by The CONTINUE operator. For example, in the following program, The CONTINUE operator is used to output even numbers from 0 to 100.
    class  ContDemo {
    public static void main(String args[ ]) {
    int i;
    for (i=0; i<=100; i++)  {
    if ((i%2)!=0) continue ;
    System.out.println(i); }}}
    In this case, only even numbers come out. This is because odd numbers call the end of the next iteration, and the println() method is not called. in while, do-while loops, The continue expression prompts you to go directly to the expression that checks the condition, after which the loop continues to run. in the for loop, the end of the loop is checked and the iteration expression is calculated, after which the loop continues.
    `,
  },
  {
    title: 'comma operator',
    answer: `A comma is not an operator in JAVA. This
    is a comma-separated separator!! separating arguments for methods. Like this: someMethod(firstArg, secondArg). And also methods can accept parameters separated by commas. You can also create multiple counters for the For loop: for (i = 1, j = 2; i < max; i++, j++) {}`,
  },
  {
    title: 'processing cyclic structured programs',
    answer: `And what do you think that should mean?`,
  },
];
