function createCard(thumbnail,  duration, title, channelName, views, time){

let timage=thumbnail
document.querySelector(".thumbnail").setAttribute("src",timage)

document.querySelector(".btn").innerText=duration;

document.querySelector(".h1").innerText=title;

document.querySelector(".span1").innerText=channelName

document.querySelector(".span2").innerText=views

document.querySelector(".span3").innerText=time



}

createCard("https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDVLIUfmrskNAha1yNa-7ygsEeNEA","21:21","Hello welcome to my sigma webdevelopment video","code with pratik","1.1M","2min")


createCard("https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDVLIUfmrskNAha1yNa-7ygsEeNEA","20:21","Hello welcome to my sigma webdevelopment video","code with pratik","1.1M","2min")


