// Placeholder PDF - serves until you add your real CV to /public/Joseph_Raju_Myla_CV.pdf
// Once you add the file to public/, remove this route and the rewrite in next.config.mjs

const pdfText = `%PDF-1.4
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj
3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]/Resources<</Font<</F1<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>>>>>/Contents 4 0 R>>endobj
4 0 obj<</Length 78>>stream
BT/F1 16 Tf 100 700 Td(Joseph Raju Myla - CV Placeholder) Tj 0 -24 Td/F1 12 Tf(Replace with your PDF in public folder) Tj ET
endstream endobj
xref
0 5
0000000000 65535 f 
0000000014 00000 n 
0000000068 00000 n 
0000000138 00000 n 
0000000282 00000 n 
trailer<</Size 5/Root 1 0 R>>
startxref
380
%%EOF`;

export async function GET() {
  return new Response(pdfText, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=Joseph_Raju_Myla_CV.pdf",
    },
  });
}
