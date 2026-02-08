import TwNavbar from "../components/tw/TwNavbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <TwNavbar />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-6">Acerca de Academia TW</h1>
        <div className="space-y-4 text-white/80">
          <p>
            Academia TW es una plataforma educativa especializada en enseñanza de tecnologías 
            modernas de desarrollo web, con enfoque principal en React y Testing.
          </p>
          <p>
            Nuestra metodología se basa en el aprendizaje progresivo, comenzando con componentes 
            pequeños y sencillos para luego construir aplicaciones completas y profesionales.
          </p>
          <p>
            Ofrecemos cursos prácticos con ejercicios reales y proyectos que te preparan para 
            el entorno laboral actual.
          </p>
        </div>
      </main>
    </div>
  );
}