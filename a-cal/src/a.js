
(function () {
  var barrier='barrier';/*节点样式 障碍物*/
  var route='route';  //路径
  var startSty='start';  //起点样式
  var stopSty='stop'; //终点样式
  var movexy=10;
  var movez=14;
  $(function() {
    $('#createTab').on('click', btnclickEvent);//创建网格
    $('#setbarrier').on('click', setNodeType);//设置障碍物
    $('#setstart').on('click', setNodeType);//设置起点
    // $('#setstop').on('click', setNodeType);//设置终点
    $('#ok').on('click', showRoute);//生成路径
    var moveFlag=false;
    var offsetx;
    var beforeX;
    //获得鼠标指针离DIV元素左边界的距离
    $('.drag-div').mousedown(function(e) {
      moveFlag=true;
      var offset = $(this).offset(); //DIV在页面的位置
      offsetx = e.pageX - offset.left; 
      beforeX=parseInt($(this).css('left')); 
    }).mousemove(function(e){   
      if(moveFlag){
        var x=e.pageX-offsetx;  
        if(x<250&&x>50){                           
          $('.drag-div').fadeTo(20, 1);  
          $('.drag-div').css({left:x}); 
        }
        scaleGrid(x-beforeX);
      }                
    }).mouseup(function(e){   
      moveFlag=false;  
    }); 
   
  });   
  var absSLeft=10;//绝对定位的开始位置
  var absSTop=160;
  var tdWidth=60;//绝对定位的移动宽度
  var tdHeight=60;
  
  /**
   * 点的构造函数
   * @params x,y,elementId 对应格子元素的id,openFlag 开启标志,closeFlag关闭标志
   */
  function Point(x,y,elementId,openFlag,closeFlag){
    this.x=x;
    this.y=y;
    this.open=openFlag;
    this.close=closeFlag;
    this.elementId=elementId;
    this.parent='';
    this.destination='';
    // this.destination=destinationPoint;
    this.h=function getH(){  //h 值与终点相关
      if(this.destination!=''){
        return (Math.abs(this.x - this.destination.x) + Math.abs(this.y - this.destination.y)) * movexy;
      }
      return 0;
    }
    this.g=function getG(){
      if(this.parent!=''){  //与父网格相关
        if(Math.abs(this.x - this.parent.x) == 1 && Math.abs(this.y - this.parent.y) == 1) {  //斜方向的
          return movez + this.parent.g;
        } 
        else {//横向或者纵向
          return movexy + this.parent.g;
        } 
      }
      return 0;
    }
    this.f=function getF(){
       return this.h+this.g;
    }
    this.setParent=function setParent(parentPoint){
      this.parent=parentPoint;
    }
    this.setDestination=function setDestination(destinationPoint){
      this.destination=destinationPoint;
    }
    this.setOpen=function setOpen(open){
      this.open=open;
    }
    this.setClose=function setClose(close){
      this.close=close;
    }
    this.setNodeFlag=function setNodeFlag(nodeflag){
      this.nodeFlag=nodeflag;
    }
  }
  var patten=/^[0-9]+$/;
  /**
   *  创建网格按钮 点击事件，验证行列输入格式
   */
  function btnclickEvent() {
    var row = $('#rnum').val();
    var col = $('#cnum').val();
    if (!patten.test(row)) {
      alert('行请输入数字!');
      return;
    }
    if (!patten.test(col)) {
      alert('列请输入数字!');
      return;
    }
    var way=$('#way').val();
    var $container = $('#griddiv');
    $('#createTab').attr('disabled', true);
    initgrid($container,way, row, col);
  }
  
  var nodes = [];
  /**
   * 创建网格
   * @params container 容器 way 生成网格方式(table,浮动，绝对定位)
   * @params row 行 col列
   */
  function initgrid(container,way, row, col) {
   
    var $table=($('<table id="mytable"/>'));
    var $tr = $('<tr/>');
    var $td=$('<td/>');
    var way1='way1';
    var way2='way2';
    var way3='way3';
    for (var i = 0; i < row; i++) {
      if(way==way1){ //每一行为tr
        $tr=$('<tr/>');
      }
      else if(way==way2){ //每一行为div
        $tr=$('<div/>').addClass('clear-float');
      }
      for (var j = 0; j < col; j++) {
        var idvalue = i.toString() + j.toString();
        if(way==way1){  //设置列的元素
          $td = $('<td/>');
        }
        else if(way==way2){
          $td = $('<div/>').addClass('div-float');
        }
        else if(way==way3){
          $td = $('<div/>').addClass('div-absoute');
          $td.css('left',(absSLeft+j*tdWidth).toString()+'px');
          $td.css('top',(absSTop+i*tdHeight).toString()+'px');
        }
        $td.attr('data-x', i)
          .attr('data-y', j)
          .attr('id', idvalue)
          .on('click', cellClickEvent);  //每一个单元格的点击事件和坐标
        if(way==way1||way==way2){
            $tr.append($td); 
        }
        else if(way==way3){
          container.append($td);
        }
        //创建对象
        var nodeObj=new Point(parseInt(i.toString()),parseInt(j.toString()),idvalue,0,0);
        Object.defineProperty(nodeObj,'f',{writable:false});
        Object.defineProperty(nodeObj,'g',{writable:false});
        Object.defineProperty(nodeObj,'h',{writable:false});
        nodes.push(nodeObj);
      }
      if(way==way1){
        $table.append($tr);
        container.append($table);
      }
      else if(way==way2){
        container.append($tr);
      }
    }
  }
  /**
   * 放大或者缩小格子
   */
  function scaleGrid(data){
    $('div table tr td').each(function(){
      if(tdWidth+data>0){
        $(this).css('width',tdWidth+data);
        $(this).css('height',tdHeight+data);
      }
    });
    //绝对定位
     $('div .div-absoute').each(function(){
      if(tdWidth+data>0){
        $(this).css('left',absSLeft+$(this).attr('data-y')*(tdWidth+data));
        $(this).css('top',absSTop+$(this).attr('data-x')*(tdHeight+data));
        $(this).css('width',tdWidth+data);
        $(this).css('height',tdHeight+data);
      }
    });
    //浮动方式
     $('div .div-float').each(function(){
      if(tdWidth+data>0){
        $(this).css('width',tdWidth+data);
        $(this).css('height',tdWidth+data);
      }
    });
  }
  /**
   * 格子点击事件,改变背景颜色
   */
  function cellClickEvent() {
    var $cell = $(this);
    if (type == null || type == '') {
      alert('请先点击设置节点类型按钮，再进行操作');
      return;
    }
    //查找当前节点在数组中的索引
    var index = -1;
    if (nodes != null && nodes.length > 0) {
      for (var k = 0; k < nodes.length; k++) { //eleId->elementId
        if (nodes[k].x == parseInt($cell.attr('data-x')) && nodes[k].y == parseInt($cell.attr('data-y')) && nodes[k].elementId == $cell.attr('id')) {
          index = k;
        }
      }
    }
    if (index >= 0) {
      if($cell.hasClass(route)){
        $cell.removeClass(route);//有路径的样式去掉，则可以重新设置障碍物或者起始点生成路径
      }
      switch (type) {
        case 1:
          $cell.toggleClass(barrier);
          break;
        case 2:
          $cell.toggleClass(startSty);
          break;
        case 3:
          $cell.toggleClass(stopSty);
          break;
        default:
          break;
      }
      var names = $cell.attr('class').split(' ');
      var lastname;//最新的class样式
      if (names != null && names.length > 0) {
        lastname = names[names.length - 1];
      }
      var nodeObj = nodes[index];//当前节点
      if (lastname == barrier) {//$cell.hasClass(barrier)
        nodeObj.setOpen(0);
        nodeObj.setClose(1);
        nodeObj.setNodeFlag(3);
        var aa=nodeObj;
      }
      else if (lastname == startSty) {
        nodeObj.setOpen(1);nodeObj.setClose(0);nodeObj.setNodeFlag(1);
        startx = parseInt($cell.attr('data-x'));
        starty = parseInt($cell.attr('data-y'));
      }
      else if (lastname == stopSty) {
        nodeObj.setOpen(0);nodeObj.setClose(0);nodeObj.setNodeFlag(2);
        endx = parseInt($cell.attr('data-x'));
        endy = parseInt($cell.attr('data-y'));
      }
      else {
        nodeObj.setOpen(0);nodeObj.setClose(0);nodeObj.setNodeFlag(0);
      }
    }
  }
  var type = 0;  // 1 障碍物 2 起点 3 终点
  /**
   * 设置节点类型
   * 1 障碍物 2 起点 3 终点
   */
  function setNodeType() {
    var id = $(this).attr('id');
    if (id == 'setbarrier') {
      type = 1;
    }
    else if (id == 'setstart') {
      type = 2;
    }
    else if (id == 'setstop') {
      type = 3;
    }
  }
  //记录结束节点的坐标值
  var endx = 0;
  var endy = 0;
  var startx = 0;
  var starty = 0;
  /**
   * a* 算法计算生成路径
   */
  function showRoute() {
    var sflag = 0;//起点节点个数
    // var eflag = 0;//终点节点个数
    var sindex;
    var eindex;
    var first=false;
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].setClose(0);
      nodes[i].setOpen(0);
      if (nodes[i].nodeFlag == 1) {
        sflag++;
        if(!first){
          first=true;
          sindex=i;
          startx = nodes[i].x;
          starty = nodes[i].y;
          //nodes[i].setOpen(1);//nodes[i].open=1;
        }
        //eindex=i;//最后一个可通过的点为终点
      }
      // else if (nodes[i].nodeFlag == 2) {
      //   eflag++;
      //   endx = nodes[i].x;
      //   endy = nodes[i].y;
      //   eindex=i;
      // }
      else if(nodes[i].nodeFlag==3){
        nodes[i].setClose(1);//nodes[i].close=1;
      }
      var $cnode = $('#' + nodes[i].elementId);//var $cnode = $('#' + nodes[i].eleId);//数组元素对应的dom元素
      if($cnode.hasClass(route)){
        $cnode.removeClass(route);
      }
    }
    if (sflag < 2 ) {
      alert('请设置至少两个可通过的点');
      return;
    }
   
    var nextindex=[]; //找到当前节点临近可通过的点的索引
    for(var p=0;p<nodes.length;p++){
      if(nodes[p].close != 1&&nodes[p].nodeFlag==1){//是可通过的点并且不在关闭列表代表未完成
        nextindex.push(p);
      }
    }
    //每相邻两个可通过的点为起点和终点，最后一个可通过点为结束点
    for(var q=0;q<nextindex.length;q++){
      if(q<nextindex.length-1){
        startx = nodes[nextindex[q]].x;
        starty = nodes[nextindex[q]].y;
        endx = nodes[nextindex[q+1]].x;
        endy = nodes[nextindex[q+1]].y;
        eindex=nextindex[q+1];
         //设置目的地
        for (var c = 0; c < nodes.length; c++) {
          nodes[c].setDestination(nodes[eindex]);
          nodes[c].setParent('');
          nodes[c].setOpen(0);
          nodes[c].setClose(0);
          if(nodes[c].nodeFlag==3){
            nodes[c].setClose(1);
          }
        }
        nodes[nextindex[q]].setOpen(1);
        //递归计算
        calculate(nodes[nextindex[q]]);
        checkShow(endx, endy);
        if (okflag) {
          show(endx, endy);//从终点开始找父格子
        }
        else {
          alert('没有找到路径');
        }
      }
    }
  }
  /**
   * 显示出最短路径
   */
  function show(nodex, nodey) {
    for (var s = 0; s < nodes.length; s++) {
      var snode = nodes[s];
      if ((snode.open == 1 || snode.close == 1) && snode.nodeFlag != 3) {
        if (snode.x == nodex && snode.y == nodey) {// 找到当前格子
          var $curgird = $('#' + snode.parent.elementId);//当前格子的父格子 parentId
          if ($curgird.attr('data-x') == startx && $curgird.attr('data-y') == starty) {
          }
          else {
            $curgird.addClass(route);
            show($curgird.attr('data-x'), $curgird.attr('data-y'));
          }
        }
      }
    }
  }
  var okflag = false;//是否有最短路径标志
  /**
   * 检查是否找到最短路径
   */
  function checkShow(nodex, nodey) {
    for (var s = 0; s < nodes.length; s++) {
      var snode = nodes[s];
      if ((snode.open == 1 || snode.close == 1) && snode.nodeFlag != 3) {
        if (snode.x == nodex && snode.y == nodey) {// 找到当前格子
          var $curgird = $('#' + snode.parent.elementId);//当前格子的父格子 parentId
          if ($curgird.attr('data-x') == startx && $curgird.attr('data-y') == starty) {
            okflag = true;
            return;
          }
          else {
            checkShow($curgird.attr('data-x'), $curgird.attr('data-y'));
          }
        }
      }
    }
  }
  /**
   * A*逻辑计算方法
   */
  function calculate(params) {
    var curnode = params;
    if (curnode.open == 1) {
      curnode.setClose(1);//当前节点添加至关闭列表
      curnode.setOpen(0);
      for (var j = 0; j < nodes.length; j++) {
        var child = nodes[j];
        if (child.close != 1 && Math.abs(child.x - curnode.x) <= 1 && Math.abs(child.y - curnode.y) <= 1) {//临近的节点，并且可通过的,不在关闭列表
          if (child.open != 1) {//临近格子不在开启列表,加入开启列表并计算 g,f
            nodes[j].setParent(curnode); //set parent
            nodes[j].setOpen(1);
            if (child.x == endx && child.y == endy) {//开启列表中已经有终点
              return;
            }
          }
          //从当前节点到临近点的移动消耗＋当前点的g<临近节点的g,则需要修改当前临近节点的父格子
          if (Math.abs(child.x - curnode.x) == 1 && Math.abs(child.y - curnode.y) == 1) {
            if (curnode.g + movez < child.g) {
              nodes[j].setParent(curnode);
            }
          }
          else {
            if (curnode.g + movexy < child.g) {
              nodes[j].setParent(curnode);
            }
          }
        }
      }
      //遍历开启列表找到最短路径
      var min = 0;
      var secflag = true;
      var minindex = 0;
      for (var m = 0; m < nodes.length; m++) {
        var childopen = nodes[m];
        if (childopen.open == 1) {
          if (secflag) { // 第一个值时设置为最小值
            min = childopen.f;//childopen.f;
            minindex = m;
          }
          if (childopen.f< min) {
            min = childopen.f;//childopen.f;//重新设置最小值
            minindex = m;
          }
          secflag = false;
        }
      }
      calculate(nodes[minindex]);//找到最小的节点 ,递归计算
    }
  }
})()
