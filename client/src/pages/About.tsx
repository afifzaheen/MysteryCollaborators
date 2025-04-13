import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80 z-0"></div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6">
              Our <span className="text-primary">Story</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              The journey behind LUXEON and our commitment to redefining luxury technology
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                LUXEON was founded in 2016 with a clear vision: to create technology that transcends utility and becomes an expression of personal style and sophistication.
              </p>
              <p className="text-muted-foreground mb-4">
                In a world where technology has become ubiquitous, we believe that the devices we interact with daily should reflect our appreciation for craftsmanship, design, and quality. Every LUXEON product is meticulously designed to elevate not just what you can do, but how you feel while doing it.
              </p>
              <p className="text-muted-foreground">
                Our team of designers, engineers, and craftspeople work collaboratively to create products that harmonize cutting-edge technology with timeless aesthetics, resulting in pieces that are as beautiful as they are functional.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-5 bg-gradient-to-tr from-secondary to-background rounded-lg overflow-hidden flex items-center justify-center">
                {/* Image placeholder with elegant SVG */}
                <svg 
                  className="w-48 h-48 text-primary/30" 
                  viewBox="0 0 200 200" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" />
                  <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2" />
                  <line x1="100" y1="20" x2="100" y2="40" stroke="currentColor" strokeWidth="2" />
                  <line x1="100" y1="160" x2="100" y2="180" stroke="currentColor" strokeWidth="2" />
                  <line x1="20" y1="100" x2="40" y2="100" stroke="currentColor" strokeWidth="2" />
                  <line x1="160" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/10 blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border border-primary/20"></div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-b from-transparent to-black/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The guiding principles that drive everything we do at LUXEON
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard 
              className="p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to pursuing perfection in every aspect of our products, from concept to customer experience.
              </p>
            </GlassCard>

            <GlassCard 
              className="p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously push the boundaries of what's possible to create technology that's as forward-thinking as it is beautiful.
              </p>
            </GlassCard>

            <GlassCard 
              className="p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112-2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground">Craftsmanship</h3>
              <p className="text-muted-foreground">
                We honor traditional craftsmanship while embracing modern techniques to create products that stand the test of time.
              </p>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the visionaries and experts behind LUXEON's luxury tech products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alexander Wright", title: "Founder & CEO", initial: "AW" },
              { name: "Elena Cheng", title: "Chief Design Officer", initial: "EC" },
              { name: "Marcus Bennett", title: "CTO", initial: "MB" },
              { name: "Olivia Santos", title: "Head of Product", initial: "OS" }
            ].map((member, index) => (
              <GlassCard 
                key={index}
                className="p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-background flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-primary">{member.initial}</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary text-sm mb-4">{member.title}</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The evolution of LUXEON from concept to industry leader
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>

            {/* Timeline items */}
            {[
              { year: "2016", title: "Foundation", desc: "LUXEON was founded with a vision to merge luxury with technology." },
              { year: "2018", title: "First Collection", desc: "Launched our inaugural collection to critical acclaim." },
              { year: "2020", title: "Global Expansion", desc: "Expanded to international markets across Europe and Asia." },
              { year: "2023", title: "Innovation Award", desc: "Received the prestigious Tech Luxury Innovation Award." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-primary px-3 py-1 rounded inline-block text-primary-foreground text-sm mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                  <div className="z-10 relative">
                    <div className="w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </motion.div>
  );
};

export default About;
