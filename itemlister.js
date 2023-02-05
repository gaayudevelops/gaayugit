//document.title= "Page title Changed";
//console.log(document.title);
//let x= document.getElementById("items");
//console.log(x);
//x.style.borderBottom="solid 4px #000";
//let y=document.getElementsByClassName("title1");
///console.log(y);
//y.style.fontWeight ='bold';
//y.style.fontcolor='yellow';
/*for(let i=0;i<y.length;i++)
{
    y[i].style.fontWeight ='bold';
    y[i].style.color='yellow';
    y[i].style.backgroundColor='black';
}*/
let items=document.getElementsByClassName('list-group-item');
/*let items=document.getElementsByClassName('list-group-item');
//console.log(items);
items[2].style.backgroundColor='green';
for(let i=0;i<items.length;i++)
{
    items[i].style.fontWeight ='bold';
}
}*/


let li=document.getElementsByTagName('li');
console.log(li);
li[2].style.backgroundColor='green';
for(let i=0;i<li.length;i++)
{
    li[i].style.fontWeight ='bold';
    li[i].style.backgroundColor='yellow';
}
