function showSidebar(){
    const sidebar = document.querySelector('.side-bar')
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.side-bar')
    sidebar.style.display = 'none'
}

const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show-effect')
      }
    
  });
});
const hiddenElements = document.querySelectorAll('.hidden-effect')
hiddenElements.forEach((el) => observer.observe(el));