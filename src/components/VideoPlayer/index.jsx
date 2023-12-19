import {PlayIcon} from '@heroicons/react/24/solid';
import styles from './index.module.css';
import { useRef, useState } from 'react';

const SRC = "https://jobsrv.netlify.app/src/video/reel.mp4";



export default function VideoPlayer (){

  const [playing, setPLaying] = useState(false);
  const video = useRef();

  const handlePlay = () => {
    if(!playing){
      video.current.play();
      setPLaying(true);
    }else{
      video.current.pause();
      setPLaying(false);
    }
  }
  return (
    <div>

      <video 
        ref={video}
        className={styles.video} 
        src={SRC} 
        controls={false}
      />
      {
        <PlayIcon className={styles.player} onClick={handlePlay}/>
      }
    </div>
  )
}