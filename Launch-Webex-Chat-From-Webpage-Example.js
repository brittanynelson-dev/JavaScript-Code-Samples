var room = null;
var email = null;
var token = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
var data = 'XYZ';

//Create array & get list of participants from webpage
rawListArr = [];
if (document.getElementById("emailList").textContent.includes("X")) {
    rawListArr = document.getElementById("emailList").innerHTML.split("<li>");
}

//Create additional arrays to filter list
lowerListArr = [];
finalListArr = [];

//Set all emails to lower case for comparison
rawListArr.forEach(element => {
  lowerListArr.push(element.toLowerCase());
});

//Remove duplicate emails & set filtered list to final array for processing
finalListArr = [...new Set(lowerListArr)];

//Create a new Webex chat room via Webex API
const createRoom = async () => {
  const response = await fetch('https://webexapis.com/v1/rooms', {
    method: 'POST',
	headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({title: 'Chat Title', isLocked: false, isAnnouncementOnly: false})
  });
  
  handleErrors(response);
  const content = await response.json(); //extract JSON from the http response 
  jsData = JSON.stringify(content);
  data = jsData.split("\"");
  room = data[3];
}

//Add member to the new chat room via their provided email
const addMembers = async () => {
  const response = await fetch('https://webexapis.com/v1/memberships', {
    method: 'POST',
	headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({roomId: room, personEmail: email, isModerator: false})
  });

  handleErrors(response);
}

//Post initial message to chat - will display at the top of the chat window for all participants to view. This is completely optional, no information needs to be provided to members of the chat upon initialization
const postMessage = async () => {
  const response = await fetch('https://webexapis.com/v1/messages', {
    method: 'POST',
	headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({roomId: room, text: 'Here is some sample text that will be posted into the chat. ' +
	'This section will be displayed if HTML markdown cannot be displayed due to a user\'s settings. ' +
    	' | You can also add variables from JavaScript or the HTML page - like this JS variable: ' + data + 
    	' | or this item pulled from the webpage: ' + document.getElementById("someElement").innerHTML,
    markdown: '<b>This text will be posted into the chat if the user\'s settings allow HTML markdown.</b>' +
    	'<br>This allows you to easily format the text as desired.' +
    	'<br><i>You can also still add variables - like this JS variable: ' + data + '</i>' +
    	'<br>Or this item pulled from the webpage: ' + document.getElementById("someElement").innerHTML})
  });
  
  handleErrors(response);
}

//Simple function to display an alert window if the chat fails to launch. In a production scenario you would likely want to expand this to trap more information and handle specific failure information.
function handleErrors(response) {
    if (!response.ok) {
        alert("There was an error creating the chat. Please try again later.");
        throw Error(response.statusText);
    }
    return response;
}

//This is the main function of the chat that accesses the other functions in the appropriate order to create the room, add all members, and post the initial message
async function startChat() {
    await createRoom();
    for (let i = 0; i < finalListArr.length; i++) {
        email = finalListArr[i];
        await addMembers();
    }
    postMessage();
}

//Call the startChat() function to kick off the chat
startChat();
