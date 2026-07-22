import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Sparkles, Code2, Rocket, Shield, Heart, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const DEV = {
  name: "Hiral Goyal",
  role: "Full-Stack Developer & Founder",
  tagline:
    "Full-stack developer passionate about building secure, scalable, and impactful applications that solve real-world problems using modern technologies.",
  initials: "HG",
  github: "https://github.com/hiral17234",
  linkedin: "https://www.linkedin.com/in/hiralgoyal17/",
  email: "goyalhiral6@gmail.com",
};

const stack = [
  "React", "TypeScript", "Vite", "Tailwind CSS", "Firebase",
  "Firestore", "Cloudinary", "Gemini AI", "Framer Motion", "Vercel",
];

const projects = [
  { name: "NoteHall", desc: "Student notes hub with AI, ratings & real-time feeds.", url: "https://notehall.vercel.app", live: true },
  { name: "CampusVoice", desc: "Anonymous campus community & discussions.", url: "https://campusvoice-chi.vercel.app", live: true },
  { name: "CampusAssist", desc: "Peer help & academic assistance platform.", url: "https://campusassist-five.vercel.app", live: true },
  { name: "CampusBuzz", desc: "Campus events & social buzz — coming soon.", url: "#", live: false },
];

const values = [
  { icon: Shield, title: "Security-first", text: "Auth, rules & validation baked in from day one." },
  { icon: Rocket, title: "Ship fast", text: "Iterate quickly with clean, maintainable code." },
  { icon: Heart, title: "For students", text: "Building tools I wish I had in college." },
];

export default function Developer() {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative overflow-hidden p-8 md:p-12 border-2">
            <div className="absolute inset-0 opacity-40 pointer-events-none"
                 style={{ background: "radial-gradient(circle at 20% 20%, hsl(var(--primary)/0.15), transparent 60%), radial-gradient(circle at 80% 80%, hsl(var(--accent)/0.15), transparent 60%)" }} />
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary to-accent blur-lg opacity-60" />
                <Avatar className="relative w-32 h-32 md:w-40 md:h-40 ring-4 ring-background">
                  <AvatarFallback className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    {DEV.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 text-center md:text-left space-y-3">
                <Badge variant="secondary" className="gap-1"><Sparkles className="w-3 h-3" /> Meet the Developer</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{DEV.name}</h1>
                <p className="text-lg font-medium text-primary">{DEV.role}</p>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">{DEV.tagline}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
                  <Button asChild size="sm" variant="default">
                    <a href={DEV.github} target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4 mr-2" /> GitHub</a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href={DEV.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4 mr-2" /> LinkedIn</a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href={`mailto:${DEV.email}`}><Mail className="w-4 h-4 mr-2" /> Email</a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-4">
          {values.map((v, i) => (
            <motion.div key={v.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <v.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tech stack */}
        <Card className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Tech Stack</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Tools & technologies powering this platform.</p>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <Badge key={s} variant="secondary" className="text-sm py-1.5 px-3">{s}</Badge>
            ))}
          </div>
        </Card>

        {/* Projects */}
        <Card className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Campus Community Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target={p.live ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`group block p-5 rounded-xl border-2 transition-all ${p.live ? "hover:border-primary hover:shadow-md" : "opacity-60 cursor-not-allowed"}`}
                onClick={(e) => { if (!p.live) e.preventDefault(); }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{p.name}</h3>
                  {p.live ? <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" /> : <Badge variant="outline" className="text-xs">Soon</Badge>}
                </div>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </a>
            ))}
          </div>
        </Card>

        {/* Footer note */}
        <div className="text-center text-sm text-muted-foreground py-4">
          Built with <Heart className="inline w-4 h-4 text-primary fill-current" /> by {DEV.name}
        </div>
      </div>
    </MainLayout>
  );
}
