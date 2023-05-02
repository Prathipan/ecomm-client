import { Link } from "react-router-dom"
import "./orders.css"

const OrderDetails = ({order}) => {
  return (
    <div className="order-details-wrapper">
        <table>
            <tbody>
            <tr>
                    <td>Order Id :</td>
                    <td>{order._id}</td>
                </tr>
                <tr>
                    <td>Transaction Id :</td>
                    <td>{order.transactionId}</td>
                </tr>
                <tr>
                    <td>Address :</td>
                    <td>{order.address.line1}<br/>{order.address.line2 && order.address.line2}<br/>{order.address.city}<br/>{order.address.state}</td>
                </tr>
                <tr>
                    <td>Bill Amount :</td>
                    <td>{order.bill}</td>
                </tr>
                <tr>
                    <td>Order Date :</td>
                    <td>{order.createdAt.slice(0,10)}</td>
                </tr>
                <tr>
                    <td>status :</td>
                    <td>{order.status}</td>
                </tr>
            </tbody>
        </table>
        <Link to="/ordered-products" state={order.products} className="view-button">View ordered products</Link>
    </div>
  )
}

export default OrderDetails