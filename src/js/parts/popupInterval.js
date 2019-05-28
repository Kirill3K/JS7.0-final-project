function popupInterval() {
    let popup = document.querySelector('.popup');

    let popupInterval = () => {
        popup.style.display = 'block';
    }

    setTimeout (popupInterval, 60000);

}
module.exports = popupInterval;