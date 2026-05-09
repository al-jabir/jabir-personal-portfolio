import { FiArrowLeft } from "react-icons/fi";
import { MagneticButton } from "../components/MagneticButton";

export default function NotFound() {
  return (
    <section className="section-wrap grid min-h-screen place-items-center pt-32 text-center">
      <div>
        <span className="eyebrow">404</span>
        <h1 className="section-title">This page is off the canvas.</h1>
        <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-300 light:text-slate-700">
          The route you opened does not exist in this portfolio. Head back to the homepage and keep exploring.
        </p>
        <div className="mt-8 flex justify-center">
          <MagneticButton href="/">
            <FiArrowLeft /> Back Home
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
