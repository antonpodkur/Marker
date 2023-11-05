import JsPDF from "jspdf";
import html2canvas from "html2canvas";

export const htmlStringToPdf = async (htmlString: string) => {
  let iframe = document.createElement("iframe");
  iframe.style.visibility = "hidden";
  document.body.appendChild(iframe);
  let iframedoc = iframe.contentDocument || iframe.contentWindow!.document;
  iframedoc.body.innerHTML = htmlString;
  
  let canvas = await html2canvas(iframedoc.body, {});
  
  // Convert the iframe into a PNG image using canvas.
  let imgData = canvas.toDataURL("image/png");

  // Create a PDF document and add the image as a page.
  const doc = new JsPDF({
    format: "a4",
    unit: "mm",
  });
  doc.addImage(imgData, "PNG", 0, 0, 210, 297);

  // Get the file as blob output.
  let blob = doc.output("blob");

  // Remove the iframe from the document when the file is generated.
  document.body.removeChild(iframe);

  // Create a download link with a "none" display style
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = URL.createObjectURL(blob);
  a.download = 'sample.txt'; // Set the desired filename

  // Append the link to the DOM
  document.body.appendChild(a);

  // Simulate a click on the download link
  a.click();

  // Clean up: Revoke the blob URL to release resources
  URL.revokeObjectURL(a.href);

  // Remove the download link from the DOM
  a.remove();

  //TODO: Add saving to the user selected folder.
};
