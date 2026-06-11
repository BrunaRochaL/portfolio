// Stylized "<br/>" wordmark — gradient brackets, metallic "br" and a blinking
// terminal caret. Used in the Header, MobileNav and Footer (keep them in sync).
const Logo = () => {
  return (
    <span className="group flex w-fit items-center gap-2 px-3 py-1.5 border border-white/20 rounded-full bg-white/10 backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 border border-accent/30 text-accent font-bold text-lg shadow-[0_0_12px_rgba(183,156,255,0.4)] transition-transform duration-300 group-hover:-translate-x-1">
        &lt;
      </span>
      <span className="font-mono font-bold text-2xl tracking-wide text-metal pb-[2px]">
        br
      </span>
      <span className="flex items-center justify-center h-8 px-2 rounded-full bg-accent2/10 border border-accent2/30 text-accent2 font-bold text-lg shadow-[0_0_12px_rgba(108,184,246,0.4)] transition-transform duration-300 group-hover:translate-x-1">
        /&gt;
      </span>
    </span>
  );
};

export default Logo;
