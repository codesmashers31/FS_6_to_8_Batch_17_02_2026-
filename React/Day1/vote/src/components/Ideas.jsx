const Ideas = () => {
  const partyIdeas = [
    {
      title: 'TVK (Tamilaga Vettri Kazhagam)',
      points: [
        'Youth-focused development and employment opportunities',
        'Transparent governance and anti-corruption approach',
        'Education and skill development for future growth'
      ]
    },
    {
      title: 'DMK (Dravida Munnetra Kazhagam)',
      points: [
        'Social justice and equality',
        'State rights and federal autonomy',
        'Focus on education, healthcare, and infrastructure'
      ]
    },
    {
      title: 'ADMK (AIADMK)',
      points: [
        'Welfare schemes for poor and middle-class people',
        'Women empowerment and safety',
        'Rural development and agriculture support'
      ]
    },
    {
      title: 'NTK (Naam Tamilar Katchi)',
      points: [
        'Tamil identity and cultural protection',
        'Agriculture-first policy and farmer support',
        'Environmental protection and natural resources focus'
      ]
    },
    {
      title: 'BJP (Bharatiya Janata Party)',
      points: [
        'National development and economic growth',
        'Strong central leadership and national security',
        'Digital India and infrastructure modernization'
      ]
    },
    {
      title: 'INC (Indian National Congress)',
      points: [
        'Inclusive growth and secularism',
        'Welfare schemes for all sections of society',
        'Focus on education, healthcare, and employment'
      ]
    }
  ]

  return (
    <div className="section-content ideas-content">
      <h2>Party Ideas</h2>
      <div className="idea-grid">
        {partyIdeas.map((party) => (
          <article key={party.title} className="idea-card">
            <h3>{party.title}</h3>
            <ul>
              {party.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Ideas