/**
* Envelope Dimensions
* <name>, <width>, <height>
*/
var DIMENSIONS = [
["DL Envelope", 4.33, 8.66],
["C7 Envelope", 3.2, 4.5],
["C6 Envelope", 4.5, 6.4],
["C5 Envelope", 6.4, 9],
["C4 Envelope", 9, 12.8],
["C3 Envelope", 12.8, 18],
["B6 Envelope", 4.9, 6.9],
["B5 Envelope", 6.9, 9.8],
["B4 Envelope", 9.8, 13.9],
["E4 Envelope", 11, 15.75],
["A2 Envelope", 4.375, 5.75],
["A6 Envelope", 4.75, 6.5],
["A7 Envelope", 5.25, 7.25],
["A8 Envelope", 5.5, 8.125],
["A10 Envelope", 6, 9.5],
["No. 6 3/4 Envelope", 3.625, 6.5],
["No. 9 Envelope", 3.875, 8.875],
["No. 10 Envelope", 4.125, 9.5],
["No. 11 Envelope", 4.5, 10.375],
["No. 12 Envelope", 4.75, 11],
["No. 14 Envelope", 5, 11.5],
["Catalog Envelope", 9, 12]
];
/**
* Call this function with the width, height, and margin in inches
* that you want the new envelope to be.
*
* @param string name The name of the new document.
* @param float width The width in inches of the new document.
* @param float height The height in inches of the new document.* @param float margin The margin in inches of the new document.
*/
function createEnvelope(name, width, height, margin) {
var newDocument = DocumentApp.create(name);
var body = newDocument.getBody();
var ppi = 72; /* 72 points per inch */
body.setPageHeight(height * ppi);
body.setPageWidth(width * ppi);
body.setMarginBottom(margin * ppi);
body.setMarginTop(margin * ppi);
body.setMarginLeft(margin * ppi);
body.setMarginRight(margin * ppi);
return newDocument.getId();
}
function main() {
var i, title, x, y, margin;
for(i = 0; i < DIMENSIONS.length; ++i) {
title = DIMENSIONS[i][0];
x = DIMENSIONS[i][1];
y = DIMENSIONS[i][2];
margin = 0.5;
createEnvelope(title + " - Portrait", x, y, margin);
createEnvelope(title + " - Landscape", y, x, margin);
}
return 0;
}