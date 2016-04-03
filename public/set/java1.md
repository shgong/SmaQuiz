### 1. Array Print
```java
int[][] A={{0,1,2},{3,4,5,6}};
System.out.print(A[0].length+" "+A[1].getClass().isArray()+" "+A[0][1]);
```
What is the result? 

<a-->3 true 1<a-->3 false 1<a-->2 false 3<a-->2 true 3<a-->2 true 1<a-->2 false 1<a-->3 false 3<q-->

### 2. String condition
```java
String valid = "true";
if(valid) System.out.println("valid");
else      System.out.println("not valid");
```

What is the result? 

<a-->Compilation fails<a-->Valid<a-->Not Valid<a-->An IllegalArgumentException thrown at runtime<q-->

### 3. Exception Method
An unchecked exception occurs in a method dosomething().
Should other code be added in the dosomething() method for it to compile and execute? <a-->
The Exception must be caught <a-->
The Exception must be declared to be thrown. <a-->
The Exception must be caught or declared to be thrown. <a-->
No other code needs to be added.<q-->

### 4.ScopeTest

What is the result? 

```
public class ScopeTest{
    int z;
    public static void main(String[] args){
        ScopeTest myScope = new ScopeTest();
        int z=6;
        System.out.println(z);
        myScope.doStuff();
        System.out.println(z);
        System.out.println(myScope.z);
    }
    void doStuff(){
        int z=5;
        doStuff2();
        System.out.println(z);
    }
    void doStuff2(){
        z=4;
    }
}
```

<a--> 6 5 6 4

<a--> 6 5 6 6

<a--> 6 5 6 5

<a--> 6 5 5 4<q-->

### 5. Increment
```
int b=4;
b--;
System.out.println(--b);
System.out.println(b);
```
<a--> 2 2
<a--> 3 3
<a--> 3 2
<a--> 1 2
<q-->

### 6. Array Print
```
int [][] array = {{0},{0,1},{0,2,4},{0,3,6,9},{0,4,8,12,16}};
System.out.println(array[4][1]);
System.out.println(array[1][4]);
```

<a--> 4 An ArrayIndexOutOfBoundException is thrown at run time

<a--> Null 4

<a--> An IllegalArgumentException is thrown at run time

<a--> 4 Null<q-->

### 7. How many times is 2 printed
```
String[] table = {"aa","bb","cc"};
for (String ss:table){
    int ii = 0;
    while(ii<table.length){
        System.out.println(ss+", "+ii);
        ii++;
    }
}
```
<a--> 3
<a--> 1
<a--> 2
<a--> 0
<q-->
### 8. Which action would not permit the class to compile
```
import java.io.IOException;
class Y {
    public static void main(String[] args){//Line1
        try {
            doSomething();
        }
        catch (RuntimeException e) {
            System.out.println(e);
        }
    }
    static void doSomething() {//Line 2
        if (Math.random() > 0.5) throw new RuntimeException();//Line 3
        throw new IOException();//Line 4
    }
}
```

<a--> Adding throws IOException to the main() method signature and changing the catch argument to IOException

<a--> Adding throws IOException to the dosomething() method signature and changing the catch argument to IOException

<a--> Adding throws IOException to the main() method signature and to the dosomething() method
<q-->

### 9. Which statement, when inserted into line 5, is valid change?

Given: Which statement, when inserted into line 5, is valid change?
```
public class SampleClass {
    public static void main(String[] args){
        AnotherSampleClass asc = new AnotherSampleClass();
        SampleClass sc = new SampleClass();
        // insert code here
    }
}
class AnotherSampleClass extends SampleClass {
}
```

<a--> asc = sc;

<a--> asc = sc.clone ()

<a--> sc = asc;

<a--> asc = (object) sc;<q-->

### 10. What is the result?

Given the code fragment: What is the result?
```
System.out.println("Result: "+2+3+5);
System.out.println("Result: "+2+3*5)
```

<a--> Result: 235 Result: 215

<a--> Result: 235 Result: 17

<a--> Compilation fails

<a--> Result: 10 Result: 17<q-->

### 11. Which code fragment is illegal?
<a-->
```
class Abs1 {
    abstract void method();
}
class Base1 extends Abs1 {}
```
<a-->
```
abstract class Base1 {
    abstract class Abs1{ 
        void method(){} 
    }
}
abstract class Abs2 extends Base1{}
```
<a-->
```
class Base1 {
    void method(){ }
}
abstract class Abs1 extends Base1{}

```
<a-->
```
class Base1 {
    abstract class Abs1{ }
}
abstract class Abs1 extends Base1 {}
```
<q-->
### 12. What is the result?

