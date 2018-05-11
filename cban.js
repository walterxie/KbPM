  // Create a connection to the file.
  var Connect = new XMLHttpRequest();
  // Define which file to open and
  // send the request.
  Connect.open("GET", "https://raw.githubusercontent.com/CompEvol/CBAN/blob/master/packages2.5.xml", false);
  Connect.setRequestHeader("Content-Type", "text/xml");
  Connect.send(null);
  // Place the response in an XML document.
  var TheDocument = Connect.responseXML;
  // Place the root node in an element.
  var Packages = TheDocument.childNodes[0];
  // Retrieve each customer in turn.
  for (var i = 0; i < Packages.children.length; i++)
  {
   var Package = Packages.children[i];
   // Access each of the data values.
   var name = Package.getElementsByTagName("name");
   var version = Package.getElementsByTagName("version");
   var projectURL = Package.getElementsByTagName("projectURL");
   // Write the data to the page.
   document.write("<tr><td>");
   document.write(name[0].textContent.toString());
   document.write("</td><td>");
   document.write(version[0].textContent.toString());
   document.write("</td><td>");
   document.write(projectURL[0].textContent.toString());
   document.write("</td></tr>");
  }