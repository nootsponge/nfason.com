import Header from "./Components/Header";
import Experience from "./Components/Experience";

function Biz() {
  return (
    <>
      <Header />

      <p style={{ marginBottom: "0" }}>
        To view a more personal version of this page, click the link below.{" "}
      </p>
      <a href="/">Biz mode off</a>
      <p>
        Hello, I'm Nicholas Fason, a Computer Science student from Alabama, U.S.
        I'm attending the{" "}
        <a href="https://uab.edu" target="_blank" rel="noreferrer">
          University of Alabama at Birmingham
        </a>{" "}
        in hopes of earning a Bachelors of Science in Computer Science by 2025.
      </p>
      <p>
        I enjoy building websites and web applications mostly, meaning I love
        working with APIs, databases, and other web-connected things.
      </p>
      <p>
        If you'd like to chat about employment or freelance work, feel free to
        contact me at my email below.
      </p>

      <h3>CONTACT INFORMATION</h3>
      <ul>
        <li>
          Personal/Business Inquiries:{" "}
          <a href="mailto:contact@nfason.com">contact@nfason.com</a>
        </li>
        <li>
          Educational Inquiries:{" "}
          <a href="mailto:nfason@uab.edu">nfason@uab.edu</a>
        </li>
      </ul>

      <h3>EDUCATION</h3>
      <table>
        <tr>
          <td>St. Clair County High School</td>
          <td>2018 - 2021</td>
          <td>
            Advanced Academic Diploma <br /> GPA &gt; 4.0
          </td>
        </tr>
        <tr>
          <td>University of Alabama at Birmingham</td>
          <td>2021 - present</td>
          <td>B.A. Computer Science, Minor in Communication Management*</td>
        </tr>
      </table>
      <span>*in progress</span>

      <h3>WORK HISTORY</h3>
      <table>
        <tr>
          <td>The Center for Education and Performing Arts - Pell City, AL</td>
          <td>Technical Director, Spotlight Studio Coordinator</td>
          <td>2019 - present</td>
        </tr>
        <tr>
          <td>EdgeGamers - Remote</td>
          <td>Community Manager - Member Services</td>
          <td>2020 - Sep 2021</td>
        </tr>
        <tr>
          <td>EdgeGamers - Remote</td>
          <td>Community Manager - Technical Team</td>
          <td>Sep 2021 - Jun 2022</td>
        </tr>
      </table>

      <h3>PORTFOLIO</h3>
      <ul>
        <li>
          See my contributions on{" "}
          <a
            href="https://github.com/NootSponge"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          See my contributions on{" "}
          <a
            href="https://gitlab.com/NootSponge"
            target="_blank"
            rel="noreferrer"
          >
            GitLab
          </a>
        </li>
      </ul>

      <Experience />
    </>
  );
}

export default Biz;
