import VideoPlayer from '../VideoPlayer';

const VIDEOS = [
  {
    id:1,
    author:"john",
    description:"La jardinería del Barroco se desarrolló en Europa desde el siglo xvii hasta mediados del siglo xviii.",
    likes:123,
    shares:234,
    comments:333,
    songTitle:'sonido original - zzzeroki',

    src: 'https://jobsrv.netlify.app/src/video/reel.mp4',

  },
  { 
    id:2,
    author:"random1",
    description:"La jardinería del Barroco se desarrolló en Europa desde el siglo xvii hasta mediados del siglo xviii.",
    likes:123,
    shares:234,
    comments:333,
    songTitle:'sonido original - zzzeroki',
    src: 'https://jobsrv.netlify.app/src/video/descarga1.mp4',

  },
  { 
    id:3,
    author:"random2",
    description:"La jardinería del Barroco se desarrolló en Europa desde el siglo xvii hasta mediados del siglo xviii.",
    likes:123,
    shares:234,
    comments:333,
    songTitle:'sonido original - zzzeroki',
    src: 'https://jobsrv.netlify.app/src/video/descarga2.mp4',

  },
  { 
    id:4,
    author:"random3",
    description:"La jardinería del Barroco se desarrolló en Europa desde el siglo xvii hasta mediados del siglo xviii.",
    likes:123,
    shares:234,
    comments:333,
    songTitle:'sonido original - zzzeroki',
    src: 'https://jobsrv.netlify.app/src/video/descarga3.mp4',

  },
  { 
    id:5,
    author:"random4",
    description:"La jardinería del Barroco se desarrolló en Europa desde el siglo xvii hasta mediados del siglo xviii.",
    likes:123,
    shares:234,
    comments:333,
    songTitle:'sonido original - zzzeroki',
    src: 'https://jobsrv.netlify.app/src/video/descarga7.mp4',

  }

];

export default function FeedVideos (){

  return (
    VIDEOS.map((video)=>{
      return (<VideoPlayer key={video.id} src={video.src}></VideoPlayer>)
    })
  );

}