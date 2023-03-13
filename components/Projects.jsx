import estampitiency from '../public/assets/projects/estampitiency.jpg';
import cryptoImg from '../public/assets/projects/cryptoprice.png';
import simplecart from '../public/assets/projects/simplecart2.png';
import progressImg from '../public/assets/projects/progress.jpeg';
import aerolabImg from '../public/assets/projects/aerolab.png';
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
            title="Estampitiency"
            backgroundImg={estampitiency}
            projectUrl="/estampitiency"
          />
          <ProjectItem
            title="Crypto Price"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Simple Cart"
            backgroundImg={simplecart}
            projectUrl="/simplecart"
          />
          <ProjectItem
            title="Aerolab Challenge"
            backgroundImg={aerolabImg}
            projectUrl="/aerolab"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
