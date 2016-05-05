var table;
var type;  // 1 障碍物 2 起点 3 终点
//x 行  y 列的网格节点
function createtable(params) {
    sflag = 0;
    eflag = 0;
    startx = 0;
    starty = 0;
    endx = 0;
    endy = 0;
    min = 0;
    var x = parseInt(document.getElementById("rnum").value);
    var y = parseInt(document.getElementById("cnum").value);

    var mytablehtml = "<table class='tab-sty'>";
    table = new Array(x * y);

    for (var i = 0; i < table.length; i++) {
        // table[i]=new Array(y);  
        var obj = {};
        obj.x = Math.round(i / y) + 1; //x 坐标
        obj.y = i % y + 1; //y坐标
        obj.f = 0;
        obj.g = 0;
        obj.h = 0;
        obj.useflag = 1;//是否可用，用于区分关闭列表中的障碍物
        obj.openflag = 0;//是否在开启列表
        obj.closeflag = 0;//是否在关闭列表
        obj.parentID = 0;//父节点 ID
        obj.eid = (Math.round(i / y) + 1).toString() + (i % y + 1).toString();//对应的表格元素的td.ID
        table[i] = obj;
        //增加行
        if (i % y == 0) {
            mytablehtml += "<tr>";
        }
        //增加列
        mytablehtml += "<td  onclick='change(this)' class='" + (Math.floor(i / y) + 1).toString() + "' id='" + (Math.floor(i / y) + 1).toString() + (i % y + 1).toString() + "'></td>";

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
//是否设置起始点
var sflag = 0;
var eflag = 0;
//记录结束节点的坐标值
var endx = 0;
var endy = 0;
var startx = 0;
var starty = 0;
function change(params) {
    var cur = params;
    if (type == 1) {
        if (cur.style.background == "gray") { //第二次点击则还原
            cur.style.background = "black";
            setBack(cur.id);
        }
        else {
            cur.style.background = "gray";
            setClose(cur.id);
        }
    }
    else if (type == 2) {  // 起点

        if (cur.style.background == "green") {
            cur.style.background = "black";
            sflag = 0;
            setBack(cur.id);
        }
        else if (sflag == 0) {
            cur.style.background = "green";
            sflag = 1;
            startx = params.className;
            var len = parseInt(params.className).toString();
            starty = cur.id.toString().substring(len.length);
            setOpen(cur.id);
        }
    }
    else if (type == 3) { //终点
        if (cur.style.background == "red") {
            cur.style.background = "black";
            eflag = 0;
            setBack(cur.id);
        } else if (eflag == 0) {
            cur.style.background = "red";
            eflag = 1;
            endx = params.className;
            var len = parseInt(params.className);
            var lens = len.toString();
            endy = cur.id.toString().substring(lens.length);

        }
    }

}

//a* 算法计算
function a_calculate() {
    if (sflag == 1 && eflag == 1) {
        //初始化所有的 h值
        for (var c = 0; c < table.length; c++) {
            var cnode = table[c];
            cnode.h = (Math.abs(cnode.x - endx) + Math.abs(cnode.y - endy)) * 10;
        }
        //递归计算
        for (var p = 0; p < table.length; p++) {
            var node1 = table[p];
            if (node1.openflag == 1) {
                calculate(node1);
            }
        }
        //显示出最短路径
        show(endx, endy);//从终点开始找父格子
    }
}
function show(nodex, nodey) {
    for (var s = 0; s < table.length; s++) {
        var snode = table[s];
        if ((snode.openflag == 1 || snode.closeflag == 1) && snode.useflag == 1) {
            if (snode.x == nodex && snode.y == nodey) {// 找到当前格子
                var curgird = document.getElementById(snode.parentID);//当前格子的父格子
                var nextx = curgird.className;
                var len = parseInt(curgird.className).toString();
                var nexty = curgird.id.toString().substring(len.length);
                if (nextx == startx && nexty == starty) {
                }
                else {
                    curgird.style.background = "yellow";
                    show(nextx, nexty);
                }
            }

        }
    }
}
//
var first = true;
var min = 0;
function calculate(params) {

    for (var i = 0; i < table.length; i++) {
        // var curnode = table[i];
        var curnode = params;
        //计算 g 和 f=g+h
        if (curnode.openflag == 1) {
            //当前节点添加至关闭列表
            curnode.closeflag = 1;
            curnode.openflag = 0;

            for (var j = 0; j < table.length; j++) {
                var child = table[j];
                //临近的节点，并且可通过的,不在关闭列表
                if (child.closeflag != 1 && Math.abs(child.x - curnode.x) <= 1 && Math.abs(child.y - curnode.y) <= 1) {
                    //临近格子不在开启列表,加入开启列表并计算 g,f
                    if (child.openflag != 1) {
                        child.parentID = curnode.eid;//新加入开启列表的子节点的父节点是当前节点
                        child.openflag = 1;
                        //计算临近格子的g
                        if (Math.abs(child.x - curnode.x) == 1 && Math.abs(child.y - curnode.y) == 1) {  //斜方向的
                            child.g = 14 + curnode.g;
                        }
                        else {//横向或者纵向
                            child.g = 10 + curnode.g;
                        }
                        child.f = child.g + child.h;

                        //开启列表中已经有终点
                        if (child.x == endx && child.y == endy) {
                            return;
                        }
                    }
                    //从当前节点到临近点的移动消耗＋当前点的g<临近节点的g,则需要修改当前临近节点的父格子
                    if (Math.abs(child.x - curnode.x) == 1 && Math.abs(child.y - curnode.y) == 1) {
                        if (curnode.g + 14 < child.g) {
                            child.parentID = curnode.eid;
                        }
                    }
                    else {
                        if (curnode.g + 10 < child.g) {
                            child.parentID = curnode.eid;
                        }
                    }
                }
            }
            //遍历开启列表找到最短路径
            var minx = 0;
            var miny = 0;
            var secflag = true;
            for (var m = 0; m < table.length; m++) {
                var childopen = table[m];
                if (childopen.openflag == 1) {
                    if (secflag) { // 第一个值时设置为最小值
                        min = childopen.f;
                        minx = childopen.x;
                        miny = childopen.y;
                    }
                    //最小值改变
                    if (childopen.f < min) {
                        min = childopen.f;//重新设置最小值
                        minx = childopen.x;
                        miny = childopen.y;
                    }
                    secflag = false;
                }
            }

            //找到最小的节点 
            for (var n = 0; n < table.length; n++) {
                var child2 = table[n];
                if (child2.openflag == 1) {
                    if (child2.x == minx && child2.y == miny) {
                        calculate(child2);
                    }
                }
            }
            first = false;

        }
    }
}
//关闭列表
function setClose(params) {
    for (var i = 0; i < table.length; i++) {
        var curnode = table[i];
        if (curnode.eid == params) {
            curnode.closeflag = 1;
            curnode.openflag = 0;
            curnode.useflag = 0;
        }
    }
}
//还原初始状态
function setBack(params) {
    for (var i = 0; i < table.length; i++) {
        var curnode = table[i];
        if (curnode.eid == params) {
            curnode.closeflag = 0;
            curnode.openflag = 0;
        }
    }
}
//开启列表
function setOpen(params) {
    for (var i = 0; i < table.length; i++) {
        var curnode = table[i];
        if (curnode.eid == params) {
            curnode.closeflag = 0;
            curnode.openflag = 1;
        }
    }
}
