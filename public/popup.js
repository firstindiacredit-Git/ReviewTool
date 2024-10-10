const qrCanvas = document.getElementById('qrCanvas');
const websiteUrlInput = document.querySelector('input[type="text"]');
const downloadBtn = document.getElementById('downloadBtn');
const shareBtn = document.getElementById('shareBtn');

websiteUrlInput.addEventListener('input', function() {
    const url = websiteUrlInput.value;
    if (url) {
        const qr = qrcode(0, 'L');
        qr.addData(url);
        qr.make();
        qrCanvas.innerHTML = qr.createImgTag(5);
        downloadBtn.disabled = false;
        shareBtn.disabled = false;
    } else {
        qrCanvas.innerHTML = '';
        downloadBtn.disabled = true;
        shareBtn.disabled = true;
    }
});

downloadBtn.addEventListener('click', function() {
    const img = qrCanvas.querySelector('img');
    if (img) {
        const link = document.createElement('a');
        link.href = img.src;
        link.download = 'qrcode.png';
        link.click();
    }
});

shareBtn.addEventListener('click', async function() {
    const img = qrCanvas.querySelector('img');
    if (img) {
        const blob = await fetch(img.src).then(res => res.blob());
        const file = new File([blob], 'qrcode.png', { type: 'image/png' });
        try {
            await navigator.share({
                title: 'QR Code',
                text: 'Here is your QR Code.',
                files: [file],
            });
        } catch (error) {
            alert('Share failed: ' + error);
        }
    }
});