let btn= document.querySelector("#btn")
let transcriptElement = document.querySelector("#transcript");
let voice= document.querySelector("#voice")


const speak=(words)=>{
      let wordsSpoken= new SpeechSynthesisUtterance(words)
      wordsSpoken.rate=1
      wordsSpoken.volume=1
      wordsSpoken.pitch=1
      wordsSpoken.lang="Hi-GB"
      window.speechSynthesis.speak(wordsSpoken)
}

const greeting=()=>{
      let day= new Date()
      if(day.getHours()>=0 && day.getHours()<5){
            speak("Sleep is important, please go for sleep")
      }else if(day.getHours()>5 && day.getHours()<12){
            speak("Good Morning, How may I help you")
      }
      else if(day.getHours()>=12 && day.getHours()<16){
            speak("Good afterNoon, How may I assist you?")
      }else{
            speak("Good Evening, How may I assist you?")
      }
}
window.addEventListener('load',()=>{
    greeting()
})

let speechRecognigation= window.SpeechRecognition || window.webkitSpeechRecognition
let recognigation= new speechRecognigation()
recognigation.onresult=(e)=>{
      let currIndex=e.resultIndex
      let transcriptedSentence=e.results[currIndex][0].transcript
      transcriptElement.textContent = transcriptedSentence;
      acceptCommand(transcriptedSentence.toLowerCase())
}

btn.addEventListener('click',()=>{
      recognigation.start()
      btn.style.display="none"
      voice.style.display="block"
      
})

const acceptCommand=(message)=>{
      btn.style.display="flex"
      voice.style.display="none"
      if(message.includes("hello") || message.includes("hi") || message.includes("hey")){
            speak("Hello, How May I assist You?")
      }else if(message.includes("Hey, who are you?")){
            speak("I am PL's virtual helper.")
      }else if(message.includes("open youtube")){
            speak("opening youtube")
            window.open("https://www.youtube.com")
      }else if(message.includes("open facebook")){
            speak("opening youtube")
            window.open("https://www.facebook.com")
      }else if(message.includes("open instagram")){
            speak("opening youtube")
            window.open("https://www.instagram.com")  
      }else if(message.includes("open github")){
            speak("opening youtube")
            window.open("https://github.com/")  
      }else if(message.includes("open calculator")){
            speak("opening calculator")
            window.open("calculator://")
      }else if(message.includes("what is the time now")){
            let time=new Date().toLocaleTimeString(undefined,{hour:"numeric",minute:"numeric"})
            speak(`Current time is ${time}`)
      }else if(message.includes("what is the date today")){
            let date=new Date().toLocaleDateString(undefined,{day:"numeric",month:"short"})
            speak(`Current date is ${date}`)
      }
      else{
            speak(`hey I found ${message} for you`)
            window.open(`https://www.google.com/search?q=${message}`)
      }
                  
}