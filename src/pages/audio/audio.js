import { useState } from "react";
import { useEffect } from "react";
import mediasServices from "../../api-services/medias-services";
import LocalStorageService from "../../services/localStorage";
function AudioBook(){
    const [sounds, setSound] = useState(
        [
            {
               type: '', 
               src: ''
            },
            {
                type: '', 
                src: ''
            }
        ]
    )
    const bookID = LocalStorageService.bookID;
    const tmp = null

    useEffect(() => {
        mediasServices.getDetailMedia(bookID).then(res => {
            // console.log(res.data)
            setSound(res.data.audios)
        }).catch(error => console.log(error))
    }, [])

    const converSoundList =  (sounds) => {
        let soundCo = sounds.map(sound => {
            return <li><a href="#" data-value={sound.src}>{sound.type}</a></li>
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
            <li style={{fontWeight: 'bold', fontSize:'20px'}}>Book audio
                <ul id="list" onClick={changeSound}>
                    {converSoundList(sounds)}
                </ul>
            </li>
            </ul>

           <audio id="audio" controls style={{width: '100%'}}>
                <source  id="audioSource" src={sounds[0].src}/>
            </audio>
      </div>
    ); 
}

export default AudioBook; 