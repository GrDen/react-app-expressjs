import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App"
import Home from "./Home"
import NewTeamForm from "./NewTeamForm"
import Teams from "./Teams"
import Team from "./Team"
import Invoices from './Invoices'
import Invoice from './Invoice'
import InvoicesSent from './InvoicesSent'
import Layout from './Layout'
// import your route components too

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="invoices" element={<Invoices />} >
          <Route path=":invoiceId" element={<Invoice />} />
          <Route path="sent" element={<InvoicesSent />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);