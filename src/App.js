import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Selfstarter</h1>
      </div>
      <hr />
      <div className="container__first">
        <div className="container__first--title">
          <h2>Roll your own crowdfunding</h2>
        </div>
        <div className="container__first--video">
          <iframe
            width="512"
            height="385"
            src="https://www.youtube.com/embed/p9cwJZ7M52c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="container__first--details">
          <ul className="container__first--details__list backers"></ul>
          <ul className="container__first--details__list"></ul>
          <ul className="container__first--details__list days"></ul>
        </div>
        <div className="container__first--progressBar"></div>

        <div className="container__first--reserve">
          <p>Code Available on GitHub</p>
          <a href="https://github.com/fearm3/selfstarterUs">Fork Now</a>
          <p>Free and Open Source</p>
          <p>
            You'll get this exact site. All you'll need to get started is a
            great product.
          </p>
        </div>
      </div>
      <hr />
      <div className="container__second">
        <div className="container__second--desc">
          <h3>What is Selfstarter?</h3>
          <p>
            Selfstarter is an open source starting point for building your own
            ad-hoc crowdfunding site. It was put together by the folks at
            <a href="https://api.gy/">Lockitron</a> after they were
            <a href="https://techcrunch.com/2012/10/07/the-story-of-lockitron-crowdfunding-without-kickstarter/">
              turned down from Kickstarter.
            </a>
          </p>
        </div>
        <div className="container__second--icon">
          <p>Add icon!!!</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default App;
