## 2 - Hello World Program

With C++, one can write procedural as well as object-oriented programs. However, Java follows object-oriented paradigm pretty strictly. We can appreciate this fact better after we have a look at our first Java program. 

### 2.1 - The First Java Program

> We assume that JDK8 is installed on your machine.

The following program simply prints **"Hello World!"** on the console. However, even such a simple program involves a little more work than you would imagine. 

```Java
/* This file has the name - "HelloWorld.java"
*/
class HelloWorld {
    // main() function of Java
    public static void main(String args[]) {
        System.out.println("Hello World!");
    }
}
```

For most computer languages, the name of the file that holds the source code of the program is immaterial. However, this is not the case with Java. The first thing to learn about Java is that the name one gives to a source file is very important. It should match with the class name containing the main() function. (In Java, we don't use the term _function_ like in C/C++. We use the term _method._ However, both are exactly the same and _what is in the name?_ Hence, I might use the terms interchangably.)

_But why such a restriction on the filename?_ This has to do with the optimizations and the way java compiler makes the bytecode. In C++, the main() function is written in open and not within a class. So searching for main() function isn't a big deal for compiler there. But here in java, it is enclosed within a class. In a single file, there can be multiple classes. So the compiler gets to in which class the main() function resides via the filename. 

Let's look at the main() function within the class. In its declaration, `public static void` is used. Since main() is within a class and is supposed to be called by an external software viz. JVM, it has to be `public`. Secondly, the function could be called directly using the class name without creating its object instance, if the function is declared `static`. And `void` specifies that main() doesn't return anything. And it's not like that if we use `int` instead of `void`, then we will be writing `return 0;` statement at the end. In Java, the main() function must not return anything and always has the return type of `void`. 

In C++, we used `int argc, char* argv[]` as parameters of the main() to receive any parameters from the command-line. Just like that, in Java, we use `String arr[]` which receive the parameters from the command-line. In Java, we can find the length of the array as `arr.length`, hence there is no need to pass separate argument count like `argc`. 

Finally within main(), we are using `println()` function to print a line having the contents **'Hello World!'**. Recall that we needed `#include<iostream>` in C++ to use `cout` or `printf()`. But here we are not including any header files. _Then from where is this `println()` coming?_ In Java, there is no concept of header files; instead we have _packages_ here. And the by default package of Java, which includes the language utilities like I/O, named `java.lang` is automatically imported by javac while creating the bytecode. 

Packages are nothing but the collection of classes. So `System` is the final/outermost class defined in the `java.lang` package. Inside the `System` class, `out` is defined as the public and static instance of `PrintStream` class. Inside `PrintStream` class, `println()` method is defined publicly. And since `out` is an instance of `PrintStream` class, we can invoke all the public methods of `PrintStream` using `out`. And here we are using `.` (dot notation) to access data and methods within a class, in contrast of `<<` in C++, because Java doesn't support operator overloading. 

### 2.2 - Compiling our First Java Code

It's now time to compile and execute the above program. For that, we use the `javac` command (java compiler) that will create a file **HelloWorld.class** which contains the bytecode version of the program. This contains the instructions which could be understood by the JVM. We send this file to JVM by using `java` command and it will run the program and produce the desired output. 

```bash
$ javac HelloWorld.java 
$ java HelloWorld
  Hello World!
$
```

<hr/>

We have successfully learnt how to write a basic Java program and compile it on command-line. In the upcoming lectures, we will write more complex programs. 