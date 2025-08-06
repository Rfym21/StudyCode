package main

import "fmt"

func main() {
	// byte类型,相当于uint8，int等价于int32
	var b byte = 255
	// 当赋值为byte类型时，会自动转换为uint8类型，其值为该字符的ASCII码值
	var c byte = 'A'
	fmt.Println(b, "ASCII码值为", c)
	// 因为本质上是uint8类型，所以可以进行加减运算
	var d byte = 'A' + 1
	fmt.Println("B的ASCII码值为A+1=", d)
	fmt.Printf("d是%c\n", d)
}