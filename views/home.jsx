const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div className="container-fluid"> 
                    <div className="row">
                        <div className="col-6">
                        <img id="greenfood" src="/images/Greenfood_pic.jpg" alt="Picture of green foods" />
                        <div className="photoCred">
                        Photo by <a href="https://unsplash.com/photos/sTPy-oeA3h0">Dose Juice</a> on <a href="https://unsplash.com">Unsplash</a>
                        </div>
                    <div className="col-6">
                        Col two
                    </div>
                    </div>
                    </div>
                    <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
                    </div>

            </main>
        </Def>
    )
}

module.exports = home