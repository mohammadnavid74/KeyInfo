let bodyy=document.getElementById('bodyy');
let massage=document.getElementById('massage');
let main=document.getElementById('main');
let keyInput=document.getElementById('keyinput');
let eventKeyValue=document.getElementById('eventKeyValue');
let eventLocationValue=document.getElementById('eventLocationValue');
let eventWhichValue=document.getElementById('eventWhichValue');
let eventCodeValue=document.getElementById('eventCodeValue');
bodyy.addEventListener('keydown',function(event){
    console.log(event);
    massage.style.display='none';
    main.style.display='block';
    keyInput.innerHTML=event.keyCode;
    eventKeyValue.innerHTML=event.key;
    eventCodeValue.innerHTML=event.code;
    eventLocationValue.innerHTML=event.location;
    eventWhichValue.innerHTML=event.which;

})