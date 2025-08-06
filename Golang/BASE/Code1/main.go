package main

import "fmt"

// 全局变量
const PI = 3.14
const (
	classID = 1
	CodeID  = 1
)

func main() {
	// 声明变量,指定类型
	var age int = 18
	// 声明变量,不指定类型,自动类型判断
	var name = "John"
	// 省略var, 使用:=
	sex := "男"
	fmt.Println(sex, name, "刚满", age, "岁")

	// 一次定义多个变量
	var n1, n2, n3 int
	fmt.Println(n1, n2, n3)
	n4, n5, n6 := "猪", "🐷", "侠"
	fmt.Println(n4, n5, n6)

	fmt.Println("PI=", PI)
	fmt.Println("classID=", classID)
	fmt.Println("CodeID=", CodeID)
}
 