function generatePDF() {
  var data = document.getElementById("bankStatement").innerHTML;

  var window1 = window.open("", "", "width=800,height=600");
  window1.document.write("<html><head>");
  window1.document.write("<title></title></head>");
  window1.document.write("<body>");
  window1.document.write(data);
  window1.document.write("</body></html>");
  window1.document.close();
  window1.print();
}
export default generatePDF;
