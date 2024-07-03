function a(cbB,cbC,cbD){
cbB(cbC,cbD)
}

function b(cbC,cbD){
  cbC(cbD)
}

function c(cbD){
  cbD()
}

function d(){}

a(b,c,d) 