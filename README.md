# GoogleDocs-EnvelopeTemplates
Google Apps Script to create envelope templates for use in Google Docs

While the purpose of Google Workspace, Drive, and Docs is digital collaboration, the reality is that sometimes you have to send snailmail with a professional-looking envelope. While there are Marketplace Add-ons that offer Mailmerge functionality, you may want something simpler. This script creates a new Doc file for each envelope dimension that you define.

This runs directly on the [Google Apps Script](https://script.google.com/home) engine and all that is required is a Google account.

### Use

1. Create a new Google Apps Script and copy the code from [createEnvelopes.js](createEnvelopes.js).
2. Review the *var DIMENSIONS* section under line #5 and define any additional envelope sizes you wish.
3. Click Run and accept the OAuth prompt.
4. You will now find a Google Doc for each envelope size on your Google Drive. Feel free to place on a View-only Shared Drive for users as templates.