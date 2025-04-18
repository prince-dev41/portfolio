import AboutSection from '@/components/About';
import EducationSection from '@/components/Education';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/Skills';

export default function Home() {
  return (
    <div className="flex flex-col gap-6 justify-center">
     <AboutSection/>
     <ExperienceSection/>
     <SkillsSection/>
     <EducationSection/>
    </div>
  );
}
