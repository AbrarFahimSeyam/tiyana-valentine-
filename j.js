function showMessage() {
    const msg = document.getElementById('message');
    msg.style.opacity = 1;
    setTimeout(() => {
        window.location.href = `mailto:abrarfahim6217@gmail.com?subject=Happy Valentine's Day!&body=Hey Abrar, your message made me smile!`;
    }, 3000);
}
