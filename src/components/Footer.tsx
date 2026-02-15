import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-10 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xs">C</span>
              </div>
              <span className="font-display font-semibold text-lg">Cambridge Academic Consulting</span>
            </div>
            <p className="text-sm opacity-60 max-w-sm">
              Premium college admissions consulting with unlimited support and a results guarantee.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/apply" className="opacity-70 hover:opacity-100 transition-opacity">Apply</Link>
              <a href="/#process" className="opacity-70 hover:opacity-100 transition-opacity">Process</a>
              <a href="/#results" className="opacity-70 hover:opacity-100 transition-opacity">Results</a>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a href="/#founder" className="opacity-70 hover:opacity-100 transition-opacity">About</a>
              <a href="/#faq" className="opacity-70 hover:opacity-100 transition-opacity">FAQ</a>
              <a href="mailto:contact@cambridgecollegeconsulting.com" className="opacity-70 hover:opacity-100 transition-opacity">Contact</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <span>© {new Date().getFullYear()} Cambridge Academic Consulting. All rights reserved.</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
