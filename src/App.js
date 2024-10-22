import { useRef, useState } from 'react'

export default function VideoPlayer() {
  const videoRef = useRef(null)
  const [status, setStatus] = useState('Duraklatıldı / Oynatılıyor') 

  const handlePlay = () => {
    videoRef.current.play()  
    setStatus('Oynatılıyor') 
  }

  const handlePause = () => {
    videoRef.current.pause() 
    setStatus('Duraklatıldı') 
  }

  return (
    <div className='max-w-[500px] space-y-4 p-8 mx-auto'>
      <h1 className='text-center font-bold text-3xl'>Video Oynatıcı</h1>
      <video
        ref={videoRef}
        src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
        className='w-full'
      />
      <div className='flex justify-between'>
        <button
          onClick={handlePause}
          className='text-orange-500 font-semibold'
        >
          Duraklat
        </button>
        <div>{status}</div> 
        <button
          onClick={handlePlay}
          className='text-indigo-500 font-semibold'
        >
          Oynat
        </button>
      </div>
    </div>
  )
}
