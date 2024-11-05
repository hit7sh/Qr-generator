import { useState } from 'react'
import './App.css'
import { Textarea } from "./components/ui/textarea"
import { Button } from './components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import Spinner from './components/ui/spinner'

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
          <Textarea
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
                  <a href={url} >
                    <img src={url} alt={"Loading..."} />
                  </a>
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
