var table;
var type;  // 1 障碍物 2 起点 3 终点
//x 行  y 列的网格节点
function createtable(params) {
    var x = parseInt(document.getElementById("rnum").value);
    var y = parseInt(document.getElementById("cnum").value);

    var mytablehtml = "<table class='stytab'>";
    table = new Array(x * y);

    for (var i = 0; i < table.length; i++) {
        // table[i]=new Array(y);  
        var obj = {};
        obj.x = Math.round(i / y) + 1; //x 坐标
        obj.y = i % y + 1; //y坐标
        obj.f = 0;
        obj.g = 0;
        obj.h = 0;
        obj.useable = 1;
        table[i] = obj;
        //增加行
        if (i % y == 0) {
            mytablehtml += "<tr>";
        }
        //增加列
        mytablehtml += "<td  onclick='change(this)' id='" + (Math.round(i / y) + 1).toString() + (i % y + 1).toString() + "'></td>";

        // 增加行结束
        if (i % y == y - 1) {
            mytablehtml += "</tr>";
        }

    }


    mytablehtml += " </table>";
    document.getElementById("mytable").innerHTML = mytablehtml;
}
//设置 节点类型 1 障碍物   2起点  3终点
function setType(params) {
    type = params;

}
var sflag=0;
var eflag=0;
function change(params) {
    var cur = params;
    if (type == 1) {
        if (cur.style.background == "gray") { //第二次点击则还原
            cur.style.background = "black";
        }
        else {
            cur.style.background = "gray";
        }

    }
    else if (type == 2) {  // 起点
        
        if (cur.style.background == "green") {
            cur.style.background = "black";
            sflag=0;
        }
        else if(sflag==0){
            cur.style.background = "green";
            sflag=1;
        }
    }
    else if (type == 3) { //终点
        if (cur.style.background == "red") {
            cur.style.background = "black";
            eflag=0;
        } else if(eflag==0){
            cur.style.background = "red";
            eflag=1;
        }
    }

}

//a* 算法计算
function a_calculate(params) {

}
