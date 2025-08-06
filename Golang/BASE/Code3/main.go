package main

import "fmt"

func main() {
	var (
		n1 float32 = 3.14
		n2 float32 = 314e-2
		n3 float32 = 314e+2
	)
	fmt.Println(n1, n2, n3)
}