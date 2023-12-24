import {PlayIcon} from '@heroicons/react/24/solid';
import styles from './index.module.css';
import { useRef, useState } from 'react';




export default function VideoPlayer ({src}){

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
        src={src} 
        loop
        controls={false}
        onClick={handlePlay}
      />
      {
        !playing &&
        <PlayIcon
          className={styles.player} 
          onClick={handlePlay}
        />
      }
    </div>
  )
}