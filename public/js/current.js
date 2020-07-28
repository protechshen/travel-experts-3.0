const currentPage = location.href;
console.log(currentPage);
const navItem = document.querySelectorAll('a');
const navLength = navItem.length
for (let i = 0; i < navLength; i++) {
  if(navItem[i].href === currentPage) {
    navItem[i].className = "current"
  }
}