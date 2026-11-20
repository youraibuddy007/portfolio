import { calendar, location } from './icons'
export default [
  {
    path: '#',
    heading: 'Self Improving Agent Architecture',
    links: [{
      prefix: calendar,
      name: 'Nov 21, 2026',
      path: '#'
    }, {
      prefix: location,
      name: 'Ai India, Pune',
      path: 'https://www.ai-india.ai/home#speakers'
    }],
    description: `A growing class of agentic systems don't just execute tasks — they rewrite their own prompts, regenerate their own tool definitions, and restructure their own workflows in response to failure. It's a compelling premise: an agent that debugs itself. But in practice, these systems tend to improve fast and then flatten out, often well short of human-level reliability, and the reasons why are more structural than incidental. This talk walks through real self-improving agent architectures — prompt-rewriting loops, tool-synthesis agents that generate their own function definitions, and reflection-based agents that critique and revise their own outputs — and traces where each one hits a ceiling. We'll dig into the core failure modes: reward hacking against weak self-evaluation signals, drift where "improvement" optimizes for the agent's own proxy metric rather than the actual task, compounding errors when an agent edits a tool it doesn't fully understand, and the absence of a reliable external ground truth to rewrite against. We'll also cover what actually pushes the plateau higher in practice — human-in-the-loop checkpoints, external verifiers, sandboxed testing before a self-edit ships, and hard limits on how much an agent is allowed to change per iteration.`
  },
  {
    path: '#',
    heading: 'Superuser Patterns and Harness Engineering',
    links: [{
      prefix: calendar,
      name: 'Apr 25, 2026',
      path: '#'
    }, {
      prefix: location,
      name: 'JS Pune 03',
      path: 'https://luma.com/n1aw25q4'
    }],
    description: "Claude code superuser playbook"
  },
  {
    path: '#',
    heading: 'Building Reliable LLM Evals That Actually Work in Production',
    links: [{
      prefix: calendar,
      name: 'Apr 12, 2026',
      path: '#'
    }, {
      prefix: location,
      name: 'AI India, Delhi',
      path: 'https://nomadcoder.ai/event/9'
    }],
    description: "Benchmarks have become unreliable. Major AI labs are gaming evaluation metrics. Data contamination inflates scores. And there is a documented 25–30% accuracy drop between benchmark performance and production reality. Meanwhile, LLM-as-judge evaluators hallucinate scores, and most teams are flying blind without knowing if their system is actually improving. This talk reveals why traditional benchmarks fail and introduces a production-aligned evaluation framework that actually works—Eval-Driven Development (EDD). You will learn how to: Source golden datasets from production logs (not synthetic data), avoiding the eval-production gap that catches everyone off-guard. Mix three grading strategies—code-based (fast) , model-based (flexible) , human (calibration) —to build reliable evaluations at scale Close the feedback loop: Production failures → curated datasets → offline evals → CI/CD gates → monitored rollout → production insights → dataset refresh Distinguish capability vs. regression evals, each serving different purposes (drive improvement vs. prevent backsliding) Implement continuous evaluation infrastructure with automated scoring, real-time alerts, and regression detection that actually catches problems before users do"
  },
  {
    path: 'https://www.linkedin.com/posts/piyukore06_ngpune-ngindia-aiindia-activity-7383018590402428928-KZHT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAfuxOEByktzoWhoI_BAIPYrQF3s6LzRpng',
    heading: 'RAG is not dead',
    links: [{
      prefix: calendar,
      name: 'Oct 11, 2025',
      path: '#'
    }, {
      prefix: location,
      name: 'Nomadcoder AI Day, Pune',
      path: 'https://nomadcoder.ai/event/9'
    }],
    description: 'RAG is not Dead!'
  },
  {
    path: 'https://www.linkedin.com/posts/piyukore06_ai-softwaredevelopment-techeducation-activity-7374722944322912256-wrvi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAfuxOEByktzoWhoI_BAIPYrQF3s6LzRpng',
    heading: 'NextGen Software Development with AI',
    links: [{
      prefix: calendar,
      name: 'Sep 18, 2025',
      path: '#'
    }, {
      prefix: location,
      name: 'PCCoE Pune',
      path: '#'
    }],
    description: 'Next-Gen Software Development with AI in Industry 4.0.'
  },
  {
    path: 'https://js-i-love-you.netlify.app/',
    heading: 'JS I love you ♥️',
    links: [{
      prefix: calendar,
      name: 'Sep 14, 2021 - Nov 14, 2021',
      path: '#'
    }, {
      prefix: location,
      name: 'Ready to code, Stuttgart',
      path: 'https://readytocode.org/event-js-i-love-you.html'
    }],
    description: 'JS: I love you ist eine JavaScript-Workshop-Reihe, bei der ihr zum einen JavaScript-Grundlagen lernt und zum anderen die Frontend-Entwicklung mit React kennenlernt. Gegen Ende dürft ihr im Rahmen es kleinen Projektes eure eigene Portfolioseite gestalten. Programmier-Vorkenntnisse braucht ihr keine, ihr solltet aber grundlegende Computer-Kenntnisse haben (z.B. wissen, wie man Programme installiert). Vor der ersten Stunde bekommt ihr allerdings noch eine Installationsanweisung für alle benötigten Programme.'
  },
  {
    path: '#',
    heading: 'Advanced cypress testing patterns',
    links: [{
      prefix: calendar,
      name: 'Oct 6, 2021',
      path: '#'
    }, {
      prefix: location,
      name: 'JS Days 2021',
      path: 'https://javascript-days.de/angular/cypress-advanced-testing-patterns/'
    }],
    description: 'Nach ersten Erfolgserlebnissen mit Cypress, stößt man bald auch auf erste Herausforderungen. Wir zeigen mit welchen Pattern man diesen begegnen kann und welche Probleme sogar schon auf erste Unzulänglichkeiten der Anwendung zurückzuführen sind. Die Schritte um Cypress in eine automatische Buildpipeline einzuführen sind essentiell um das Tool wertschöpfend einzusetzen und somit Teil des Workshops. Wir behandeln auch schwierige Testumgebungen die kein stringentes E2E-Testing erlauben.'
  },
  {
    path: '#',
    heading: 'Getting Into Cypress',
    links: [{
      prefix: calendar,
      name: 'Oct 4, 2021',
      path: '#'
    }, {
      prefix: location,
      name: 'JS Days 2021',
      path: 'https://javascript-days.de/fundamentals/getting-into-cypress-e2e-testing-fuer-alle/'
    }],
    description: 'Cypress hat sehr niedrige Einstiegshürden, um mit E2E-Testing zu beginnen. Die Unabhängigkeit von Frameworks macht es zu einem Allzweck Tool, wenn es ums Testing geht. Warum dies so ist, wie Tests endlich stabiler laufen und wie sich E2E-Testing auch in bestehende Projekte einbringen lässt zeigen wir in diesen Workshop. Die Teilnehmenden lernen Cypress und E2E-Testing kennen, üben die Einrichtung und werden durch die ersten Testcases geführt. Zu guter Letzt zeigen wir, wie man auch TypeScript statt JavaScript nutzen kann.'
  },
  {
    path: '#',
    heading: 'How to be a Devtools Ninja (F12)',
    links: [{
      prefix: calendar,
      name: 'June 8, 2021',
      path: '#'
    }, {
      prefix: location,
      name: 'Software Development @ Adesso NL',
      path: 'https://www.meetup.com/Software-Development-adesso-NL/events/278534539/'
    }],
    description: 'Devtools make our lives sooo easy. But are you using the developer tools to their full potential? Most of the devtool features/tabs remain undiscovered. We go about our regular developer lives without knowing these amazing tools present in out toolkit. We are going to go about some of cool lesser-known features and find out how can we integrate this in our workflow easily to get the most out of devtools.'
  },
  {
    path: 'https://www.youtube.com/watch?v=IHkHkoRiFLM&t=1576s',
    heading: 'Cypress IO: Shopware Contributing to Open Source',
    links: [{
      prefix: calendar,
      name: 'May 26, 2021',
      path: '#'
    }, {
      prefix: location,
      name: 'Never code alone, YouTube',
      path: 'https://www.youtube.com/watch?v=IHkHkoRiFLM&t=1576s'
    }],
    description: 'In this NCA(Never Code alone) Live Coding session, we will contribute to the open source Cypress IO tests for Shopware Core. Four of us will work together on the Javascript Testing Framework. We have already done a testing session with Ramona. As a developer in the Shopware Core team, she has been improving and developing the test suite for a long time. And this time we will be joined by Priyanka and Tobias, both of whom have also specialized in Cypress IO testing for quite some time. The goal of the session is to deepen the common knowledge and to share it with the community. On this occasion we will also put a pull request on GitHub and show how everyone can join and help.'
  },
  {
    path: '#',
    heading: 'Introduction to Cypress',
    links: [{
      prefix: calendar,
      name: 'Apr 09, 2021',
      path: 'https://cypress-intro.netlify.app/'
    }, {
      prefix: location,
      name: 'Adesso',
      path: 'https://www.adesso.de/de/index.jsp'
    }],
    description: `Looking for a Tool to write E2E, well look no further, the most aweosme features of Cypress make it so easy to write and debug e2e tests as hassel free as you can imagine :)`
  },
  {
    path: '#',
    heading: 'Typescript: zero to hero',
    links: [{
      prefix: calendar,
      name: 'Feb 21, 2021',
      path: 'https://typescript-zero-to-hero.netlify.app/'
    }, {
      prefix: location,
      name: 'Adesso',
      path: 'https://www.adesso.de/de/index.jsp'
    }],
    description: `Nowadays TypeScript is a must in the world of JavaScript. Many of it's features go unnoticed. This is an attempt to bring most important typescript features in one place`
  },
  {
    path: '#',
    heading: 'Workshop: HTML and CSS for Backend Developers',
    links: [{
      prefix: calendar,
      name: 'Sep 01, 2020',
      path: `https://javascript-days.de/fundamentals/css-grundlagenkurs-teil-1/`
    }, {
      prefix: location,
      name: 'JS Days Munich',
      path: `https://javascript-days.de`
    },
    {
      prefix: calendar,
      name: 'Oct 05, 2020',
      path: `https://javascript-days.de/fundamentals/css-grundlagenkurs-teil-1/`
    },
    {
      prefix: location,
      name: 'JS Days Berlin',
      path: `https://javascript-days.de`
    }],
    description: ``,
  },
  {
    path: 'https://smooth-as-silk.netlify.com/',
    heading: 'Smooth as Silk: A story of animating on the web with perf in mind',
    links: [{
      prefix: calendar,
      name: 'Nov 20, 2019',
      path: `https://www.meetup.com/Front-end-Forward/events/263961681/`
    }, {
      prefix: location,
      name: 'perf.now()',
      path: `https://www.voorhoede.nl/nl/events/perf-now/`
    }],
    description: `Website users want a smooth and engaging experience. In this talk we'll learn how browser rendering works and how to navigate DevTools to debug animation performance issues. There are optimal practices to bear in mind that are considerably overlooked. The main reason for this to happen is devs don't get a the picture why they exist and are so vigorously advocated. DevTools are gold mine of information, we are going to explore the features that help us build animations smooth as silk.)`,
  },
  {
    path: 'https://www.slideshare.net/piyukore06/debugging-perf-with-devtools-184030862',
    heading: 'Debugging Web Performance with Chrome dev tools',
    links: [{
      prefix: calendar,
      name: 'Oct 16, 2019',
      path: `#`
    }, {
      prefix: location,
      name: 'SWK Ruhr',
      path: `https://www.meetup.com/Softwerkskammer-Ruhrgebiet/events/265064533/`
    }],
    description: `Performance is about retaining users, improving conversions, user experience. It's about people. DevTools performance tab as well as some hidden gems that you probably had no idea existed.`,
  },
  {
    path: 'https://www.meetup.com/NgNiederrhein/events/263357671/',
    heading: 'Keep calm and refactor',
    links: [{
      prefix: calendar,
      name: 'Aug 13, 2019',
      path: `#`
    }, {
      prefix: location,
      name: 'Ng Niederrhein',
      path: `https://twitter.com/NgNiederrhein`
    }],
    description: `JavaScript is just amazing for building complex UIs but it's easy to get lost, feel intimidated and feel out of place. We'll look at various patterns from JS-land. Take a step back, understand the abstraction, and see how we can refactor them in a best possible way.`,
  },
  {
    path: 'https://github.com/piyukore06/graphql',
    heading: 'Rest to GraphQL',
    links: [{
      prefix: calendar,
      name: 'Mar 20, 2019',
      path: `#`
    }, {
      prefix: location,
      name: 'SWK Ruhr',
      path: `https://www.meetup.com/Softwerkskammer-Ruhrgebiet/events/258189377/`
    }],
    description: 'Frontend App APIs often gets complex as the application grows. Often there are multiple round trips required to fetch data for a view. It is a novel way of structuring the client-server contract.',
  },
  {
    path: 'http://parceljs-new-kid-on-the-block.surge.sh',
    heading: 'Parcel JS',
    links: [{
      prefix: calendar,
      name: 'Oct 17, 2018',
      path: `#`
    }, {
      prefix: location,
      name: 'SWK Ruhr',
      path: `https://www.meetup.com/Softwerkskammer-Ruhrgebiet/events/252665300/`
    }],
    description: 'Frontend tooling just keeps getting better. Module bundlers can do so much for you. Be it providing you with a wonderful dev experience or optimizing your production build.'
  },
  {
    path: 'https://github.com/piyukore06/create-a-webpack-plugin',
    heading: 'Writing your own webpack plugin',
    links: [{
      prefix: calendar,
      name: 'Feb 19, 2018',
      path: `#`
    }, {
      prefix: location,
      name: 'Mehrkanal GmbH',
      path: `http://mehrkanal.com/`
    }],
    description: `Webpack is highly configurable tool, you can make it do anything you want. Let's learn together about insides of webpack and how it allows to support the whole ecosystem of plugins and in turn how to bulid one.`
  }
]
