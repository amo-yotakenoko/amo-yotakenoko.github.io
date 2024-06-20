function createPDF(savedataJson) {
    console.log(`${savedataJson}`);
    const savedataObject = JSON.parse(savedataJson);
    savedataObject.material.forEach(item => {
        console.log(item.c);
    });
    // jsPDFのインポート
    const { jsPDF } = window.jspdf;

    // 新しいPDFドキュメントを作成
    const doc = new jsPDF();
    const pitch = 2.5;
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;

    let offsetY = 10;

    // 各パターンを描画する関数を呼び出す
    let gridsize = 29;
    let hexsize = 16;
    let offsetX = 0;

    offsetX = (pageWidth - gridsize * pitch) / 2;
    drawGridPattern(doc, offsetX, offsetY, pitch, gridsize);
    offsetY += pitch * (gridsize + 1);


    offsetX = (pageWidth - hexsize * 1.5 * pitch) / 2;
    drawHexPattern(doc, offsetX, offsetY, pitch, hexsize);
    offsetY += (pitch * (gridsize + 3)) * Math.sin(60 * Math.PI / 180);

    drawHexPattern(doc, offsetX, offsetY, pitch, hexsize);
    offsetY += (pitch * (gridsize + 3)) * Math.sin(60 * Math.PI / 180);


    const x = 10;
    const y = 10;
    const maxWidth = 180; // 最大幅（テキストが改行される幅）
    const lineHeight = 7; // 行の高さ
    // addLongText(doc, savedata, x, y, maxWidth, lineHeight);
    // doc.text("Hello world!", 10, 10);
    // doc.text("This is a simple PDF example using jsPDF.", 10, 20);
    // 新しいタブを開く


    const pdfBlob = doc.output('blob');
    const url = URL.createObjectURL(pdfBlob);
    window.open(url);
}

function drawPatternWithPageBreak(doc, drawFunction, offsetX, offsetY, pitch, size, pageHeight) {
    const patternHeight = (size + 1) * pitch;
    if (offsetY + patternHeight > pageHeight) {
        doc.addPage();
        offsetY = 10; // 新しいページの開始位置を設定
    }
    drawFunction(doc, offsetX, offsetY, pitch, size);
    return offsetY + patternHeight;
}

function calculateCenterOffsetX(pageWidth, patternWidth, pitch) {
    return (pageWidth - patternWidth * pitch) / 2;
}


function drawGridPattern(doc, offsetX, offsetY, pitch, size) {
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            const circleX = offsetX + x * pitch;
            const circleY = offsetY + y * pitch;
            doc.setDrawColor(128);
            doc.circle(circleX, circleY, pitch / 2, 'D');
            doc.setFontSize(5);
        }
    }
}


function drawHexPattern(doc, offsetX, offsetY, pitch, size) {
    size += size % 2 !== 0 ? 1 : 0;

    let y = 0;
    for (; y < size - 1; y++) {
        for (let x = 0; x < size + y; x++) {
            let circleX = x;
            circleX -= y / 2;
            circleX += size / 2 * Math.cos(60 * Math.PI / 180);
            let circleY = Math.sin(60 * Math.PI / 180) * y;

            circleX = circleX * pitch + offsetX;
            circleY = circleY * pitch + offsetY;
            doc.circle(circleX, circleY, pitch / 2, 'D');
        }
    }
    for (; y < size * 2 - 1; y++) {
        for (let x = 0; x < size * 3 - y - 2; x++) {
            let circleX = x;
            circleX -= size - 1;
            circleX += y / 2;
            circleX += size / 2 * Math.cos(60 * Math.PI / 180);
            let circleY = Math.sin(60 * Math.PI / 180) * y;

            circleX = circleX * pitch + offsetX;
            circleY = circleY * pitch + offsetY;
            doc.circle(circleX, circleY, pitch / 2, 'D');
        }
    }
}


function addLongText(doc, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';

    for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const testWidth = doc.getStringUnitWidth(testLine) * doc.internal.getFontSize();
        if (testWidth > maxWidth && i > 0) {
            doc.text(line, x, y);
            line = words[i] + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }

    doc.text(line, x, y);
}