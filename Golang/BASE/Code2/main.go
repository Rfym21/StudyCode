package main

import (
	"fmt"
	"unsafe"
)

func main() {
	// 有符号整数,范围-128~127,超出报错
	var age int8 = 127
	fmt.Println(age)

	// 打印数据类型
	fmt.Printf("age的类型是%T\n", age)
	// 打印数据类型占用的字节数
	fmt.Printf("age占用的字节数是%d\n", unsafe.Sizeof(age))
}
