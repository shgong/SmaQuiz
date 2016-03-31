## 1. What is the result?
```java
int[][] A={{0,1,2},{3,4,5,6}};
System.out.print(A[0].length+" "+A[1].getClass().isArray()+" "+A[0][1]);
```
<a-->3 true 1<a-->3 false 1<a-->2 false 3<a-->2 true 3<a-->2 true 1<a-->2 false 1<a-->3 false 3<q-->
## 2. What is the result?
```java
String valid = "true";
if(valid) System.out.println("valid");
else      System.out.println("not valid");
```
<a-->Compilation fails<a-->Valid<a-->Not Valid<a-->An IllegalArgumentException thrown at runtime<q-->
## 3. Exception Method
An unchecked exception occurs in a method dosomething().
Should other code be added in the dosomething() method for it to compile and execute? <a-->
The Exception must be caught <a-->
The Exception must be declared to be thrown. <a-->
The Exception must be caught or declared to be thrown. <a-->
No other code needs to be added.
