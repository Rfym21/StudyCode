// 确定第一行能放几张图 n+1

    // 1.获取屏幕宽度
    // 2.获取图片的宽度
// 操作第 n+1 张 摆放位置 放在高度最小的那一列

    // 1.获取每一列的高度

    // 2.更改图片之后进行更新这一列的高度
    imgLocation('container','box');
    function imgLocation(parent,child) {
        let cParent =document.getElementById(parent);        
        let cChild =cParent.getElementsByClassName(child); 
        let screenWidth =window.innerWidth;
        let imgWidth =cChild[0].offsetWidth;
        let num =Math.floor(screenWidth/imgWidth);
        // cParent.style.width =`${imgWidth*num}px`;
        // console.log(cParent);
        // console.log(cChild);
        console.log(num);
        // console.log(screenWidth);
        var boxHeightArr =[];
        for(let i=0;i<cChild.length;i++){
            if(i<num){
                boxHeightArr.push(cChild[i].offsetHeight);
            }else {
                let minHeight =Math.min(...boxHeightArr);
                let minIndex =boxHeightArr.indexOf(minHeight);
                cChild[i].style.position ='absolute';
                cChild[i].style.top =`${minHeight}px`;
                cChild[i].style.left =`${cChild[minIndex].offsetLeft}px`;
                boxHeightArr[minIndex]+=cChild[i].offsetHeight;
            }
        }
        console.log(boxHeightArr);
    }

