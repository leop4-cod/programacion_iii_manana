import TwNavbar from "../components/tw/TwNavbar";
import CourseHero from "../components/tw/CourseHero";
import CourseModules from "../components/tw/CourseModules";
import CourseCTA from "../components/tw/CourseCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <TwNavbar />
      <main>
        <CourseHero />
        <CourseModules />
        <CourseCTA />
      </main>
    </div>
  );
}