function glazingTabs() {
    let tab = document.querySelectorAll('.glazing_block'),
        info = document.querySelector('.glazing_slider'),        
        tabContent = document.querySelectorAll('.glazing_slider__content'),
        link = info.getElementsByTagName('a');

        for (let i = 0; i < tab.length; i++){
            tab[i].addEventListener('click', function(){
                for (let u = 0; u < tab.length; u++){
                link[u].classList.remove('active');
                tabContent[u].style.display = 'none';
        }

            link[i].classList.add('active');
            tabContent[i].style.display = 'flex';
            });
        }
}

module.exports = glazingTabs;