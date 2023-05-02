import { ArrowBack } from "@mui/icons-material"
import "./success.css"
import { useNavigate } from "react-router-dom"

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="success">
    <div className="success-card">
      <div className="check-icon">
        <i className="checkmark">✓</i>
      </div>
        <h1>Payment Received</h1> 
        <p>We received your purchase request</p>
        <div onClick={()=>navigate("/home")} style={{display : "flex" , alignItems : "center",cursor : "pointer"}}>
        <ArrowBack /> Back to home
        </div>
      </div>
      </div>
  )
}

export default Success