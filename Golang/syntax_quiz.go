/*
go get is used to add a module to the current program you’re working 
on so you can import it. This is like npm install

go install is used to install a go binary utility, so you can use 
it as a normal tool on your system. This is more equivalent 
to npm install -g. This isn’t used for importing a library, it’s 
for installing a self-contained go program.
*/
package main

import (
	"fmt"
	"strings"
)

func main(){

	// iterate over characters of abs and print to console
	test_string := "abc"

	for i, c := range test_string {
		fmt.Println(i, string(c))
	}

	test_sentence := strings.Fields("i am relearning go")
	// iterate over words and print to console
	for i, word := range test_sentence {
		fmt.Println(i, "-> ",word)
	}

	// change the test_string to a rune slice

	runes := []rune(test_string)

	// reverse the order of test_string
	for i, r := range runes {
		fmt.Println(i, string(r))
	}

}