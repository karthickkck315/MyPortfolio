/**
 * Google Apps Script for Contact Form Submission and Event Tracking
 * 
 * Instructions:
 * 1. Create a new Google Sheet
 * 2. Create two sheets: "Contacts" and "Events"
 * 3. Contacts sheet headers: DateTime | Name | Email | MobileNo | Subject | Message | From
 * 4. Events sheet headers: DateTime | EventType | Label | Platform | Source
 *    (Platform will be: iOS, Android, or Web)
 * 5. Go to Extensions > Apps Script
 * 6. Paste this code
 * 7. Save the script
 * 8. Click "Deploy" > "New deployment"
 * 9. Select type: "Web app"
 * 10. Execute as: "Me"
 * 11. Who has access: "Anyone"
 * 12. Click "Deploy"
 * 13. Copy the Web app URL
 * 14. Replace GOOGLE_SCRIPT_URL in src/components/Contact.tsx and src/utils/eventTracking.ts with your URL
 */

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  var formattedDateTime = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(), // or "Asia/Kolkata"
    "dd/MM/yyyy hh:mm a"         // 12-hr format with AM/PM
  );

  // If eventType is present → this is a tracking event
  if (data.eventType) {
    // Log to "Events" sheet (or create it if it doesn't exist)
    var eventSheet = ss.getSheetByName('Events');
    if (!eventSheet) {
      eventSheet = ss.insertSheet('Events');
      // Add header row with Platform column
      eventSheet.appendRow(['DateTime', 'EventType', 'Label', 'Platform', 'Source']);
    }
    
    eventSheet.appendRow([
      formattedDateTime,
      data.eventType || '',          // 'resume_download' or 'contact_click'
      data.label || '',               // 'Email [iOS]', 'LinkedIn [Web]', etc.
      data.platform || 'Web',         // 'iOS', 'Android', or 'Web'
      data.source || 'site'            // 'portfolio' or page name
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', type: 'event' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } else {
    // Otherwise treat as Contact Us form submission
    // Log to "Contacts" sheet (or use active sheet)
    var contactSheet = ss.getSheetByName('Contacts') || ss.getActiveSheet();
    
    // Optional: if creating new sheet, add header
    if (contactSheet.getLastRow() === 0) {
      contactSheet.appendRow([
        'DateTime',
        'Name',
        'Email',
        'MobileNo',
        'Subject',
        'Message',
        'From'
      ]);
    }
    
    // Handle mobileNo: if empty/undefined/null, save as empty string; otherwise save the value
    let mobileNo = '';
    if (data.mobileNo !== undefined && data.mobileNo !== null && data.mobileNo !== '') {
      mobileNo = data.mobileNo.trim();
    }
    
    contactSheet.appendRow([
      formattedDateTime,
      (data.name && data.name.trim()) ? data.name.trim() : '',
      (data.email && data.email.trim()) ? data.email.trim() : '',
      mobileNo,
      (data.subject && data.subject.trim()) ? data.subject.trim() : '',
      (data.message && data.message.trim()) ? data.message.trim() : '',
      (data.from && data.from.trim()) ? data.from.trim() : ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', type: 'contact' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Test function to verify the script works
function test() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    mobileNo: '+91 9876543210',
    subject: 'Test Subject',
    message: 'This is a test message',
    from: 'Portfolio Website'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

