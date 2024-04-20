## Running files

<!-- Steps for compiling and running program -->

1. create file e.g. TwoSum.java
2. add main method for standalone program
2. compile `javac TwoSum.java` which generates class file
3. run file `java TwoSum`

## Overview

Each Java program must have a main method. And each main method contains
parameters String[] args

```java
public class HelloWorld {
    public static void main(String[] args){
        System.out.println("Hello world, my name is " + args[0]);
    }
}
```
All arguments passed in command line are strings. 
Java only has methods associated with classes and no functions. 

## Printing

```java
System.out.print();
System.out.println();


```

## Variables
 
Data Type VaribleName = value;

Primitive 
int, double, boolean, char


## Looping

c style for loop 

```java
for (int i = 0; i <= myArray.length; i++) {
  // Do something
}

// for each can be used in maps, collections, and arrays

for (String s : myArray) {
  // Do something
}


```

## Methods

public - can be accessed by any part of the program including classes
static - can be called throughout program without creating an instance of class
void - does not return a value


## Parameters

```java
public static void exampleMethod(String greeting, String name) {
  System.out.println(greeting + " " + name);
}

public static void main(String[] args) {
  exampleMethod("Greetings", "Earthling"); // Prints: Greetings Earthling
  exampleMethod("Hello", "World"); // Prints: Hello World
  exampleMethod("Howdy", "Planet"); // Prints: Howdy Planet
}

```

## Returning a value

```java
// Method will return an int value
public static int findProduct(int num1, int num2) {
  return num1 * num2;
}
public static void main(String[] args) {
  int product = findProduct(3,4);
  System.out.println(product); // Prints: 12
}
```

## Arguments


## Syntax

### Arrays 

int[] nums = {2, 7, 11, 15};

Creating an Array:

Declare and initialize an array
int[] numbers = {1, 2, 3, 4, 5};

// Declare an array and then initialize it
int[] scores;
scores = new int[]{90, 85, 88, 92, 78};
Accessing Elements:

Access individual elements in an array using the square bracket notation:
int firstElement = numbers[0]; // Access the first element
Array Length:

To find the length (number of elements) of an array, you can use the length property:
int length = numbers.length;
Copying an Array:

You can use the Arrays.copyOf method to copy an array:
int[] copiedArray = Arrays.copyOf(numbers, numbers.length);
Sorting an Array:

Use the Arrays.sort method to sort an array in ascending order:
Arrays.sort(numbers);
Searching for an Element:

The Arrays.binarySearch method can be used to search for an element in a sorted array:
int index = Arrays.binarySearch(numbers, 3);
Filling an Array:

You can fill an array with a specific value using the Arrays.fill method:
Arrays.fill(numbers, 0); // Fills the array with zeros
Comparing Arrays:

Use the Arrays.equals method to compare two arrays for equality:
boolean isEqual = Arrays.equals(numbers, copiedArray);
Converting Array to String:

Use Arrays.toString to convert an array to a readable string:
String arrayAsString = Arrays.toString(numbers);

### Dictionaries 

Map<Integer, Integer> dictionary = new HashMap<>();

Adds a key-value pair to the map. If the key already exists, the value is overwritten.
map.put("key", "value");
get(Object key):

Retrieves the value associated with the specified key.

String value = map.get("key");
containsKey(Object key):

Checks if the map contains a specific key.
if (map.containsKey("key")) {
    // key exists
}
containsValue(Object value):

Checks if the map contains a specific value.
if (map.containsValue("value")) {
    // value exists
}
remove(Object key):

Removes the mapping for a key from the map.
map.remove("key");
size():

Returns the number of key-value mappings in the map.
int size = map.size();
isEmpty():

Checks if the map is empty.
if (map.isEmpty()) {
    // map is empty
}
keySet():

Returns a Set view of the keys contained in the map.
Set<String> keys = map.keySet();
values():

Returns a Collection view of the values contained in the map.
Collection<String> values = map.values();
entrySet():

Returns a Set view of the key-value mappings contained in the map.
Set<Map.Entry<String, String>> entrySet = map.entrySet();

## Set 

add, remove, contains