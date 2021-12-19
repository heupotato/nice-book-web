import { useState } from "react";
import { useEffect } from "react";
function AudioBook(){
    const [sounds, setSound] = useState(
        [
            {
               soundType: "HCM-Female", 
               soundSource: "https://docs.google.com/uc?export=download&id=1YbVvzpTGSGSFRuzy7INh1qH8vU8BU8zr"
            },
            {
                soundType: "HCM-Male", 
                soundSource: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3"
            }
        ]
    )
    
    //set Sound từ API trong này nhé 
    useEffect(() => {

    }, [])

    const converSoundList =  (sounds) => {
        let soundCo = sounds.map(sound => {
            return <li><a href="#" data-value={sound.soundSource}>{sound.soundType}</a></li>
        })
        return soundCo
    }

    const changeSound  = (e) =>  {
        e.preventDefault();
      
        var elm = e.target;
        var audio = document.getElementById('audio');
      
        var source = document.getElementById('audioSource');
        source.src = elm.getAttribute('data-value');
      
        audio.load(); 
        audio.play(); 
      };

    return(
        <div>
            <ul style={{listStyle:'none'}}>
            <li>Sound files
                <ul id="list" onClick={changeSound}>
                    {converSoundList(sounds)}
                </ul>
            </li>
            </ul>

           <audio id="audio" controls>
                <source  id="audioSource" src={sounds[0].soundSource}/>
            </audio>
      </div>
    ); 
}

export default AudioBook; 