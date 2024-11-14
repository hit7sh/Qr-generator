import { useEffect, useState } from 'react'
import './App.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Button } from './components/ui/button'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Input } from './components/ui/input'
import { SiWhatsapp } from "react-icons/si";

function App() {
  const [inputText, setInputText] = useState("");
  const [url, setUrl] = useState("");
  const [copyClicked, setCopyClicked] = useState(false);
  const [generateClicked, setGenerateClicked] = useState(false);
  const [showClipboard, setShowClipboard] = useState(false);

  useEffect(() => {
    if (copyClicked) {
      setTimeout(() => setCopyClicked(false), 2000);
    }
    if (generateClicked) {
      setTimeout(() => setShowClipboard(true) || setGenerateClicked(false), 2000);
    }
  }, [copyClicked, generateClicked])
  const handleGenerate = () => {
    setGenerateClicked(true);
    setUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText}`);
  };
  const handleCopyClick = async () => {
    try {
      const blob = await fetch(url).then(r => r.blob());
      navigator.clipboard.write?.([
        new ClipboardItem({
          'image/png': blob,
        })
      ])
    } catch (error) { }
    setCopyClicked(true);
  }

  return (
    <>
      <center>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            className="text-black"
            placeholder="Type your message/link here."
            onChange={(event) => setInputText(event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' && handleGenerate()}
          />
          <Button className="bg-slate-500 text-black" onClick={handleGenerate}>Generate Qr</Button>
        </div>

        {
          !!url?.length && !!inputText?.length && (
            <div className="mt-6">
              <center>
                <LazyLoadImage
                  src={url}
                  PlaceholderSrc="./images/blurimage.jpg"
                  effect="blur"
                />
              </center>
              {
                showClipboard && (
                  <>
                    <Button
                      className="bg-slate-500 text-black mr-2"
                      onClick={handleCopyClick}
                    >
                      {!copyClicked ? 'Copy Image📋' : 'Image copied✅'}
                    </Button>
                    <Button
                      className="bg-slate-500 text-black"
                    >
                      <a
                        href={`https://wa.me/?text="${url}"`}
                        target="_blank"
                      >
                        <div className="flex">
                          <span className="pr-1">Share via</span><SiWhatsapp />
                        </div>
                      </a>
                    </Button>
                  </>
                )
              }
            </div>
          )
        }
      </center>
    </>
  )
}

export default App
