import React, { Component } from 'react';

class MainNav extends Component {
    render() {
        return (
            <nav className='nav nav-320'>
                <span></span>
                <ul className='ul-320'>
                    <li>Home</li>
                    <li>O mnie</li>
                    <li>Galeria</li>
                    <li>CV</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">

          <MainNav />

          <section className="home-page">
              <header>Witaj!</header>
              <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, nihil nostrum officiis quae tempore
                  ullam.</h1>
              <button className='btn-home-page'>ZACZNIJ TU</button>
              <div className='circle-effect'>
                  <span className='wave1'></span>
                  <span className='wave2'></span>
                  <span className='wave3'></span>
              </div>
          </section>

          <section className='aboutme-page'>
              <header className='header'><p>O mnie</p></header>
              <div className="img-aboutme-page">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at, beatae commodi corporis culpa deserunt.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at, beatae commodi corporis culpa deserunt.</p>
          </section>

          <section className="gallery-page">
              <header className='header'><p>Galeria</p></header>

              <article className='gallery'>
                  <div className="select-gallery"></div>
                  <p>Galeria z serialu kryminalnego</p>
              </article>
              <article className='gallery'>
                  <p>Galeria z zajec w teatrze</p>
                  <div className="select-gallery"></div>
              </article>
              <article className='gallery'>
                  <div className="select-gallery"></div>
                  <p>Galeria z wystepu w Oplu</p>
              </article>

          </section>

          <section className="cv-page">
              <header className='header'><p>CV</p></header>

              <div className="cv">
                  <button>Pobierz</button>
              </div>

          </section>

          <section className="contact-page">
              <header className='header'><p>Kontakt</p></header>

              <div className="contact-links">
                  <div>
                      <a href="https://www.facebook.com/karolina.ficht" target="_blank">
                          <div className='svg-fb' ></div>
                          <p>fb.com/karolina.ficht</p>
                      </a>
                  </div>
                  <div>
                      <a href="karolinaficht@wp.pl" target="_blank">
                          <div className='svg-mail' ></div>
                          <p>karolinaficht@wp.pl</p>
                      </a>
                  </div>
              </div>

              <form action=''>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="nick"/>
                  <label htmlFor="mail">E-mail*</label>
                  <input type="email" id="mail" placeholder="e-mail*"/>
                  <textarea name="textarea" placeholder="Leave me a message*" defaultValue={""}/>
                  <input type="submit" defaultValue="Wyslij"/>
              </form>

          </section>

          <footer className='foot'>
              <p>ALL RIGHTS RESERVED &copy; 2018</p>
              <div>
                  <p>Created by M.F.</p>
                  <p>Karolina Ficht</p>
              </div>
          </footer>
      </div>
    );
  }
}

export default App;
