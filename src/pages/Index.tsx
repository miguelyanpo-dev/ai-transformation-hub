import { motion } from "framer-motion";
import ParticleNetwork from "@/components/ParticleNetwork";
import logo from "@/assets/logo.png";
import teamMiguel from "@/assets/team-miguel.png";
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

const Index = () => {
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

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-display text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-3"
        >
          El mundo ya entró en la era de la{" "}
          <span className="text-primary">inteligencia artificial</span>.
          <br />
          <span className="text-muted-foreground">
            ¿Tu empresa aún no entra ni en la era digital?
          </span>
        </motion.h1>

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
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center bg-card border border-border rounded-xl p-2.5 md:p-3 w-[130px] md:w-[150px] shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover mb-1.5 ring-2 ring-primary/20"
                />
                <span className="text-foreground font-semibold text-[11px] md:text-xs leading-tight">
                  {member.name}
                </span>
                <span className="text-muted-foreground text-[9px] md:text-[10px] mt-0.5 leading-tight text-center">
                  {member.role}
                </span>
                <a
                  href="#"
                  className="mt-1.5 inline-flex items-center justify-center text-[10px] md:text-[11px] font-medium text-primary border border-primary/30 rounded-full px-3 py-0.5 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Conocer
                </a>
              </div>
            ))}
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
