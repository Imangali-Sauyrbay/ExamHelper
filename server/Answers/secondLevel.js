module.exports = [
  {
    title: 'One-dimensional arrays Processing programs using one-dimensional arrays',
    answer: `In programming, an array is a set of uniform variables stored in mixed Ram cells. The description of arrays is divided into three stages: declaration, definition, and initialization. At the first stage, the array type is defined and the array is named. At the second stage, the size of the array is determined. That is, the number of elements. Array elements are numbered starting from 0. If an array consists of 10 elements, then after the name of the array, we write the number 10 in square brackets, and this array does not contain the tenth element, the last element is the ninth. In the third stage, we give the array elements from the value. The initial values can be passed individually or written in a comma in parentheses after the array name. In this case, it is optional to specify the number of array elements, which is equal to the number of original values;
    float [] a = {2.00; 5.15; 7.77; 9.98; -1.11; 5.25; 100.001};
    The second and third stages can also be combined:
    a = new double[] {1.01; 20.02; 3.33; 4.54; 7.777; 9.97};
    You can also create an array without a name in Java. To do this, we immediately use the result of the new operation.
    `
  },
  {
    title: 'Two-dimensional arrays Processing programs using two-dimensional arrays',
    answer: `In programming, an array is a set of uniform variables stored in mixed Ram cells. A two-dimensional array is an array consisting of arrays, that is, each row of the array contains one array. It is clear to represent two-dimensional arrays as a matrix in the form of a table. In it, the first dimension determines the number of rows, and the second dimension determines the number of columns. The product of these two dimensions determines the number of Matrix elements. The position of Matrix elements is determined by two numbers-indexes: row number (i) and column number (j). Elements whose indices are equal are the main diagonal of the matrix: i=j; If i < j, the elements of the matrix are located at the top of the main diagonal; if j < i, the elements of the matrix are located at the bottom of the main diagonal; if the elements located symmetrically relative to the main Diagonal A[i, j]=a[j, I] are equal, The Matrix is called symmetric,, where A[i, j] are the elements of the Matrix A.`
  },
  {
    title: 'Reference to one-dimensional arrays',
    answer: `Objects, which is an array, are complex data types. This means that if we have a variable arr to which we allegedly assigned an array, it does not contain an array inside itself. And how to understand it?  for example, int num contains a number inside itself. And if we do like this int num2 = num; then we just copy the number. But if you do this with arrays, will they be copied? The answer is no!. Let's go back to the beginning. The array contains a reference to the memory area in which the data is stored. Even if you diligently assign arrays to other arrays, the data will still remain the only one. For example, we have an array of numbers numer and an uninitialized array of numbers numArr2. If we do like this numerr2 = num Arr; num Arr 2[1] = 15; System.out.print("number[1]"); then 15 will come out because we just changed it from the copied link.`
  },
  {
    title: 'Working with rows. The String class',
    answer: `A string is a sequence of symbols. In Java, The string class is defined to work with strings, which provides a number of methods for managing strings. When working with strings, it is important to understand that the String object is immutable (immutable). String class methods: concat (): combines strings. valueOf (): converts an object to a string type. join (): adds strings taking into account the separator. somrage (): compares two lines. charAt (): returns a string character by index. getChars (): returns a group of characters. equals (): compares strings with Case values. equalsIgnoreCase (): compares strings without taking case into account. regionMatches (): compares subtypes in strings. indexOf (): finds the index of the first entry of a small string to the string. lastIndexOf (): finds the last entry index of a string in the string. startsWith (): specifies whether a string starts with a subnet. endsWith (): defines the end of a string to a specific subtree. replace (): replaces one small string in the string with another. trim (): deletes the initial and final spaces. substring (): returns a substring from a specific index to the end or to a specific index. toLowerCase (): converts all string characters to a lower case. toUpperCase (): converts all string characters to the upper case.`
  },
  {
    title: 'Operations applied to rows',
    answer: `There are many types of objects in Java, one of which is with texts . There are two classes for them, the first of which is string and the second is stringBuffe. Components stored in objects of the String class are string constants. Their character is constant in length and has its own content. This makes it easier to work with paths and saves memory by separating paths between objects that use them. String lengths stored in StringBuffer class objects can be changed by inserting and adding strings and symbols, deleting underscores, or combining multiple strings into a single string. In the String class, we can't change the string length, so to change the specified string length,the compiler converts the string to the stringBuffer type, which changes the string length, and then can be converted back to the string type if necessary.List of methods supported by the StringBuffer class: public StringBuffer append(String s) - updates the value of the object generated by the method.This method accepts boolean, char, int, long, Strings, etc. public StringBuffer reverse () - the StringBuffer generated by the method changes the object value. public delete ( int start, int end) - deletes the string from the original index to the last Index
    public insert ( int offset, int i) - this method inserts a string s into the specified position by moving it
    replace (int start, int end, String str) - this method replaces characters in this string with characters in the specified string.
    `
  },
  {
    title: 'Graphics',
    answer: `Java supports the 2D application programming interface, which allows you to create 2D graphics in very high quality. The Java 2D API consists of classes with predefined Java Functions or methods that allow the programmer to perform geometric transformation, image processing, Alpha Composite, and many other advanced graphical developments. The Java 2D API is part of the Java 2 platform. Below are the packages that make up the 2D API: AVT, awt.image, awt.color, awt.font, awt.geom, awt.print, awt.image.renderable.
    The Java 2D API extends the Abstract Windows Toolkit (AWT) toolkit, which allows you to edit two-dimensional graphics and images. The package consists of a multi-functional user interface, a fully functional development environment for drawing programs and image editors. With the Java 2D API, you get support for the following features: this allows you to print complex documents. It provides color management with an extended set of colors. The package includes a wide range of ready-to-use geometric structures, such as curves, squares, triangles, and rectangles. The package allows you to visualize any shape very intuitively. To maintain the same quality during the design process, if necessary, demonstration tips will appear
    `
  },
  {
    title: 'Graphical methods',
    answer: `The Javanese language has many functions for processing graphical information. For example, we will use the drawLine function to draw a straight line with a certain color through a certain coordinate. It is written as follows: drawLine(a1, b1, a2, b2). Where A1 and B1 define the color, A2 and B2 define the coordinate. The next function is drawRect(a, b, w, h). This is used to draw a rectangle. Where A and B are the starting point, and w, h determine the length and width. The Draw3Drect function is designed to draw a rectangle in the format of a three-dimensional graph that is separated from the space. You can use the drawOval(a, b, w, h) function to draw an arc. Where A and B are the starting point, and W, h determine the short and long diameters. If we give the size of two diameters equal, we can draw a circle with this function. And there is a drawArc(x, y, w, h, start, arc) function to draw an arc or circle inside a rectangle. Start-the starting angle, arc-determines the degree of the arc, w and h are the dimensions of the rectangle. There are also a number of functions, such as DrawRoundRect for drawing a rectangle whose sides are oval, and drawPolyline for drawing a polygonal shape consisting of broken sides.`
  },
  {
    title: 'Графикалық функцияларды қолданып Processing programs using graphical functions',
    answer: `Graphics Graphical methods`
  },
  {
    title: 'Java programs with a graphical interface',
    answer: `Graphics Graphical methods`
  },
  {
    title: 'Applets',
    answer: `The Java language allows you to create applets. A Java applet is an application program written as bytecode, most often in the Java programming language. Java applets are executed in a web browser using a virtual Java machine (JVM) or in Sun's AppletViewer, a standalone applet testing tool. Java applets were introduced in the first version of Java in 1995. Java applets are usually written in the Java programming language, but can also be written in other languages compiled into Java bytecode, such as Jython. Advantages of using Java applets: the applet can work not only with the latest version, but also with" all " versions of Java installed so far; however, if the applet requires the latest version of JRE, the client will have to wait for a long download; the applet is supported by many browsers; it is cached in many browsers and therefore loads quickly when returning to the Web page; but the applet can be stored in the cache
    Example. AuezovUniversity applet
    import java.awt.*;
    import java.applet.*;
    public class AuezovUniversity extends Applet{
    public void paint(Graphics g){
    g.drawstring("AuezovUniversity", 10, 30); } }
    This program is AuezonUniversity.it is written to a java file and compiled as usual:
    javac AuezovUniversity.java
    `
  },
  {
    title: 'Creating classes and objects',
    answer: `Classes are the basis of Object-Oriented Programming. An object model or description is a class, and an object represents an instance of that class. The description of the class begins with the word class, followed by the name of the class. The class name must be capitalized. All progamma written in the Javanese language consists of classes with their own name, starting with the word class Servant. If you want to create a new class, you can create a new class in the same class, or you can create a new class in the same class in the same class in the same class in the same class. After the word servant, the name of the class is written. The class name can be freely chosen by the programmer. That is, he can write the word he wants. After the class name, a square bracket opens. Then the class body begins. All components contained in a class belong to this class body. After the class body is completed, the square brackets must be closed. You can write class modifiers public, static, abstract, private, final, strictfp, and protected before the word SLASS. If no extensions are specified during the class description, i.e. the word extends and the class name are not written, then Java considers this class to be an extension of the object class, and the compiler writes this extension further by silent agreement: class Pet extends Object{ . . . } This extension can be written even more deciphered.`
  },
  {
    title: 'Constructors and initialization blocks',
    answer: `In addition to the usual methods, classes can define special methods called constructors. Constructors are called when creating a new object of this class. Designers perform object customization. If no constructor is defined in the class, then the constructor is created automatically without parameters for this class.The constructor exists in any class. Even if it is not written, the Java compiler creates the constructor itself with an agreed condition, but it cannot perform any actions other than calling the superclass constructor. When creating a copy of the class, the constructor is executed automatically. But there is one condition for this: memory must be allocated as much as possible. Then it starts as soon as the fields are empty and runs until the object we created is used. The constructor does not return any value. Void is not required in the constructor description, because the constructor does not return any values. However, modifiers can be used. Three modifiers, public, protected, or private, are suitable for it. The constructor does not belong to either a method or a class. We can describe the start of the constructor as follows: 1. calling one of the constructors of the superclass, in which case the word super() with parameters is written in parentheses; 2. calling another constructor of the same class, in which case the word this() with parameters is written in parentheses. In other cases, the constructor is seen as a simple method. So we can write any operator there. If there are several constructors in a class and they match the class name, you must enter a difference through some Register.`
  },
  {
    title: 'Static methods in Java',
    answer: `Static methods are defined as a fragment of a program that is given some name and can be used to call the rest of the program under this name. When calling, actions are performed that are re-calculated (superimposed) inside the method (in its description or body). In Object-Oriented Programming, the main task of methods is to change the current state of the object, but methods continue to be introduced in the program until objects are not yet used. A method described inside a class, but called without an application to a specific object of that class, is called a static method. In addition to the name and description, The method also has other types of characteristics: 1.Assembly of modifiers. 2.the type of values to return. 3.collect arguments (parameters). To create a static method, you must specify the static modifier before its name. If this is not done, then you can only call the method to a specific object of the class specified in the application (it will be non-static). the public modifier means that this method can be used from anywhere; instead of public, you can specify levels that can be used by private or protect, and you can also specify nothing, in which case the level of use when silent acts. Java methods can be divided into 2 groups: functions and procedures.`
  },
  {
    title: 'Method modifiers Excessive methods',
    answer: `The signature of a method refers to the sum of its name and the collection of Formal Parameters. Java allows you to create multiple methods with the same name, but with different signatures. Creating a method with the same name, but with a different parameter collection is called excessive. When calling redundant methods, Java defines them based on actual parameters. Variable A does not belong to the double type, but it is processed by the original method, since it can be autocomplete from int to double. In the opposite direction, it is impossible. If the method had an argument of type int, then it would not be possible to output real numbers using it. Excessive methods implement important properties in programming, such as polymorphism. Programming code is called polymorphic if it is associated with the same common name, but can be implemented differently. For specific methods, polymorphic refers to their overexertion, and the choice of overexertion is made by the parameter. Polymorphism: one name, many forms. In Java, recursive methods can be created, i.e.,simply put, these methods call themselves.`
  },
  {
    title: 'Recursion',
    answer: `The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursive function. Using recursive algorithm, certain problems can be solved quite easily.`
  },
  {
    title: 'Packages and interface',
    answer: `Typically, in Java, classes are combined into packages. Packages allow you to logically organize classes into collections. By default, java has several packages, such as java.lang, java.util, java.io in addition, packages can have built-in packages. Organizing classes as a package allows you to avoid name conflicts between classes. After all, there are often cases when developers call their classes by the same names. Guarantees the uniqueness of the names belonging to the package. You need to use the package directive to specify that the class belongs to a specific package, and then specify the package name. As a rule, package names correspond to the physical structure of the project, i.e. directory organizations where files with source code are located. The path to files in the project corresponds to the name of the package of these files. For example, if classes belong to the mypack package, these classes are placed in the mypackage folder in the project. Classes don't have to be defined in packages. If no package is defined for the class, it is assumed that this class is in the default package without a name. If we need to use classes from other packages, we need to add these packages and classes. The exception is lang, where classes in the java package(for example, The String class) are automatically added to the program.
    In javada, the inheritance mechanism is very convenient, but it has its limitations. In particular, unlike C++, which has multiple inheritance, we inherit only one class. In Java, interfaces can partially solve a similar problem. Interfaces define some functions that are not actually implemented, and then implement classes that use these interfaces. A single class can use many interfaces. The interface keyword is used to define the interface. The interface can define constants and methods that may or may not be executed. Methods that are not implemented are similar to abstract class methods. So, in this case, one method was announced that cannot be implemented. By default, all methods in the interface actually have a public modifier. However, starting with Java 9, we can define methods that have their own modifier in the interface. They can be static or non-static, but they can't be implemented by default. Similar methods can only be used in the interface itself, where they are defined. 
    `
  },
  {
    title: 'Describe the variables needed to calculate the surface area and volume of the cylinder',
    answer: `Variables used to calculate the surface area and volume of a cylinder:
    H - cylinder height
    R-radius of the base
    S – surface area
    V-volume
    These variables are characterized by the double type, which refers to the type of real numbers.
    Double H, R, S, V;
    `
  },
  {
    title: 'Describe the variables needed to calculate the price of an item that consists of several notebooks, a pencil, and a ruler.',
    answer: `Variables required to calculate the price of a purchased item, consisting of several notebooks, pencils, and a ruler:
    N1-number of notebooks
    N2-number of pencils
    N3-number of liners
    S1-price per dabter
    S2-price per pencil
    S3-price per ruler
    S-Summa
    Here, the number of notebooks, pencils, and rulers is characterized by an integer type. And it is better that the prices are characterized by a specific type.
    Int N1, N2, N3;
    Double S1, S2, S3;
    `
  },
  {
    title: 'Describe the variables needed to calculate the price of a purchased item that consists of several notebooks and the same number of notebooks.',
    answer: `Variables required to calculate the price of a purchased item:
    N1-number of notebooks
    N2-number of digital dappers
    S1-price per dabter
    S2 - digital notebook price
    Here, the number of notebooks is characterized by an integer type. And it is better that the prices are characterized by a specific type.
    Int N1, N2;
    Double S1, S2;
    `
  },
  {
    title: 'Describe the variables needed to calculate the perimeter and area of the rectangle.',
    answer: `Variables required for calculation:
    A is the length of the rectangle
    B is the width of the rectangle
    P – perimeter of the rectangle
    S is the area of the rectangle
    These variables are characterized by the double type, which refers to the type of real numbers.
    Double A, B, P, S;
    `
  },
  {
    title: 'Describe the variables needed to calculate the area of the triangle.',
    answer: `Variables required to calculate using the Heron formula:
    A-wall length
    B-length of the wall
    C-length of the wall
    S is the area of the Triangle
    These variables are characterized by the double type, which refers to the type of real numbers.
    Double A, B, C, S;
    `
  },
  {
    title: 'Describe the variables needed to calculate the area of the trapezoid.',
    answer: `Variables required to calculate the area of a trapezoid:
    A-the length of the upper sole
    B – length of the lower sole
    H-Height
    S – area of the trapezoid area
    These variables are characterized by the double type, which refers to the type of real numbers.
    Double A, B, H, S;
    `
  },
  {
    title: 'Describe the variables needed to calculate the volume of the cone.',
    answer: `Variables used to calculate the volume of a cone:
    H is the height of the cone height
    R-radius of the base
    V-Cone volume
    These variables are characterized by the double type, which refers to the type of real numbers.
    Double H, R, V;
    `
  },
  {
    title: 'Describe the variables needed to calculate the volume of the parallelepiped.',
    answer: `Variables required to calculate the volume of a parallepiped:
    A is the length of the parallepiped
    B is the width of the parallepiped
    C – height of the parallepiped
    V-the volume of the Parallepiped
    These variables are characterized by the double type, which refers to the type of real numbers.
    Double A, B, C, V;
    `
  },
  {
    title: 'Describe the variables needed to calculate the volume of a half cylinder.',
    answer: ``
  },
];
