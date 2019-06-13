function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Dialog')
      .setWidth(800)
      .setHeight(600);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, 'Generate Events');
  
}

//creates menu when spreadsheet is opened
function onOpen() {
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [];
  
  SpreadsheetApp.getUi().createMenu('Export')
      .addItem('Events', 'openDialog')
      .addToUi();
}

/**
 * Returns a string buffer from an HTML file.
 * 
 */
function include(fileName){
    return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}


