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
}*/

let li=document.getElementsByTagName('li');
/*let li=document.getElementsByTagName('li');
console.log(li);
li[2].style.backgroundColor='green';
for(let i=0;i<li.length;i++)
{
     li[i].style.fontWeight ='bold';
    li[i].style.backgroundColor='yellow';
}*/
let seconditem=document.querySelector
/*let seconditem=document.querySelector
('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor='green';
let thirditem=document.querySelector
('.list-group-item:nth-child(3)');
//console.log(thirditem);
thirditem.style="display:none";
*/

//TRANSVERSING THE DOM
let itemlist=document.querySelector('#items');

//PARENTELEMENT
console.log(itemlist.parentElement);
let x=itemlist.parentElement;
x.style.backgroundColor="#000"
itemlist.parentElement.parentElement.style.backgroundColor="yellow";

//LASTCHILD
console.log(itemlist.lastChild);

//LASTELEMENTCHILD
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.style.color="blue";
itemlist.lastElementChild.textContent='hello';

//FIRSTCHILD
console.log(itemlist.firstChild);

//LASTELEMENTCHILD
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.style.color="red";
itemlist.firstElementChild.textContent='hello1';

//NEXTSIBLING
console.log(itemlist.nextSibling);

//NEXTELEMENTSIBLING
console.log(itemlist.nextElementSibling);

//PREVIOUSSIBLING
console.log(itemlist.previousSibling);

//PREVIOUSELEMENTSIBLING
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color="blue";

//CREATE ELEMENT
let newDiv=document.createElement('div');

//ADD CLASS
newDiv.className='Hello world';

//ADD ID
newDiv.id='hello1';

//ADD ATTRIBUTES
newDiv.setAttribute('title', 'hellodiv');

//CREATE TEXT NODE
let newDivtext=document.createTextNode('Hello');

//ADD TEXT TO DOM
newDiv.appendChild(newDivtext);

let container= document.querySelector('header .container');
let h1=document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv,h1);

//ADD CHILD
let parentnode= document.getElementById('items');
parentnode.innerHTML='<li>Hello</li>' + parentnode.innerHTML
console.log(parentnode);
 
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  //CREATE AN EDIT BUTTON
  var edtBtn = document.createElement('button');

  // Add classes to edit button
  edtBtn.className = 'btn btn-danger btn-sm float-right edit';

 // Append text node
edtBtn.appendChild(document.createTextNode('Edit'));

 // Append button to li
 li.appendChild(edtBtn);

 // Append li to list
 itemList.appendChild(li);


}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

