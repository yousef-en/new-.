import { Clients } from "../components/Clients"
import { Community } from "../components/Community"
import { Header } from "../components/Header"
import { Section } from "../components/Section"
import { Unlock } from "../components/Unlock"

export const Home =()=>{

    return(
        <>
        <Header/>
        <Section/>
        <Clients/>
        <Community />
        <Unlock />
       
        </>
    )
}