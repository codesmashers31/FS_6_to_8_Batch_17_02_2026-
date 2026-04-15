

const VoteForm = () => {
  return (
    <div className="section-content vote-form-content">
      <h2>Vote Form</h2>

      <form className="vote-form">
        <div className="form-field">
          <label htmlFor="voter-name">Name</label>
          <input id="voter-name" type="text" placeholder="Enter your name" />
        </div>

        <div className="form-field">
          <label htmlFor="party-select">Select Party</label>
          <select id="party-select">
            <option>-- Select Party --</option>
            <option>TVK</option>
            <option>DMK</option>
            <option>ADMK</option>
            <option>NTK</option>
            <option>BJP</option>
            <option>INC</option>
            <option>CPM</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Submit Vote</button>
      </form>
    </div>
  )
}

export default VoteForm;