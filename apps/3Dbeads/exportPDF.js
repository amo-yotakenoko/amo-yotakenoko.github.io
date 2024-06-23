function createPDF(savedataJson) {
    console.log(`${savedataJson}`);
    const savedataObject = JSON.parse(savedataJson);

    colors = []
    savedataObject.material.forEach(item => {
        console.log(item.c);
        colors.push(item.c)
    });

    pitch = savedataObject.pitch;



    // jsPDFのインポート
    const { jsPDF } = window.jspdf;

    // 新しいPDFドキュメントを作成
    const doc = new jsPDF();


    platesposes = []
    pageCount = 1
    savedataObject.blueprintPlates.forEach(item => {
        // console.log(item.pos);
        // if (savedataObject.pageNumber == 0) {

        platesposes.push({ pos: item.pos, pageNumber: item.pageNumber });
        if (pageCount < item.pageNumber + 1) pageCount = item.pageNumber + 1;
    });
    console.log("page", pageCount);
    for (let nowpage = 0; nowpage < pageCount; nowpage++) {
        savedataObject.blueprintPlates.forEach(item => {
            // console.log(item.pos);


            if (item.pageNumber === nowpage) {
                doc.setDrawColor('#808080');
                if (item.boardType == 0) drawSquarePattern(doc, item.pos.x, -item.pos.y, pitch, item.size);
                if (item.boardType == 1) drawHexagonPattern(doc, item.pos.x, -item.pos.y, pitch, item.size);
            }
        });

        savedataObject.part.forEach(part => {
            console.log(part.pos)
            plate = platesposes[part.plateid];
            console.log("id", part.plateid)
            if (plate.pageNumber === nowpage) {


                part.beads.forEach(beads => {
                    if (beads.enabled) {
                        doc.setFillColor(colors[beads.colorid]);
                        rotatedpos = rotateVector(beads.pos, part.uvrot);
                        doc.circle((plate.pos.x + part.uv.x * pitch / 10 + rotatedpos.x * pitch), -(plate.pos.y + part.uv.y * pitch / 10 + rotatedpos.y * pitch), pitch / 2, 'FD');

                    }
                });

            }
        });
        if (nowpage + 1 < pageCount)
            doc.addPage();
    }



    // offsetX = (pageWidth - gridsize * pitch) / 2;
    // drawGridPattern(doc, offsetX, offsetY, pitch, gridsize);
    // offsetY += pitch * (gridsize + 1);


    // offsetX = (pageWidth - hexsize * 1.5 * pitch) / 2;
    // drawHexPattern(doc, offsetX, offsetY, pitch, hexsize);
    // offsetY += (pitch * (gridsize + 3)) * Math.sin(60 * Math.PI / 180);


    // offsetY += pitch * circlesize;
    // offsetX = (pageWidth) / 2;
    // drawCirclePattern(doc, offsetX, offsetY, pitch, circlesize);
    // offsetY += pitch * circlesize;

    // offsetY += pitch * circlesize;
    // offsetX = (pageWidth) / 2;
    // drawCirclePattern(doc, offsetX, offsetY, pitch, circlesize);
    // offsetY += pitch * circlesize;





    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())) {

        doc.save("3Dbeads");
    } else {
        const pdfBlob = doc.output('blob', { filename: "3Dbeads" });
        const url = URL.createObjectURL(pdfBlob);
        window.open(url);
    }

}


function drawSquarePattern(doc, offsetX, offsetY, pitch, size) {

    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            doc.circle((x + 0.5) * pitch + offsetX, (-y - 0.5) * pitch + offsetY, pitch / 4, 'D');
        }
    }

}


function drawHexagonPattern(doc, offsetX, offsetY, pitch, size) {

    size += size % 2 !== 0 ? 1 : 0;

    let y = 0;
    for (; y < size - 1; y++) {
        for (let x = 0; x < size + y; x++) {
            let X = x;
            X -= y / 2;
            X += size / 2;
            const Y = Math.sin(60 * Math.PI / 180) * y;
            doc.circle((X + 0.5) * pitch + offsetX, (-Y - 1) * pitch + offsetY, pitch / 4, 'D');
        }
    }
    for (; y < size * 2 - 1; y++) {
        for (let x = 0; x < size * 3 - y - 2; x++) {
            let X = x;
            X -= size - 1;
            X += y / 2;
            X += size / 2;
            const Y = Math.sin(60 * Math.PI / 180) * y;
            doc.circle((X + 0.5) * pitch + offsetX, (-Y - 1) * pitch + offsetY, pitch / 4, 'D');
        }
    }

}

