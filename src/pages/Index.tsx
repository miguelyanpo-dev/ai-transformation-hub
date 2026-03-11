import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticleNetwork from "@/components/ParticleNetwork";
import logo from "@/assets/logo.png";
import teamMiguel from "@/assets/team-miguel.jpg";
import teamEsteban from "@/assets/team-esteban.png";
import teamLaura from "@/assets/team-laura.png";
import teamDaniel from "@/assets/team-daniel.png";
import teamVanessa from "@/assets/team-vanessa.png";
import teamBot from "@/assets/team-bot.png";

const team = [
  { name: "Lorena Ortiz", role: "Líder en consultoría comercial", photo: teamVanessa },
  { name: "Esteban Loaiza", role: "Líder en diseño y marca", photo: teamEsteban },
  { name: "Miguel Páez", role: "Líder en desarrollo de software", photo: teamMiguel },
  { name: "Laura García", role: "Líder en contenido estratégico", photo: teamLaura },
  { name: "Daniel Vega", role: "Líder en publicidad digital", photo: teamDaniel },
  { name: "Creativos Bot", role: "Líder en automatización e IA", photo: teamBot },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const LINE1_PREFIX  = "El mundo ya entró en la era de la ";
const LINE1_COLORED = "inteligencia artificial";
const LINE1_SUFFIX  = ".";
const LINE1_FULL    = LINE1_PREFIX + LINE1_COLORED + LINE1_SUFFIX;
const LINE2_FULL    = "¿Tu empresa aún no entra ni en la era digital?";
const SPEED = 55; // ms por carácter (más despacio)

const Index = () => {
  const [typed1, setTyped1]       = useState(0);
  const [showLine2, setShowLine2] = useState(false);
  const [typed2, setTyped2]       = useState(0);

  // Escribe línea 1 carácter a carácter
  useEffect(() => {
    if (typed1 < LINE1_FULL.length) {
      const t = setTimeout(() => setTyped1((n) => n + 1), SPEED);
      return () => clearTimeout(t);
    }
    // Línea 1 terminada → esperar 1 s antes de iniciar línea 2
    const t = setTimeout(() => setShowLine2(true), 1000);
    return () => clearTimeout(t);
  }, [typed1]);

  // Escribe línea 2 carácter a carácter
  useEffect(() => {
    if (!showLine2 || typed2 >= LINE2_FULL.length) return;
    const t = setTimeout(() => setTyped2((n) => n + 1), SPEED);
    return () => clearTimeout(t);
  }, [showLine2, typed2]);

  // Ciclo: cuando ambas líneas terminan, reiniciar a los 3 s
  const line2Done = typed2 >= LINE2_FULL.length;
  useEffect(() => {
    if (!line2Done) return;
    const t = setTimeout(() => {
      setTyped1(0);
      setShowLine2(false);
      setTyped2(0);
    }, 3000);
    return () => clearTimeout(t);
  }, [line2Done]);

  const prefixShown  = LINE1_FULL.slice(0, Math.min(typed1, LINE1_PREFIX.length));
  const coloredShown = typed1 > LINE1_PREFIX.length
    ? LINE1_FULL.slice(LINE1_PREFIX.length, Math.min(typed1, LINE1_PREFIX.length + LINE1_COLORED.length))
    : "";
  const suffixShown  = typed1 > LINE1_PREFIX.length + LINE1_COLORED.length ? LINE1_SUFFIX : "";

  const line1Done = typed1 >= LINE1_FULL.length;

  return (
    <div className="relative h-screen max-h-screen flex items-center justify-center overflow-hidden bg-background">
      <ParticleNetwork />

      {/* Subtle background pattern */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, hsl(175 80% 35% / 0.03) 0%, transparent 70%)",
      }} />

      <div className="relative z-10 w-full max-w-[960px] mx-auto px-6 py-6 text-center">
        {/* Logo + Brand */}
        <motion.div {...fadeUp(0.1)} className="flex flex-col items-center mb-5">
          <img src={logo} alt="CreativosHouse Logo" className="w-14 h-14 md:w-16 md:h-16 mb-2" />
          <h2 className="font-display text-xs md:text-sm tracking-[0.25em] uppercase text-primary font-semibold">
            CreativosHouse
          </h2>
        </motion.div>

        {/* Headline — typewriter */}
        <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-3 min-h-[4rem] md:min-h-[5rem]">
          {/* Línea 1 */}
          <span>
            {prefixShown}
            {coloredShown && (
              <span className="text-primary">{coloredShown}</span>
            )}
            {suffixShown}
            {!line1Done && (
              <span className="inline-block w-[2px] h-[1em] bg-primary align-middle ml-0.5 animate-pulse" />
            )}
          </span>

          {/* Línea 2 — aparece cuando arranca */}
          {showLine2 && (
            <>
              <br />
              <span className="text-muted-foreground">
                {LINE2_FULL.slice(0, typed2)}
                {!line2Done && (
                  <span className="inline-block w-[2px] h-[1em] bg-muted-foreground align-middle ml-0.5 animate-pulse" />
                )}
              </span>
            </>
          )}
        </h1>

        {/* Supporting text */}
        <motion.div {...fadeUp(0.3)} className="max-w-xl mx-auto mb-6">
          <p className="text-secondary-foreground text-xs md:text-sm leading-relaxed mb-1">
            Ayudamos a empresas a evolucionar paso a paso:
            marca, contenido, publicidad, sistemas y automatización.
          </p>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            Diseñamos proyectos personalizados de transformación digital
            para que tu negocio compita en la nueva era.
          </p>
        </motion.div>

        {/* Team Cards */}
        <motion.div {...fadeUp(0.45)} className="mb-6">
          <h3 className="font-display text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Equipo CreativosHouse
          </h3>
          <div className="overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 -mx-6 md:mx-0 px-6 md:px-0">
            <div className="flex flex-nowrap md:justify-center items-stretch gap-0 w-max md:w-auto mx-auto">
            {team.map((member, index) => (
              <div key={member.name} className="flex items-stretch">
                <div className="flex flex-col items-center bg-card border border-border rounded-xl p-2 md:p-2.5 w-[110px] md:w-[120px] shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover mb-1.5 ring-2 ring-primary/20 shrink-0"
                  />
                  <span className="text-foreground font-semibold text-[10px] md:text-[11px] leading-tight text-center">
                    {member.name}
                  </span>
                  <span className="text-muted-foreground text-[8px] md:text-[9px] mt-0.5 leading-tight text-center flex-1">
                    {member.role}
                  </span>
                  <a
                    href="#"
                    className="mt-2 inline-flex items-center justify-center text-[9px] md:text-[10px] font-semibold text-primary-foreground bg-primary rounded-full px-3 py-0.5 hover:opacity-90 transition-opacity shrink-0"
                  >
                    Conocer
                  </a>
                </div>
                {index < team.length - 1 && (
                  <div className="flex items-center self-center">
                    <svg width="20" height="14" viewBox="0 0 24 16" className="mx-0.5 shrink-0 text-primary">
                      <path d="M0 8h18" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <path d="M15 3l6 5-6 5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.6)} className="space-y-3">
          <div className="flex flex-wrap justify-center gap-2.5">
            <a
              href="#"
              className="inline-block font-display font-semibold text-xs md:text-sm px-6 py-2.5 rounded-lg bg-primary text-primary-foreground btn-glow transition-all duration-300 hover:scale-105"
            >
              Cotizar mi transformación digital
            </a>
            <a
              href="#"
              className="inline-block font-display font-medium text-xs md:text-sm px-6 py-2.5 rounded-lg border border-primary/40 text-primary hover:bg-primary/5 transition-all duration-300"
            >
              Quiero saber más antes de empezar
            </a>
            <a
              href="#"
              className="inline-block font-display font-medium text-xs md:text-sm px-6 py-2.5 rounded-lg border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              Estado de mi transformación digital
            </a>
          </div>
          <p className="text-muted-foreground text-[10px] md:text-xs max-w-md mx-auto">
            Evaluamos tu empresa y diseñamos el plan de transformación digital adecuado.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
