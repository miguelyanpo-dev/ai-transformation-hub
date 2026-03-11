import { motion } from "framer-motion";
import ParticleNetwork from "@/components/ParticleNetwork";

const team = [
  { name: "Miguel Páez", role: "Desarrollo de software y sistemas personalizados" },
  { name: "Esteban", role: "Diseño profesional y creación de marca" },
  { name: "Laura García", role: "Creación de contenido estratégico" },
  { name: "Daniel", role: "Publicidad digital y tráfico pago" },
  { name: "Vanessa", role: "Consultoría y crecimiento comercial" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleNetwork />

      {/* Radial gradient overlay */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, transparent 0%, hsl(220 20% 4%) 70%)",
        zIndex: 1,
      }} />

      <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 py-16 text-center">
        {/* Brand */}
        <motion.div {...fadeUp(0.1)}>
          <h2 className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-12 md:mb-16 text-glow">
            CreativosHouse
          </h2>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.3)}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-tight tracking-tight mb-8"
        >
          El mundo ya entró en la era de la{" "}
          <span className="text-primary text-glow">inteligencia artificial</span>.
          <br />
          <span className="text-muted-foreground">
            ¿Tu empresa aún no entra ni en la era digital?
          </span>
        </motion.h1>

        {/* Supporting text */}
        <motion.div {...fadeUp(0.5)} className="max-w-2xl mx-auto mb-14">
          <p className="text-secondary-foreground text-base md:text-lg leading-relaxed mb-4">
            En CreativosHouse ayudamos a empresas a evolucionar paso a paso:
            marca, contenido, publicidad, sistemas modernos y automatización.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Diseñamos proyectos personalizados de transformación digital
            para que tu negocio compita en la nueva era.
          </p>
        </motion.div>

        {/* Team */}
        <motion.div {...fadeUp(0.7)} className="mb-14">
          <h3 className="font-display text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">
            Equipo CreativosHouse
          </h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {team.map((member) => (
              <div key={member.name} className="text-sm">
                <span className="text-foreground font-medium">{member.name}</span>
                <span className="text-muted-foreground"> — {member.role}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.9)}>
          <a
            href="#"
            className="inline-block font-display font-semibold text-base md:text-lg px-10 py-4 rounded-lg bg-primary text-primary-foreground btn-glow transition-all duration-300 hover:scale-105"
          >
            Iniciar mi transformación digital
          </a>
          <p className="text-muted-foreground text-sm mt-4 max-w-md mx-auto">
            Evaluamos tu empresa y diseñamos el plan de transformación digital adecuado.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
