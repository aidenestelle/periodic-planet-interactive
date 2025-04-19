import { FaGithub, FaLinkedin, FaCoffee, FaGlobe } from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer className="mt-12 py-4 flex flex-col items-center gap-2 text-sm text-muted-foreground">
      <div className="flex gap-4 items-center">
        <a
          href="https://aidenestelle.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors flex items-center gap-1"
          aria-label="Personal Website"
        >
          <FaGlobe className="inline-block mb-0.5" /> Website
        </a>
        <a
          href="https://www.linkedin.com/in/aiden-estelle/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors flex items-center gap-1"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="inline-block mb-0.5" /> LinkedIn
        </a>
        <a
          href="https://github.com/aidenestelle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors flex items-center gap-1"
          aria-label="GitHub"
        >
          <FaGithub className="inline-block mb-0.5" /> GitHub
        </a>
        <a
          href="https://buymeacoffee.com/aidenestelle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors flex items-center gap-1"
          aria-label="Buy Me a Coffee"
        >
          <FaCoffee className="inline-block mb-0.5" /> Buy Me a Coffee
        </a>
      </div>
      <div className="text-xs text-center opacity-70">
        &copy; {new Date().getFullYear()} Aiden Estelle
      </div>
    </footer>
  );
}
