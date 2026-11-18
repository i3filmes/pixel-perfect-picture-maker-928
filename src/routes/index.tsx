import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/proposta/Reveal";
import logo from "@/assets/i3-filmes-logo.png.asset.json";

const WHATSAPP = "https://wa.me/5583996108908";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uma proposta especial para Ianka & Juninho — i3 Filmes" },
      { name: "description", content: "Proposta audiovisual feita com carinho para registrar o anúncio da gravidez de Ianka e Juninho." },
      { property: "og:title", content: "Uma proposta especial para Ianka & Juninho" },
      { property: "og:description", content: "Um momento único. Uma lembrança para a vida inteira." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  { n: "01", t: "Planejamento", d: "Alinhamento prévio das ideias e dos detalhes necessários para a gravação." },
  { n: "02", t: "Captação", d: "Registro audiovisual do momento, com atenção à composição, iluminação, enquadramentos e espontaneidade." },
  { n: "03", t: "Finalização", d: "Edição e tratamento do material para transformar a gravação em um vídeo final especial." },
];

const included = [
  "Planejamento e alinhamento prévio da gravação.",
  "Organização da proposta visual do vídeo.",
  "Captação audiovisual do anúncio de gravidez.",
  "Direção e orientação durante a gravação, buscando naturalidade e espontaneidade.",
  "Edição e finalização de um vídeo.",
  "Entrega digital do material finalizado.",
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-muted-foreground">
      <span className="h-px w-10 bg-primary" />
      {children}
    </p>
  );
}

