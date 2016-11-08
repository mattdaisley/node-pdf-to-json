var fs = require('fs'),
PDFParser = require("pdf2json");

var pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", function(errData) { console.log(errData.parserError) });
pdfParser.on("pdfParser_dataReady", function(pdfData) {
  // fs.writeFile("pdf.json", JSON.stringify(pdfData));
  fs.writeFile("test.txt", pdfParser.getRawTextContent());
});

pdfParser.loadPDF("pdf.pdf");
