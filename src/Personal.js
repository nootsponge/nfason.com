import Header from "./Components/Header";

function Personal() {
  return (
    <>
      <Header />

      <p>Tip: Use this link to view a professional version of this page.</p>
      <a href="/biz">Biz mode on</a>
      <h3>You got something to say to me?</h3>
      <ul>
        <li>
          Personal/Business Inquiries:{" "}
          <a href="mailto:contact@nfason.com">contact@nfason.com</a>
        </li>
        <li>
          Educational Inquiries:{" "}
          <a href="mailto:nfason@uab.edu">nfason@uab.edu</a>
        </li>
        <li>Contact me via email for my phone number.</li>
      </ul>

      <h3>Some quick facts</h3>
      <ol>
        <li>
          I'm a Computer Science student studying at the University of Alabama
          at Birmingham. Go Blazers!
        </li>
        <li>I'm from the south.</li>
        <li>I pronounce "pecan" like puh-kahn, not pee-can.</li>
        <li>I'm a Christian.</li>
        <li>
          <a href="/music">I love music.</a>
        </li>
      </ol>

      <h3>Hobbies include...</h3>
      <ul>
        <li>
          <a href="/films">Producing short films</a>
        </li>
        <li>
          <a href="/games">Sucking at video games</a>
        </li>
        <li>
          Live event production (audio engineering, lighting design,
          livestreaming, etc.)
        </li>
      </ul>
    </>
  );
}

export default Personal;