```
String theString = "Hello, world!";
System.out.println(theString.charAt(11));
```

<a--> A StringIndexOutOfBoundsException is thrown at runtime

<a--> An ArrayIndexOutOfBoundsException is thrown at runtime

<a--> A NullPointException is thrown at runtime

<a--> A StringArrayIndexOutOfBoundsException is thrown at runtime<q-->

### 13. What is the result?

Given: What is the result?

```
String message1 = "Wham bam!";
String message2 = new String("Wham bam!");

if(message1==message2) System.out.println("They match");
if(message1.equals(message2)) System.out.println("They really match");
```

<a--> They really match

<a--> Nothing

<a--> They match They really match

<a--> They match<q-->

### 14. Which lines will compile and output “right on!”?

```
1.  public class Speak {                         
2.      public static void main(String[] args) { 
3.          Speak speakIT = new Tell();          
4.          Tell tellIt = new Tell();            
5.          speakIT.tellItLikeItIs();            
6.          (Truth)speakIt.tellItLikeItIs();     
7.          ((Truth)speakIt).tellItLikeItIs();              
8.          (Truth)tellIt.tellItLikeItIs();      
9.          ((Truth)tellIt).tellItLikeItIs();    
10.     }
11. }
12. class Tell extends Speak implements Truth {
13.     public void tellItLikeItIs() {
14.         System.out.println(“Right on!”);
15.     }
16. }
17. interface Truth { public void tellItLikeItIs()};
```
<a--> 7, 9
<a--> 5, 6, 7, 8, 9
<a--> 8, 9
<a--> 6, 7, 8, 9
<a--> 9
<a--> 5, 6, 7 <q-->

### 15. Which is valid declarations of a two-dimensional array?

<a--> int [] array2D [];
<a--> int [] [] array2D [];
<a--> int [2] [2] array2D;
<a--> int array2D [];<q-->

### 16. Which is good practice?

Which three are bad practices?

<a--> Checking for an IOException and ensuring that the program can recover if one occurs

<a--> Checking for ArrayIndexoutofBoundsException when iterating through an array to determine when all elements have been visited

<a--> Checking for Error and. If necessary, restarting the program to ensure that users are unaware problems

<a--> Checking for ArrayIndexoutofBoundsException and ensuring that the program can recover if one occur<q-->

### 17. Which class has a default constructor?
```
class X{}
class Y{Y(){}}
class Z{Z(int i){}}
```
<a--> X only

<a--> Y only

<a--> Z only

<a--> X and Y

<a--> Y and Z

<a--> X and Z

<a--> X, Y and Z<q-->

### 18. Which declaration will compile?

<a--> int a, b, c = 0;

<a--> int k, l, m; = 0;

<a--> int a, b, c;

<a--> int g, int h, int i = 0;<q-->

### 19. Which statement initializes a stringBuilder to a capacity of 128?

<a--> StringBuilder sb = new StringBuilder (128);

<a--> StringBuilder sb = new String (“128”);

<a--> StringBuilder sb = StringBuilder.setCapacity (128);

<a--> StringBuilder sb = StringBuilder.getInstance (128);<q-->

### 20. DO while
```
String[] table = {"aa","bb","cc"};
int ii = 0;
do 
    while (ii<table.length)
        System.out.println(ii++);
while (ii<table.length)
```
You are here: Home >  Oracle Questions & Answers > 1Z0-803 (v.3) > What is the result?
What is the result?
Posted by seenagape on December 27, 2015 Leave a comment (0) Go to comments
### What is the result?

Given: What is the result?
<a--> 0 1 2
<a--> 0 1 2 0 1 2 0 1 2
<a--> Compilation fails
<a--> 0<q-->

### 21. What is the result?

A method is declared to take three arguments. A program calls this method and passes only two arguments. What is the result?

<a--> Compilation fails.
<a--> An exception occurs when the method attempts to access the third argument.
<a--> The third argument is given the value null.
<a--> The third argument is given the value void.
<a--> The third argument is given the value zero.
<a--> The third argument is given the appropriate false value for its declared type.<q-->

### 22. Arraycopy
```
int [] array = {1,2,3,4,5};
System.arraycopy(array,2,array,1,2);
System.out.println(array[1]+array[4]);
```
<a--> 35

<a--> 34

<a--> 25

<a--> 24

<a--> 14

<a--> 15<q-->

### 23. Which is not advantage of the Java exception mechanism?

<a--> Provides a set of standard exceptions that covers all the possible errors

<a--> Improves the program structure because the programmer can choose where to handle 
exceptions

<a--> allows the creation of new exceptions that are tailored to the particular program being

<a--> Improves the program structure because the error handling code is separated from the normal program function<q-->
