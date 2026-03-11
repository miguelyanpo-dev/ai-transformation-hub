import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import teamMiguel from "@/assets/team-miguel.png";
import teamEsteban from "@/assets/team-esteban.png";
import teamLaura from "@/assets/team-laura.png";
import teamDaniel from "@/assets/team-daniel.png";
import teamVanessa from "@/assets/team-vanessa.png";

const team = [
  { name: "Miguel Páez", role: "Desarrollo de software", photo: teamMiguel },
  { name: "Esteban", role: "Diseño y marca", photo: teamEsteban },
  { name: "Laura García", role: "Contenido estratégico", photo: teamLaura },
  { name: "Daniel", role: "Publicidad digital", photo: teamDaniel },
  { name: "Vanessa", role: "Consultoría comercial", photo: teamVanessa },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const Index = () => {
  return (
    <div className="relative h-screen max-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, hsl(175 80% 35% / 0.03) 0%, transparent 70%)",
      }} />

      <div className="relative z-10 w-full max-w-[960px] mx-auto px-6 py-8 text-center">
        {/* Logo + Brand */}
        <motion.div {...fadeUp(0.1)} className="flex flex-col items-center mb-6">
          <img src={logo} alt="CreativosHouse Logo" className="w-14 h-14 md:w-16 md:h-16 mb-2" />
          <h2 className="font-display text-xs md:text-sm tracking-[0.25em] uppercase text-primary font-semibold">
            CreativosHouse
          </h2>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4"
        >
          El mundo ya entró en la era de la{" "}
          <span className="text-primary">inteligencia artificial</span>.
          <br />
          <span className="text-muted-foreground">
            ¿Tu empresa aún no entra ni en la era digital?
          </span>
        </motion.h1>

        {/* Supporting text */}
        <motion.div {...fadeUp(0.3)} className="max-w-xl mx-auto mb-8">
          <p className="text-secondary-foreground text-sm md:text-base leading-relaxed mb-2">
            Ayudamos a empresas a evolucionar paso a paso:
            marca, contenido, publicidad, sistemas y automatización.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Diseñamos proyectos personalizados de transformación digital
            para que tu negocio compita en la nueva era.
          </p>
        </motion.div>

        {/* Team Cards */}
        <motion.div {...fadeUp(0.45)} className="mb-8">
          <h3 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Equipo CreativosHouse
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center bg-card border border-border rounded-xl p-3 md:p-4 w-[140px] md:w-[155px] shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover mb-2 ring-2 ring-primary/20"
                />
                <span className="text-foreground font-semibold text-xs md:text-sm leading-tight">
                  {member.name}
                </span>
                <span className="text-muted-foreground text-[10px] md:text-xs mt-0.5 leading-tight text-center">
                  {member.role}
                </span>
                <a
                  href="#"
                  className="mt-2 text-[10px] md:text-xs font-medium text-primary hover:underline"
                >
                  Conocer →
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.6)}>
          <a
            href="#"
            className="inline-block font-display font-semibold text-sm md:text-base px-8 py-3 rounded-lg bg-primary text-primary-foreground btn-glow transition-all duration-300 hover:scale-105"
          >
            Iniciar mi transformación digital
          </a>
          <p className="text-muted-foreground text-xs mt-3 max-w-md mx-auto">
            Evaluamos tu empresa y diseñamos el plan de transformación digital adecuado.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
