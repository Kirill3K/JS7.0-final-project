function popupEngineer() {
    let call = document.querySelector('.popup_engineer_btn'),
        popup = document.querySelector('.popup_engineer'),
        close = document.querySelectorAll('.popup_close');
    
    call.addEventListener('click', () => {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    

    close.forEach(function(item) {
        item.addEventListener('click', () => {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target == popup) {
            popup.style.display = 'none';
            document.body.style.overflow = '';            
        }
    });
}
module.exports = popupEngineer;