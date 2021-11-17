const userName = document.querySelector(".user-component__title");

function colorSwitch(){
  userName.classList.toggle('active');
}



function offlineEventHandler(){
  alert("OMG There'sno - wifi beep")
}
function onlineEventHandler(){
  alert("reconneted beep -")
}

userName.addEventListener('click', colorSwitch);

userName.addEventListener('mouseenter', handleMouseOn);

userName.addEventListener('mouseleave', handleMouseLeave);

window.addEventListener('resize',resizeEventHandler);
window.addEventListener('offline', offlineEventHandler);
window.addEventListener('online', onlineEventHandler)

console.dir(userName);