function CtaButton() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex min-h-14 items-center gap-4 rounded-full bg-foreground py-2 pl-8 pr-2 text-base font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
    >
      Vamos conversar sobre esse momento?
      <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-[-45deg]">→</span>
    </a>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 md:px-10">
        <header className="rise flex items-center justify-between">
          <img src={logo.url} alt="i3 Filmes Audiovisual" className="h-9 w-auto md:h-11" />
          <span className="hidden text-xs tracking-[0.3em] text-muted-foreground sm:block">UMA PROPOSTA ESPECIAL</span>
        </header>

        <div aria-hidden className="drift pointer-events-none absolute right-[-4rem] top-32 size-72 rounded-full border border-primary md:right-10 md:size-96" />
        <div aria-hidden className="drift pointer-events-none absolute right-24 top-[22rem] size-4 rounded-full bg-primary md:right-[30rem]" style={{ animationDelay: "-3s" }} />

        <div className="relative my-auto grid gap-12 py-16 md:grid-cols-12">
          <div className="md:col-span-9">
            <p className="rise text-xs font-medium tracking-[0.3em] text-accent sm:hidden" style={{ animationDelay: "100ms" }}>UMA PROPOSTA ESPECIAL</p>
            <h1 className="rise mt-4 font-serif text-5xl font-light leading-[1.02] tracking-tight md:text-7xl lg:text-8xl" style={{ animationDelay: "200ms" }}>
              Um momento único.<br />
              <em className="text-muted-foreground">Uma lembrança para</em>{" "}
              <span className="mark-highlight">a vida inteira.</span>
            </h1>
          </div>
          <div className="rise md:col-span-6 md:col-start-6" style={{ animationDelay: "500ms" }}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ianka e Juninho, será uma alegria imensa fazer parte desse capítulo tão especial da história de vocês. Queremos transformar esse momento em uma recordação que poderá ser revivida e compartilhada por muitos anos.
            </p>
          </div>
        </div>

        <div className="rise flex items-end justify-between border-t border-border pt-6 text-sm" style={{ animationDelay: "800ms" }}>
          <p className="text-muted-foreground">Proposta audiovisual para <span className="font-serif text-lg italic text-foreground">Ianka & Juninho</span></p>
          <a href="#historia" className="text-muted-foreground transition-colors hover:text-foreground">Role ↓</a>
        </div>
      </section>

      {/* Intenção */}
      <section id="historia" className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <Eyebrow>A INTENÇÃO</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl font-light leading-tight md:text-5xl">
              Mais do que gravar um vídeo, <em>registrar uma história.</em>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 md:pt-16" delay={150}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Existem momentos que merecem ser lembrados com todo o cuidado do mundo. A descoberta de uma nova vida é um deles. Nossa proposta é produzir um registro audiovisual especial para eternizar o anúncio da gravidez de vocês, cuidando dos detalhes para que tudo aconteça de forma natural, emocionante e autêntica.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-24">
          <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
          <div className="grid gap-14 md:grid-cols-3 md:gap-10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 150} className={i === 1 ? "md:mt-16" : i === 2 ? "md:mt-32" : ""}>
                <div className="relative flex items-center gap-4">
                  <span className="relative grid size-12 place-items-center rounded-full border border-primary bg-background font-serif text-lg">{s.n}</span>
                  <span className="size-1.5 rounded-full bg-primary" />
                </div>
                <h3 className="mt-6 font-serif text-3xl font-light">{s.t}</h3>
                <p className="mt-3 max-w-xs leading-relaxed text-muted-foreground">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Incluso */}
      <section className="bg-muted/60">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <Reveal className="md:col-span-5">
            <Eyebrow>O QUE ESTÁ INCLUSO</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl font-light leading-tight md:text-5xl">
              Tudo preparado para tornar esse registro especial.
            </h2>
          </Reveal>
          <ol className="md:col-span-7">
            {included.map((item, i) => (
              <Reveal key={item} delay={i * 80}>
                <li className="group flex items-baseline gap-6 border-b border-border py-5 transition-colors">
                  <span className="text-xs tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">{item}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Investimento */}
      <section className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center"><Eyebrow>INVESTIMENTO ESPECIAL</Eyebrow></div>
          <h2 className="mt-6 font-serif text-4xl font-light leading-tight md:text-5xl">
            Um valor especial, <em>pelo carinho que temos por vocês.</em>
          </h2>
        </Reveal>

        <Reveal delay={200} className="relative mx-auto mt-16 max-w-2xl text-center">
          <div aria-hidden className="drift pointer-events-none absolute left-1/2 top-1/2 -z-0 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary" />
          <div className="relative">
            <p className="text-sm text-muted-foreground">Valor de referência</p>
            <p className="mt-1 text-2xl text-muted-foreground line-through decoration-1">R$ 300,00</p>
            <p className="mt-10 text-sm tracking-wide">Valor especial para Ianka e Juninho</p>
            <p className="mt-2 font-serif text-7xl font-light tracking-tight md:text-9xl">
              <span className="mark-highlight">R$ 150<span className="text-5xl md:text-6xl">,00</span></span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={350} className="mx-auto mt-14 max-w-xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Por todo o carinho e apreço que temos por vocês, e pela importância desse momento tão especial, decidimos oferecer um valor de consideração para a realização desse trabalho. Será uma alegria fazer parte dessa história!
          </p>
        </Reveal>
      </section>

      {/* Encerramento */}
      <section className="relative border-t border-border">
        <div aria-hidden className="drift pointer-events-none absolute -left-20 bottom-10 size-64 rounded-full border border-primary" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
          <Reveal>
            <h2 className="max-w-4xl font-serif text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
              Algumas histórias merecem ser <em className="mark-highlight not-italic">eternizadas.</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <Reveal delay={150} className="md:col-span-6 md:col-start-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Estamos muito felizes com a possibilidade de registrar esse momento ao lado de vocês. Que esse seja apenas o início de uma história linda, cheia de amor, descobertas e momentos inesquecíveis. Contem com a gente para transformar essa notícia em uma recordação especial!
              </p>
              <div className="mt-10"><CtaButton /></div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center md:px-10">
          <img src={logo.url} alt="i3 Filmes Audiovisual" className="h-8 w-auto" loading="lazy" />
          <p className="font-serif text-lg italic">Feito com carinho para Ianka & Juninho.</p>
          <p className="text-xs tracking-[0.2em] text-muted-foreground">i3 FILMES AUDIOVISUAL</p>
        </div>
      </footer>
    </main>
  );
}
