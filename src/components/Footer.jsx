import { personalInfo } from '../data/portfolioData'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="glass footer-content">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. Crafted with React + Vite.
        </p>
      </div>
    </footer>
  )
}

export default Footer
