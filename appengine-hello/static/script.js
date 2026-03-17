/*
Copyright 2023 The Go Authors. All rights reserved.
Use of this source code is governed by a BSD-style
license that can be found in the LICENSE file.
*/

"use strict";

function fetchMessage() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "/hello", false);
    xmlHttp.send(null);
    
    // Sanitize the response to prevent XSS attacks
    // Use textContent instead of innerHTML to treat response as plain text
    var messageElement = document.getElementById("message");
    messageElement.textContent = xmlHttp.responseText;
    
    // Alternative approach if HTML rendering is required:
    // Create a DOMPurify-like sanitization or use built-in text encoding
    // messageElement.innerHTML = sanitizeHTML(xmlHttp.responseText);
}

// Helper function to sanitize HTML content (if HTML rendering is needed)
function sanitizeHTML(htmlString) {
    var temp = document.createElement('div');
    temp.textContent = htmlString;
    return temp.innerHTML;
}
