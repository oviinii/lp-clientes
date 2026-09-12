import { submitBriefing } from '../actions'
import BriefingForm from './BriefingForm'
export const metadata={title:'Preencher briefing | LP Clientes'}
export default function Page(){return <main className="container" style={{padding:'3rem 0 5rem'}}><p className="eyebrow">Briefing da Landing Page</p><h1 className="section-title">Conte tudo que precisamos para criar sua LP.</h1><p className="muted" style={{maxWidth:720}}>Preencha com calma. Se algo ainda não estiver definido, escreva “A definir”.</p><BriefingForm action={submitBriefing}/></main>}
