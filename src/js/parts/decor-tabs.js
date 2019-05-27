function decorTabs() {
    let tab = document.querySelectorAll('.decoration_item'),
        tabContent = document.querySelectorAll('.decoration_slider__content'),
        link = document.querySelectorAll('div.decoration_item > div');
        

        for (let i = 0; i < tab.length; i++){
            tab[i].addEventListener('click', function(){
                for (let u = 0; u < tab.length; u++){
                link[u].classList.remove('after_click');
                tabContent[u].style.display = 'none';
        }

            link[i].classList.add('after_click');
            tabContent[i].style.display = 'flex';
            });
        }
}
module.exports = decorTabs;