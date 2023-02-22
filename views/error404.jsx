const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p id="error">Oops, sorry, we can't find this page!</p>
                <div>
                    <iframe id="ricky" src="https://giphy.com/embed/Ju7l5y9osyymQ" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    <p><a id="ricky" href="https://giphy.com/gifs/rick-astley-Ju7l5y9osyymQ">via GIPHY</a></p>"
                </div>
            </main>
        </Def>
    )
}

module.exports = error404