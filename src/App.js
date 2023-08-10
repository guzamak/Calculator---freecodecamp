import { useState } from 'react'
import './App.css'

function App() {

  const [allDisply, setAllDisplay] = useState("")
  const [ans, setAns] = useState("0")

  const pushNum = (e) => {
    const item = e.target.innerText
    if (ans == "0") {
      setAns(item)
      setAllDisplay(item)
    } else if (isNaN(ans)) {
      setAns(item)
      setAllDisplay(allDisply + item)
    } else {
      setAns(ans + item)
      setAllDisplay(allDisply + item)
    }
  }
  const pushdec = (e) => {
    const item = e.target.innerText

    if (ans.includes('.') == false) {
      setAllDisplay(allDisply + item)
      setAns(ans + item)
    }
  }
  const pushOpa = (e) => {
    const item = e.target.innerText
    if (ans == "0") {
      setAns(item)
      setAllDisplay(item)
    }
    else if (ans != "0") {
      setAns(item)
      setAllDisplay(allDisply + item)
      if (isNaN(allDisply[allDisply.length - 1])) {
        if (isNaN(allDisply[allDisply.length - 2])) {


          const newdisplay = (allDisply).slice(0, -2)
          setAllDisplay(newdisplay + item)

        }else if(allDisply[allDisply.length - 1] == item && (item == "+" || item == "-")){

          const newdisplay = allDisply.slice(0, -1)
          setAllDisplay(newdisplay + item)
        }
      }
    }
  }

  const ac = () => {
    setAllDisplay("")
    setAns("0")
  }

  const showans = () => {
    setAns('0')
    if (isNaN(allDisply)) {
      setAllDisplay(eval(allDisply).toString())//eval return numnber
      setAns(eval(allDisply).toString())
    }
    else {
      setAllDisplay(allDisply)
      setAns(allDisply)
    }
  }


  return (
    <>
      <div id="calculator">
        <div id="show">
            <p>{allDisply}</p>
            <p id="display">{ans}</p>
        </div>
        <div className="" id="clear" onClick={ac} >AC</div>
        <div className="opa" id="divide" onClick={pushOpa}>/</div>
        <div className="opa" id="multiply" onClick={pushOpa}>*</div>
        {/*  */}
        <div className="num" id="seven" onClick={pushNum}>7</div>
        <div className="num" id="eight" onClick={pushNum}>8</div>
        <div className="num" id="nine" onClick={pushNum}>9</div>
        <div className="opa" id="subtract" onClick={pushOpa}>-</div>
        {/*  */}
        <div className="num" id="four" onClick={pushNum}>4</div>
        <div className="num" id="five" onClick={pushNum}>5</div>
        <div className="num" id="six" onClick={pushNum}>6</div>
        <div className="opa" id="add" onClick={pushOpa}>+</div>
        {/*  */}
        <div className="num" id="one" onClick={pushNum}>1</div>
        <div className="num" id="two" onClick={pushNum}>2</div>
        <div className="num" id="three" onClick={pushNum}>3</div>
        {/*  */}
        <div className="num" id="zero" onClick={pushNum}>0</div>
        <div className="num" id="decimal" onClick={pushdec}>.</div>
        <div className="" id="equals" onClick={showans}>=</div>


      </div>
    </>
  )
}

export default App
