import Profile from "@/components/resume/Profile";
import Introduce from "@/components/resume/Introduce";
import Skills from "@/components/resume/Skills";
import Careers from "@/components/resume/Careers";
import Projects from "@/components/resume/Projects";
import Awards from "@/components/resume/Awards";
import Community from "@/components/resume/Community";
import Educations from "@/components/resume/Educations";
import Certificates from "@/components/resume/Certificates";

const Home = () => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Profile />
      <Introduce />
      <Skills />
      <Careers />
      <Projects />
      <Awards />
      <Community />
      <Educations />
      <Certificates />
    </div>
  );
};

export default Home;
