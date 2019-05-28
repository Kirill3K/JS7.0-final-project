function popup() {
    let call = document.querySelectorAll('.phone_link'),
        popup = document.querySelector('.popup'),
        close = document.querySelector('.popup_close');
    
    call.forEach(function(item) {
        item.addEventListener('click', () => {
            event.preventDefault();
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    });

    window.addEventListener('click', (e) => {
        if (e.target == popup) {
            popup.style.display = 'none';
            document.body.style.overflow = '';            
        }
    });
}
module.exports = popup;