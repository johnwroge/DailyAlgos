
/*
Write a program that prints out the numbers 1 to 100 (inclusive).
 If the number is divisible by 3, print Crackle instead of the number. 
 If it's divisible by 5, print Pop. If it's divisible by both 3 and 5,
  print CracklePop. You can use any language.
  */


package main
 import (
	"fmt"
 )
 func main(){
	for i := 1; i < 101; i++ {
		if i % 3 == 0 && i % 5 == 0 {
			fmt.Println("CracklePop");
		} else if i % 3 == 0 {
			fmt.Println("Crackle");
		} else if i % 5 == 0 {
			fmt.Println("Pop");
		} else {
			fmt.Println(i);
	   }  
	}
 }