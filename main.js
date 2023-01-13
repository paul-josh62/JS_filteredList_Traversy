//get input element
let filterInput = document.getElementById('filterInput');
// add event listener
filterInput.addEventListener(keyup, filterNames);


function filterNames() {
  //get value of input
  let filterValue = document.getElementById('filterInput').value.toUpperCase();
  console.log(filterValue);

  //get names ul
  let ul = document.getElementById('names');

  //get items
  let li = ul.querySelectorAll('li.collection-item');

  //loop through collection items
  for(let i =0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];
    //if match
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].getElementsByClassName.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}
