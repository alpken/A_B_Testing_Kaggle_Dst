console.log('Is this working?');

let viz;

// Tableau Public Dashboard URL
const url = "https://public.tableau.com/views/A-B-Testing/Dashboard3?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";

const vizContainer = document.getElementById('vizContainer');

const options = {
    hideTabs: true,
    height: "1000px",
    width: "1200px",

    onFirstInteraction: function () {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();

        console.log("My dashboard is interactive");
    }
};

// Create Tableau Viz
function initViz() {

    console.log('Executing the initViz function!');

    viz = new tableau.Viz(vizContainer, url, options);
}

// Run when page loads
document.addEventListener("DOMContentLoaded", initViz);

// Buttons
const exportPDF = document.getElementById('exportPDF');
const exportImage = document.getElementById('exportImage');

// Generate PDF
function generatePDF() {
    viz.showExportPDFDialog();
}

exportPDF.addEventListener("click", function () {
    generatePDF();
});

// Generate Image
function generateImage() {
    viz.showExportImageDialog();
}

exportImage.addEventListener("click", function () {
    generateImage();
});
