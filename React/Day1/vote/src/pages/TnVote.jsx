import Cantidate from '../components/Cantidate'
import Ideas from '../components/Ideas'
import Logo from '../components/Logo'
import PartyNames from '../components/PartyNames'
import VoteForm from '../components/VoteForm'

const TnVote = () => {
  return (
    <div className="tn-vote-grid">
      <section className="section-card">
        <Logo />
      </section>

      <section className="section-card">
        <PartyNames />
      </section>

      <section className="section-card">
        <Cantidate />
      </section>

      <section className="section-card">
        <Ideas />
      </section>

      <section className="section-card">
        <VoteForm />
      </section>
    </div>
  )
}

export default TnVote