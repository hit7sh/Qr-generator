import { useState } from 'react'
import './App.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Button } from './components/ui/button'
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import { Input } from './components/ui/input'

function App() {
  const [inputText, setInputText] = useState("");
  const [url, setUrl] = useState("");
  const handleGenerate = () => {
    setUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText}`);
  };
  return (
    <>
      <div>
        <div className="grid w-full gap-2">
          <Input
            placeholder="Type your message/link here."
            onChange={(event) => setInputText(event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' && handleGenerate()}
          />
          <Button className="bg-slate-500" onClick={handleGenerate}>Generate Qr</Button>

        </div>

        {
          !!url?.length && !!inputText?.length && (
            <Card>
              <CardHeader>
                <CardTitle>
                  Your Qr Code:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <center>
                  <LazyLoadImage
                    src={url}
                    PlaceholderSrc="./images/blurimage.jpg"
                    effect="blur"
                  />
                </center>

              </CardContent>
            </Card>
          )
        }
      </div>
    </>
  )
}

export default App
