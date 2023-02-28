const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New place</h1>
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label>Place Name </label>
                        <input className="form-control" id="name" name="name" required />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="city">Place City</label>
                        <input className="form-control" type="text "id="city" name="city" />
                    </div>
                    <br />
                    <div className="form-group">
                    <label htmlFor="state">Place State</label>
                        <input className="form-control" type="text "id="state" name="state" />
                    </div>
                    <br />
                    <div className="form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" type="text "id="cuisines" name="cuisines" required/>
                    </div>
                    <br />
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                    {/* Dont understand how the submit button rerouted to the '/places' page */}
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form