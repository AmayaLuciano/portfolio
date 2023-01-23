import Image from 'next/image';
import Link from 'next/link';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/cryptoprice.png';
import simplecart from '../public/assets/projects/simplecart2.png';
import twitchImg from '../public/assets/projects/twitch.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 text-center">
        <p className="text-xl tracking-widest uppercase text-[#719FB0]">
          Projects
        </p>
        <h2 className="py-4 dark:text-[#EEEEEE]">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Crypto Price App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Netflix clone"
            backgroundImg={simplecart}
            projectUrl="/simplecart"
          />
          <ProjectItem
            title="Tiwtch UI"
            backgroundImg={twitchImg}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
