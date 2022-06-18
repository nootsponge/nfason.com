import Header from "./Components/Header";

function Games() {
    return (
        <>
            <Header />

            <a href="/">Go back home</a>

            <h3>A list of my favorite video games <span class="timy">(in no particular order)</span></h3>
            <ul>
                <li><a href="https://store.steampowered.com/app/440" target="_blank" rel="noreferrer">Team Fortress 2</a>, Valve (2007)</li>
                <li><a href="https://store.steampowered.com/app/823500" target="_blank" rel="noreferrer">BONEWORKS</a>, Stress Level Zero (2019)</li>
                <li><a href="https://store.steampowered.com/app/870780" target="_blank" rel="noreferrer">Control Ultimate Edition</a>, 505 Games (2020)</li>
                <li><a href="https://store.steampowered.com/app/470260" target="_blank" rel="noreferrer">Event[0]</a>, Ocelot Society (2016)</li>
                <li><a href="https://store.steampowered.com/app/546560" target="_blank" rel="noreferrer">Half Life: Alyx</a>, Valve (2020)</li>
                <li><a href="https://store.steampowered.com/app/275850" target="_blank" rel="noreferrer">No Man's Sky</a>, Hello Games (2016, but only got good in about 2020)</li>
                <li><a href="https://store.steampowered.com/app/620" target="_blank" rel="noreferrer">Portal 2</a>, Valve (2011)</li>
                <li><a href="https://store.steampowered.com/app/480490" target="_blank" rel="noreferrer">Prey</a>, Bethesda Softworks (2017)</li>
                <li><a href="https://store.steampowered.com/app/211820" target="_blank" rel="noreferrer">Starbound</a>, Chucklefish (2016)</li>
            </ul>

            <p>I'm not that good at video games but if you can't tell I'm a big enjoyer of games with rich stories and games that involve space. If a game has both of those elements (Prey, Event[0], etc.) then it's definitely something I'll like.</p>
            <p>If you think there's something I'll like, feel free to drop me a recommendation: <a href="mailto:games@nfason.com">games@nfason.com</a>.</p>
        </>
    )
}

export default Games;