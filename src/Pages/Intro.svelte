<script>
    import blog from '../Data/blog.js'
    import talks from '../Data/talks.js'
    const upcoming = talks.map((t) => ({...t, date: t.links[0].name})).filter((d) => (new Date() < new Date(d.date)))
    let latest = blog[0]

    import Paintings from '../Components/Painting.svelte'
</script>
<style>

.new {
   font-size: 0.8em; 
}
.name {
    font-size: 1.2em;
    font-weight: 400;
    padding-bottom: 10px;
}

@-webkit-keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-300%) rotate(-180deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(0deg);
  }
}

@keyframes rollIn {
  0% {
    opacity: 0;
    transform: translateX(-300%) rotate(-180deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0px) rotate(0deg);
  }
}

.rollIn {
  -webkit-animation-name: rollIn;
  animation-name: rollIn;
  backface-visibility: hidden;
  perspective: 1000;
}

.avatar {
  margin: 0 auto;
  position: relative;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  width: 210px;
  height: 210px;
  display: block;
  background: #642b73; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    rgba(198, 66, 110, 0.7),
    rgba(100, 43, 115, 0.7)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    rgba(198, 66, 110, 0.7),
    rgba(100, 43, 115, 0.7)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 50%;
}

.avatar-background {
  position: absolute;
  height: 200px;
  width: 200px;
  left: 5px;
  top: 5px;
  border-radius: 50%;
  background-image: url(./image.jpg);
  background-size: cover;
  background-position: 0px -100px;
  background-repeat: no-repeat;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}


</style>
<div class="avatar rollIn">
    <div class="avatar-background"></div>
</div>
<br />
<br />
<div class="name">Hi! I am Priyanka 👋🏻</div>

I am a technology leader focused on building AI-driven systems and enabling teams to adopt AI in real-world software development.
<br />
<br />

<strong>🚀 Building AI Systems That Actually Work</strong>  
I design and implement GenAI-powered solutions—from agentic workflows to AI-accelerated SDLC systems. My work focuses on making AI reliable and usable at scale through strong foundations like evaluation frameworks, observability, and well-defined system patterns.
<br />
<br />

<strong>🧠 From Code to AI Platforms</strong>  
With a background in frontend engineering, I now work on AI platforms, agents, and developer workflows. I enjoy shaping how teams build with AI—defining reusable patterns, workflows, and tooling that improve both productivity and quality.
<br />
<br />

<strong>💡 Enabling Teams, Not Just Building Systems</strong>  
I actively drive AI adoption through workshops, internal initiatives, and hands-on collaboration. I also share insights through talks and content, contributing to the growing conversation around practical AI in engineering.
<br />
<br />

<strong>🌍 Let’s Build the Future of Development</strong>  
If you're exploring AI in software development or building intelligent systems, I’d love to connect, collaborate, and exchange ideas.
<br />
<br />

<strong>📬 Contact Me</strong>  
Feel free to reach out via my social channels—I’m always open to meaningful conversations around AI, engineering, and building better systems.
<br />
<br />

Currently working at <a target="_blank" class="normal-link" href="https://www.adesso.de/">Adesso India</a>.
<br>
<br>
{#if upcoming.length}
    Upcoming Talks:  
    {#each upcoming as { path, heading }, i}
    <a class="normal-link new" target="_blank" href={path}> {heading}</a>
    {i === upcoming.length - 1 ? '' : ', '}
    {/each}
{:else}
    Latest Blogpost:  <a class="normal-link new" target="_blank" href={latest.path}> {latest.heading}</a>
{/if}
<br>
<br>
When I'm not coding, you can find me striking a yoga pose 🧘🏻‍♀️ or splattering colors on a canvas 🖌 
<br>
<br>

<div class="separator"></div>

<Paintings />
