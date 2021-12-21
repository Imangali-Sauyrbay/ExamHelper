module.exports = [
  {
    title: 'the Java language and its main achievements, commands',
    answer: `Java is a unique programming language, unlike other programming languages. Its main feature is that almost all computers are organized to facilitate work in the Internet browser environment. The Java language, like other programming languages, is not limited to working with graphics and static texts. The ability of the Javanese language to work with various dynamic objects is a fundamental feature of the language. Another feature of the programming language is that the written program does not depend on the type of device. The Java language is part of Object-Oriented Programming Languages. A program written in this language consists of objects that are closely related to each other. A program written in this language does not accumulate in the memory of specific processor commands, but accumulates in machine commands. This is called the Java Virtual Machine. This is a set of codes for executing commands together with the system. Java is a unique programming language, unlike other programming languages. The company that developed the Java programming language is Sun Microsystems. According to official data, this language was released on May 23, 1995. Speaking about the history of the development of the Java language, it is worth mentioning several development groups of its technologies. These include JavaSE, JavaEE, JavaME, JavaFX, and JavaCard. The main edition of Java is Java SE Java Standard Edition, a special feature of which is the presence of APIs, Java Runtime Environment compilers. The goal is to create user-friendly applications. The technology for creating enterprise-level software is called Java Enterprise Edition. Java EE consists of a special set of tools. The next Java development technology is Java Micro Edition. Its purpose is to be used in devices with limited computing capabilities, in particular in pocket phones and pocket computers. The next step in Java Development Technology in the form of a Rich Client Platform is JavaFX. Its goal is to create cooperative apps and various business platforms. Latest technology Java Card. As the name suggests, this technology is designed to create smart cards. It is also based on the development of applications designed to work on other structures with limited memory and processing capacity.`,
  },
  {
    title: 'Program structure',
    answer: `public class HelloWorld
    {
      public static void main(String[] args) {
        System.out.println("Hello World!");
      }
    }`,
  },
  {
    title: 'Different Types In the Java Language',
    answer: ``,
  },
  {
    title: 'writing individual characters',
    answer: ``,
  },
  {
    title: 'symbols and string constants',
    answer: ``,
  },
  {
    title: 'java virtual machine commands',
    answer: ` 0% antipl
    java - launch a Java application
    To launch a class file:
    java [options] mainclass [args ...]
    To launch the main class in a JAR file:
    java [options] -jar jarfile [args ...]
    To launch the main class in a module:
    java [options] -m module[/mainclass] [args ...]
    or
    java [options] --module module[/mainclass] [args ...]
    To launch a single source-file program:
    java [options] source-file [args ...]
    options
    Optional: Specifies command-line options separated by spaces. See Overview of Java Options for a description of available options.
    mainclass
    Specifies the name of the class to be launched. Command-line entries following classname are the arguments for the main method.
    -jar jarfile
    Executes a program encapsulated in a JAR file. The jarfile argument is the name of a JAR file with a manifest that contains a line in the form Main-Class:classname that defines the class with the public static void main(String[] args) method that serves as your application's starting point. When you use -jar, the specified JAR file is the source of all user classes, and other class path settings are ignored. If you're using JAR files, then see jar.
    -m or --module module[/mainclass]
    Executes the main class in a module specified by mainclass if it is given, or, if it is not given, the value in the module. In other words, mainclass can be used when it is not specified by the module, or to override the value when it is specified.
    source-file
    Only used to launch a single source-file program. Specifies the source file that contains the main class when using source-file mode. See Using Source-File Mode to Launch Single-File Source-Code Programs
    args ...
    Optional: Arguments following mainclass, source-file, -jar jarfile, and -m or --module module/mainclass are passed as arguments to the main class.
    `,
  },
  {
    title: 'Java language for data entry',
    answer: ` In to build the output stream to the System class. The object is defined. This object has several methods for extracting data. Data entry is performed by importing the Scanner object. It allows the user to enter a value corresponding to a variable without entering it in the program. To do this, we first import the scanner object using Import java util Scanner;. Subscription format:
    Scanner scan=new Scanner(System.in); A=scan.nextDouble (); in this case, the value of variable A is entered by the user after the program is executed. One thing to consider here is that input functions vary depending on the data types. For example, scan.nextDouble()scan.nextInt() scan.subscription formats for different types, such as nextFloat (), also vary.
    `,
  },
  {
    title: 'publish a stream for keyboard input',
    answer: `static void usingScanner() {
      Scanner scanner = null;
      try {
         System.out.println("Enter a random text");
         scanner = new Scanner(System.in);
         String input = scanner.nextLine();
         System.out.println("User Input is : " + input);
      } catch (Exception e) {
         e.printStackTrace();
      } finally {
         if (scanner != null) {
            scanner.close();
         }
      }
   }
   
   static void usingConsole() {
    Console console = System.console();
    if (console != null) {
       System.out.println("Enter a random text");
       String input = console.readLine();
       System.out.println("User Input is : " + input);
    } else {
       System.out.println("No console available");
    }
 }`,
  },
  {
    title: 'The Display class',
    answer: ``,
  },
  {
    title: 'input panel',
    answer: `Java language for data entry`,
  },
  {
    title: 'Data output',
    answer: `Out to create an output stream for the System class. The object is defined. This object has several methods for extracting data. The first is the println method. He moved to the next row after displaying the information on the screen. If you don't need to move to the next row, we use the print method. You can enter a method once and upload multiple data output to it. In this case, the data must be separated from each other by an addition symbol. The variable or any information that needs to be extracted is enclosed in parentheses. If there are explanatory words, you need to put additional quotation marks. The third method for extracting information is the prinf method, which provides formatting output of information. That is, when decimal numbers appear on the screen, the fraction is used only to produce the smallest fraction. You can also output values as exponential numbers.`,
  },
  {
    title: '.-даusing the operator in Javaдың қолданылуы',
    answer: `The break operator is used in the switch manual and in all types of loop operators. From English, BREAK translates as" Stop, break". Application in the loop the break operator is used to stop the execution of the loop depending on the given condition. That is, the condition for its use is given. When the same condition accepts the true value, the cycle stops prematurely. example of using the break operator: class BreakVFor { public static void main(String args[]) { for(int i=0; i<=99; i=i+1) { if (i ==50) break; / / exit the loop if i is equal to 10 System.out.println("i = " + i);} System.out.println ("cycle completed.");}} As you can see, although the for loop must be executed from 0 to 99 for the value of the control variable, when the value of the variable i is 10, the break operator causes it to exit earlier.`,
  },
  {
    title: 'array types in java',
    answer: ``,
  },
  {
    title: 'ways and means of building roads',
    answer: ``,
  },
  {
    title: 'principles of object-oriented programming',
    answer: ` The entire program written in the Javanese language consists of classes with their own name, which begins with the word servant class. Depending on the specifics of the program, a single program can contain several classes. The name of the class is written after the word servant. The class name can be freely chosen by the programmer. That is, he can write the right word. Parentheses will open after the class name. Then the cool body begins. All components in the class belong to the body of this class. After the end of the class body, you need to close the curved bracket. All actions in the program are performed by information processing methods. We say that they are just a method .The main parameters of the method and other arguments in the burned State are written one after another after the name of the method. They form a series of programs. Each line ends with a semicolon. Programs mainly use the main method. The word static is written in front of it. Its essence is to call the method.`,
  },
  {
    title: 'description of the class and subclass',
    answer: `Classes are the basis of Object-Oriented Programming. An object model or description is a class, and an object represents an instance of that class. The class description begins with the Class word, followed by the class name. The class name must be capitalized. A class is a class that has a class name that can be derived from a class name that can be derived from a class name that can be derived from a class name that can be derived from a class name that can be derived from a class name that can be derived from a class name that can be derived from a class name that can be derived from a class name that can be derived from a class name. In addition to the specificity of the program, the number of classes can be multiple in a single program. "I don't know," he said. The class name is specified by the programmer. That is to say, it is not. The name of the class is displayed on the next tab. Then the right class body starts. All components contained in a class represent the body of this class. The body of the class is completed, the end is completed. You can write public, static, abstract, private, final, strictfp,and protectedclass modifiers before SLASS.
    If no extensions are specified during the class description, i.e. the word extends and the class name are not written, then Java considers this class to be an extension of the object class, and the compiler writes this extension further by silent agreement: class Pet extends Object{ . . . } You can open this extension even more.
    `,
  },
  {
    title: 'онструктор k onstructor features',
    answer: `In addition to the usual methods, classes can define special methods called constructors. Constructors are called when creating a new object of this class. Designers perform object customization. If no constructor is defined in the class, then the constructor is created automatically without parameters for this class.The constructor exists in any class. Even if it is not written, the Java compiler creates the constructor itself with an agreed condition, but it cannot perform any actions other than calling the superclass constructor. When creating a copy of the class, the constructor is executed automatically. But there is one condition for this: memory must be allocated as much as possible. Then it starts as soon as the fields are empty and runs until the object we created is used. The constructor does not return any value. Void is not required in the constructor description, because the constructor does not return any values. However, modifiers can be used. Three modifiers, public, protected, or private, are suitable for it. The constructor does not belong to either a method or a class. We can describe the start of the constructor as follows: 1. calling one of the constructors of the superclass, in which case the word super() with parameters is written in parentheses; 2. calling another constructor of the same class, in which case the word this() with parameters is written in parentheses. In other cases, the constructor is seen as a simple method. So we can write any operator there. If there are several constructors in a class and they match the class name, you must enter a difference through some Register.`,
  },
  {
    title: 'Java packages',
    answer: `Typically, in Java, classes are combined into packages. Packages allow you to logically organize classes into collections. By default, java has several packages, such as java.lang, java.util, java.io in addition, packages can have built-in packages. Organizing classes as a package allows you to avoid name conflicts between classes. After all, there are often cases when developers call their classes by the same names. Guarantees the uniqueness of the names belonging to the package. You need to use the package directive to specify that the class belongs to a specific package, and then specify the package name. As a rule, package names correspond to the physical structure of the project, i.e. directory organizations where files with source code are located. The path to files in the project corresponds to the name of the package of these files. For example, if classes belong to the mypack package, these classes are placed in the mypackage folder in the project. Classes don't have to be defined in packages. If no package is defined for the class, it is assumed that this class is in the default package without a name.  If we need to use classes from other packages, we need to add these packages and classes. The exception is lang, where classes in the java package(for example, The String class) are automatically added to the program.`,
  },
  {
    title: 'placing packages by files',
    answer: `Java packages`,
  },
  {
    title: 'in the interface in the Java programp',
    answer: `An interface in Java is a blueprint of a class. It has static constants and abstract methods.

    The interface in Java is a mechanism to achieve abstraction. There can be only abstract methods in the Java interface, not method body. It is used to achieve abstraction and multiple inheritance in Java.
    
    In other words, you can say that interfaces can have abstract methods and variables. It cannot have a method body.`,
  },
  {
    title: 'the concept of applets',
    answer: `The Java language allows you to create applets. A Java applet is an application program written as bytecode, most often in the Java programming language. Java applets are executed in a web browser using a virtual Java machine (JVM) or in Sun's AppletViewer, a standalone applet testing tool. Java applets were introduced in the first version of Java in 1995. Java applets are usually written in the Java programming language, but can also be written in other languages compiled into Java bytecode, such as Jython. Advantages of using Java applets: the applet can work not only with the latest version, but also with" all " versions of Java installed so far; however, if the applet requires the latest version of JRE, the client will have to wait a long download; the applet is supported by many browsers; it is cached in many browsers and therefore loads quickly when returning to the Web page; but the applet can be stored in the cache and cause problems after the release of new versions;`,
  },
  {
    title: 'applet features',
    answer: `the concept of applets`,
  },
  {
    title: 'working with files',
    answer: `The concept of "flow" in programming is very numerous and can denote many different concepts. In this case, when it comes to working with files and I / O, we are talking about a stream (stream), such as an abstraction used to read or write information (files, sockets, console text, etc.). The stream is connected to a specific physical device via the Java I / O system. All other classes that work with threads are inheritors of these abstract classes. Main thread classes: the InputStream class is the base class that manages input threads for all classes. Let's look at the main methods: the OutputStream class is the base class for all classes that work with a binary record stream. The FileOutput Stream class is designed to write bytes to a file. It is derived from the OutputStream class, so all its functionality is inherited. The FileInputStream class is designed to read data from a file, which is the successor to the InputStream class and therefore implements all its methods. The FileInputStream and FileOutput Stream classes are primarily designed to write binary files, i.e. write and read bytes.`,
  },
];
