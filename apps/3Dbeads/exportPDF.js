function createpdf(text) {
    console.log("createpdf")
    const doc = new jspdf.jsPDF();
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");

    // 四角形
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.fillRect(10, 10, 50, 50);

    // 三角形
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.moveTo(50, 125);
    ctx.lineTo(100, 125);
    ctx.lineTo(75, 75);
    ctx.lineTo(50, 125);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();

    // 円
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(150, 150, 30, 0, Math.PI * 2, false);
    ctx.fill();

    const imgData = canvas.toDataURL('image/png');

    doc.addImage(imgData, 'png', 0, 0, 200, 200);
    doc.setFontSize(12);
    doc.text(text, 10, 220);
    doc.save('document.pdf');

}
window.createpdf = createpdf;
