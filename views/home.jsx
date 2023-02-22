const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img id="greenfood" src="/images/Greenfood_pic.jpg" alt="Picture of green foods" />
                <div>
                    Photo by <a href="https://unsplash.com/photos/sTPy-oeA3h0">Dose Juice</a> on <a href="https://unsplash.com">Unsplash</a>
                </div>
                </div>
                <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

            </main>
        </Def>
    )
}

module.exports = home