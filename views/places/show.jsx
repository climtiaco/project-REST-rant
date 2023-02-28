const React = require('react')
const Def = require('../default')

function show ({ place, id }) {
    return (
        <Def>
            <main>
                <h1>{ place.name }</h1>
            </main>
            <body>
                <div className="placePic">
                </div>
                <div className="rating">
                    <h2>Rating</h2>
                    <p> Not Rated</p>
                </div>
                <div className="description">
                    <h2>Description</h2>
                    <p>Filler</p>
                </div>
                <div className="comments">
                    <h2>Comments</h2>
                    <p></p>
                </div>
                <a href={`/places/${id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
             </body>
        </Def>
    )
}

module.exports = show