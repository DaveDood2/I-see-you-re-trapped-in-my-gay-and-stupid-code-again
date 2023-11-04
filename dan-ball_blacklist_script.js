
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// * Code made by Lucy The Pirate!... Or whatever my username is currently at https://github.com/DaveDood2 *
// * Just add a user's tag to blacklistedTags, then copy and paste this code into a browser extension that *
// * automatically runs javascript on a page!       
// *
// * If you are using Firefox
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *



var blacklistedTags = ["#OD9W1nHC", "#sVOPyZTu"]

var toRemove = []
var users = document.getElementsByClassName("bbs")
for (var i = 0; i < users.length; i ++){
	var user_tag = users[i].getElementsByClassName("bbs_tm")[0].innerText.split(" ")[0]

	if (blacklistedTags.includes(user_tag)){
		toRemove.push(users[i])
	}
}

for (var j = 0; j < toRemove.length; j ++){
	toRemove[j].remove()
}