function drawCircularPattern(doc, offsetX, offsetY, pitch, size) {

    for (let r = 0; r < size; r++) {
        for (let theta = 0; theta < r * 6; theta++) {
            const radian = (theta * 360 / (r * 6)) * Math.PI / 180;
            const X = Math.cos(radian) * r;
            const Y = Math.sin(radian) * r;

            doc.circle((X + 0.5) * pitch + offsetX, (-Y + 0.5) * pitch + offsetY, pitch / 4, 'D');
        }
    }

}


function rotateVector(vector, angleDegrees) {
    // 角度をラジアンに変換
    var angleRadians = angleDegrees * (Math.PI / 180);

    // 回転行列の要素を計算
    var cosTheta = Math.cos(angleRadians);
    var sinTheta = Math.sin(angleRadians);

    // ベクトルの回転後の座標を計算
    var newX = vector.x * cosTheta - vector.y * sinTheta;
    var newY = vector.x * sinTheta + vector.y * cosTheta;

    // 回転後のベクトルをオブジェクトとして返す
    return { x: newX, y: newY };
}
// function drawPatternWithPageBreak(doc, drawFunction, offsetX, offsetY, pitch, size, pageHeight) {
//     const patternHeight = (size + 1) * pitch;
//     if (offsetY + patternHeight > pageHeight) {
//         doc.addPage();
//         offsetY = 10; // 新しいページの開始位置を設定
//     }
//     drawFunction(doc, offsetX, offsetY, pitch, size);
//     return offsetY + patternHeight;
// }

// function calculateCenterOffsetX(pageWidth, patternWidth, pitch) {
//     return (pageWidth - patternWidth * pitch) / 2;
// }


// function drawGridPattern(doc, offsetX, offsetY, pitch, size) {
//     for (let x = 0; x < size; x++) {
//         for (let y = 0; y < size; y++) {
//             const circleX = offsetX + x * pitch;
//             const circleY = offsetY + y * pitch;
//             doc.setDrawColor(128);
//             doc.circle(circleX, circleY, pitch / 2, 'D');
//             doc.setFontSize(5);
//         }
//     }
// }

// function drawCirclePattern(doc, offsetX, offsetY, pitch, size) {
//     for (let r = 0; r < size; r++) {
//         for (let theta = 0; theta < r * 6; theta++) {
//             const radian = theta * 360 / (r * 6) * (Math.PI / 180);


//             const circleX = offsetX + Math.cos(radian) * r * pitch;
//             const circleY = offsetY + Math.sin(radian) * r * pitch;
//             doc.setDrawColor(128);
//             doc.circle(circleX, circleY, pitch / 2, 'D');
//             doc.setFontSize(5);
//         }
//     }
// }


// function drawHexPattern(doc, offsetX, offsetY, pitch, size) {
//     size += size % 2 !== 0 ? 1 : 0;

//     let y = 0;
//     for (; y < size - 1; y++) {
//         for (let x = 0; x < size + y; x++) {
//             let circleX = x;
//             circleX -= y / 2;
//             circleX += size / 2 * Math.cos(60 * Math.PI / 180);
//             let circleY = Math.sin(60 * Math.PI / 180) * y;

//             circleX = circleX * pitch + offsetX;
//             circleY = circleY * pitch + offsetY;
//             doc.circle(circleX, circleY, pitch / 2, 'D');
//         }
//     }
//     for (; y < size * 2 - 1; y++) {
//         for (let x = 0; x < size * 3 - y - 2; x++) {
//             let circleX = x;
//             circleX -= size - 1;
//             circleX += y / 2;
//             circleX += size / 2 * Math.cos(60 * Math.PI / 180);
//             let circleY = Math.sin(60 * Math.PI / 180) * y;

//             circleX = circleX * pitch + offsetX;
//             circleY = circleY * pitch + offsetY;
//             doc.circle(circleX, circleY, pitch / 2, 'D');
//         }
//     }
// }


// function addLongText(doc, text, x, y, maxWidth, lineHeight) {
//     const words = text.split(' ');
//     let line = '';

//     for (let i = 0; i < words.length; i++) {
//         const testLine = line + words[i] + ' ';
//         const testWidth = doc.getStringUnitWidth(testLine) * doc.internal.getFontSize();
//         if (testWidth > maxWidth && i > 0) {
//             doc.text(line, x, y);
//             line = words[i] + ' ';
//             y += lineHeight;
//         } else {
//             line = testLine;
//         }
//     }

//     doc.text(line, x, y);
// }