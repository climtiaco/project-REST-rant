const React = require('react')
const Def = require('../default.jsx')

function edit_form ({ place, id }) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                {/* This route is correct because when I click the edit button, it takes me to the correct edit page. But when I choose submit, it doesn't take me to the correct place */}
                <form method="POST" action={`/places/${id}?_method=PUT`} >
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
                        <input className="form-control" type="text "id="city" name="city" defaultValue={place.city} />
                    </div>
                    <br />
                    <div className="form-group">
                    <label htmlFor="state">Place State</label>
                        <input className="form-control" type="text "id="state" name="state" defaultValue={place.state} />
                    </div>
                    <br />
                    <div className="form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" type="text "id="cuisines" name="cuisines" required/>
                    </div>
                    <br />
                    <input className="btn btn-primary" type="submit" value="Edit Place" />
                    
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form
