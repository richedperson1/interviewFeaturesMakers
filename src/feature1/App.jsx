import { useEffect, useState } from "react"
import UserInputBox from './components/inputBox'
import DiscreteSlider from "./components/sliderBar"
import "./app.css"
// import { selectClasses } from "@mui/material"
function App() {
  const [totalAssets, setTotalAssets] = useState(0)
  const [interestRate, setInterestRate] = useState(12)
  const [processFees, setProcessFees] = useState(1)
  const [downpayment, setDownPayment] = useState(20)
  const tenure = [12, 24, 36, 48, 60]
  const [tenureIndSelect, setTenureIndSelect] = useState(0)
  const [emiRange, setEmiRange] = useState([0, 1])
  const [loanPerMonth, setLoanPerMonth] = useState(0)
  const emiCalculator = () => {
    // [p*r*(1+r)^n]/[(1+r)^(n-1)]
    //  [P x R x (1+R)^N]/[(1+R)^N-1].  
    const totalLoan = totalAssets - ((downpayment) / 100) * totalAssets;
    const rate = interestRate / 100;
    const tenures01 = tenure[0] / 12;

    const miniLoan1 = (totalLoan * rate * ((1 + rate) ** tenures01)) / ((1 + rate) ** (tenures01 - 1))


    // maxi loan seelect
    const totalLoan1 = totalAssets - (0.99) * totalAssets;
    console.log("This is total totalLoan1,", totalLoan1);
    const tenures02 = tenure[0] / 12;
    const miniLoan2 = (totalLoan1 * rate * (1 + rate) ** tenures02) / ((1 + rate) ** (tenures02 - 1));
    setEmiRange([miniLoan2, miniLoan1]);
    return 0
  }
  useEffect(() => {
    emiCalculator()
  }, [interestRate, tenureIndSelect, totalAssets])


  const Number2RupeesConverter = (selectNum) => {
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    });
    return formatter.format(selectNum);
  }
  return (
    <>
      <div className="container flex-col " >
        <h1>Rutvik Jaiswal EMI calculator</h1>
        <div className="main-box">


          <div className="entity flex-col">
            <span>Total Assets value is : {
              (() => {
                const formatter = new Intl.NumberFormat('en-IN', {
                  style: 'currency',
                  currency: 'INR'
                });

                return formatter.format(totalAssets);
              })()
            }</span>
            <UserInputBox funValue={totalAssets} setFunction={setTotalAssets} name={"Assets"} />
          </div >
          <div className="entity flex-col">
            <span>Interest rate : {interestRate}</span>
            <UserInputBox funValue={interestRate} setFunction={setInterestRate} name={"Assets"} defaultValue={9} />
          </div>
          <div className="entity flex-col">
            <span>Processing fees is : {processFees}</span>
            <UserInputBox funValue={processFees} setFunction={setProcessFees} name={"Assets"} defaultValue={1} />
          </div>
        </div >
        <div className="slider-entity downpayment flex-col">
          <span className="downpayment">Down Payment</span>
          <span className="downpaymentValue">Total Downpayment is : {Number2RupeesConverter((((downpayment / 100) * (1 + processFees / 100))) * totalAssets)}</span>
          <DiscreteSlider miniRange={20} maxiRange={99} funvalue={downpayment} setFunction={setDownPayment} />

        </div>

        <div className="slider-entity loan-emi flex-col">
          <span className="loan-emi-title">Loan per months</span>
          <span className="loan-emi-value">Monthly loan amount : {loanPerMonth}</span>
          <DiscreteSlider miniRange={emiRange[0]} maxiRange={emiRange[1]}
            funvalue={loanPerMonth} setFunction={setLoanPerMonth} />
        </div>
        <div className="tenure-select flex-col" style={{ gap: "10px" }}>
          <span className="title">Select tenures : {tenure[tenureIndSelect]}</span>
          <div className="tenure-box flex" style={{ justifyContent: "space-between" }}>
            {tenure && tenure.map((val, ind) => {
              return (
                <span className="select-tenure"
                  key={`tenure-select-key${ind}`}
                  id={`${tenureIndSelect === ind ? 'active' : ''}`}
                  onClick={() => {
                    // tenureIndSelect,setTenureIndSelect
                    setTenureIndSelect(ind)
                  }}
                >{val}</span>
              )
            })}
          </div>

        </div>
      </div>


    </>
  )
}

export default App
