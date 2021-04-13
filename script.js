const panels = document.querySelectorAll('.panel');

console.log(panels); 

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeClasses();
        panel.classList.add('active');
    });
});

function removeClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
} 