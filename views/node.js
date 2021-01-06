//nodeName和nodeValue属性
if(someNode.nodeType == 1){
    value = someNode.nodeName;//nodeName的值是元素的标签名
}

// 访问nodeList中的节点

var firstChild = someNode.childNodes[0];
var secondChild = someNode.childNodes.item(1);
var count = someNode.childNodes.length;

// IE8以后
var arrayOfNodes = Array.prototype.slice.call(someNode.childNodes,0);

// IE8以前
function convertToArray(nodes){
    var array = null;
    try{
        array =Array.prototype.slice.call(someNode.childNodes,0);
    }catch(ex){
        array = new Array();
        for(var i = 0;i = nodes.length;i++){
            array.push(nodes[i]);
        }
        return array;
    }
}


// nextSibling 下一个节点
// previousSibling 上一个节点
// firstChild
// lastChild
// childNodes 子节点


// 操作节点
// appendChild() 向childNodes列表末尾添加一个节点

var returnedNode = someNode.appendChild(newNode);
console.log(returnedNode == newNode);// true
console.log(someNode.lastChild == newNode);// true

// insertBefore() 要插入的节点和作为参照的节点

returnedNode = someNode.insertBefore(newNode,null);
console.log(returnedNode == newNode);// true

// 插入成为第一个子节点
returnedNode = someNode.insertBefore(newNode,someNode.firstChild);
// 插入到最后一个子节点前面
returnedNode = someNode.insertBefore(newNode,someNode.lastChild);


// replaceChild() 要插入的节点和要替换的节点

// cloneNode()  true深复制复制节点及子节点树  false 浅复制 仅复制节点本身

// 文档信息
document.title //取得文档标题 设置文档标题
document.URL // 取得完整的URL
document.referrer // 取得来源页面的URL


// 查找元素
document.getElementById() // 需要严格匹配大小写 IE8以前不区分大小写 尽量不要将name与id命名一致


document.getElementsByTagName() //返回一个HTMLCollection对象
// 在html中不需要区分大小写   在XHML XML中需要区分大小写

// HTMLCollection对象方法
var images = document.getElementsByTagName('img');
console.log(images.length);
console.log(images[0].src);
console.log(images.item[0].src);

var myImage = images.namedItem('myImage');
var myImage1 = images['myImage'];


document.getElementsByTagName('*');//获取文档中所有元素


document.getElementsByName()

document.anchors // 所有带name特性的<a>元素
document.forms // 所有的<form>元素
document.images // 所有的<img>元素
document.links // 所有带href特性的<a>元素



// 文档写入
write()
writeln()
open()
close()

// 取得特性
getAttribute()
setAttribute()
removeAttribute()

// attributes属性
NamedNodeMap 
getNamedItem(name) //返回nodeName属性等于name的节点
removeNamedItem(name) //从列表中移除nodeName属性等于name的节点 返回被删除特性的节点
setNamedItem(node) // 向列表中添加节点，以节点的nodeName属性为索引
item(pos) //返回位于数字pos位置处的节点

//元素的id特性
var id = element.attribute.getNamedItem('id').nodeValue;
var id = element.attribute['id'].nodeValue;


// 创建元素 document.createElement()
var div = document.createElement('div');
div.id = 'myNewDiv';
div.className = 'box';
document.body.appendChild(div);


// 文本

appendData(text) // 将text添加到节点的末尾。
deleteData(offset, count) // 从offset指定的位置开始删除count个字符。
insertData(offset, text) // 在offset指定的位置插入text。
replaceData(offset, count, text) // 用text替换从offset指定的位置开始到offset+count为止处的文本。
splitText(offset) // 从offset指定的位置将当前文本节点分成两个文本节点。
substringData(offset, count) // 提取从offset指定的位置开始到offset+count为止处的字符串。



document.createTextNode()  // 创建新文本节点

var element = document.createElement('div');
element.className = 'message';
var textNode = document.createTextNode('hello world');
element.appendChild(textNode);

var textNode1 = document.createTextNode('1111');
element.appendChild(textNode1);

element.normalize();//合并所有文本节点

document.body.appendChild(element);

normalize()

splitText()//分割节点

var newNode =element.firstChild.splitText(5); // 分割节点从位置5