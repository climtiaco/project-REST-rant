const React = require('react')
const Def = require('../default')


function placesIndex ({places}) {
    let placesFormatted = places.map((place, index) => {
    return (
        <div className="col-sm-6">
            <h2>
                <a href={`/places/${index}`} >
                {place.name}
                    </a>
                </h2>
            <p className="text-center">
                {place.cuisines}
            </p>
            <img src={place.pic} width="400" height="300" className="mx-auto" alt={place.name}></img>
            <p className="text-center">
                Located in {place.city}, {place.state}
            </p>
        </div>
    )
})
    return (
        <Def>
            <main>
                <h1>Places to rant and rave about</h1>
                <div className="row">
                {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = placesIndex