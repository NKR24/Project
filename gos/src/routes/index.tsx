import { Title } from "solid-start"
import Navbar from "../components/navbar"
import Freshman from "~/routes/freshman"
import Adult from "~/routes/adult"
import University from "~/routes/university"
import Employer from "~/routes/employer"

export default function Home() {
  return (
    <>
      <Title>ГОС</Title>
      <Navbar />
      <Freshman />
    </>
  )
}
