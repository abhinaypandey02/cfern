
const baseAPIUrl = 'http://localhost:4000'
import axios from "axios"
import { sampleData } from "../../sampleData"

export const sendForm = async () => {
  await axios.post(`${baseAPIUrl}/viewPdf`, sampleData)

}
