import {useState,useEffect} from 'react';
import Player from './Player';
import React from 'react';
import Navigation from '../Navigation';

const Playmusic = () => {
    const [songs] = useState([
        {
          title: "القناص",
          artist: "Spacetoon",
          img_src: "https://pbs.twimg.com/profile_images/630283601796550656/Uu8YZsGj_400x400.jpg",
          src: "./music/kanas.mp3"
        },
        {
          title: "النمر المقنع",
          artist: "Spacetoon",
          img_src: "https://i1.sndcdn.com/artworks-000044238275-0lr0la-t500x500.jpg",
          src: "./music/namer.mp3"
        },
        {
          title: "سلام دانك",
          artist: "Spacetoon",
          img_src: "https://static10.tgstat.ru/channels/_0/fe/fede84e1e7de1103f4b02229d6b48a9e.jpg",
          src: "./music/slamdank.mp3"
        },
        {
          title: "دروب ريمي",
          artist: "Spacetoon",
          img_src: "./images/musicimages/song-3.jpg",
          src: "./music/rimi.mp3"
        },
        {
          title: "باباي",
          artist: "Spacetoon",
          img_src: "https://media.gemini.media/img/large/2018/2/11/2018_2_11_13_58_39_708.jpg",
          src: "./music/papay.mp3"
        },
        {
          title: "سابق و لاحق",
          artist: "Artist 4",
          img_src: "https://i1.sndcdn.com/artworks-000112593571-vgmc90-t500x500.jpg",
          src: "./music/sabak.mp3"
        },
      ]);
      const [currentSongIndex, setCurrentSongIndex] = useState(0);
      const [nextSongIndex, setNextSongIndex] = useState(0);
      useEffect(() => {
        setNextSongIndex(() => {
          if (currentSongIndex + 1 > songs.length - 1) {
            return 0;
          } else {
            return currentSongIndex + 1;
          }
        });
      }, [currentSongIndex]);
  return( 
  <div>
  <Navigation/>
   <div className="music">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
      </div>
  
  </div>
  )};

export default Playmusic;
