import { ExternalLink } from 'components';
import { Project } from 'types';

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  const { name, description, features, technologies, links } = project;
  const { hosted, sourceCode } = links;

  const featuresListing = features.map((feature) => {
    return <li key={feature}>{feature}</li>;
  });

  const techStack = technologies.join(', ');

  return (
    <div className='mb-4'>
      <h3>
        <span className='font-semibold'>{name},</span>
        <a className='font-light text-blue-600' href={hosted} target='_blank'>
          <span>({description})</span>
          <ExternalLink />
        </a>
      </h3>
      <a className='font-semibold' href={sourceCode} target='_blank'>
        <span>source code</span>
        <ExternalLink />
      </a>
      <h3 className='font-semibold'>features-</h3>
      <ul className='list-disc pl-4'>{featuresListing}</ul>
      <h3>
        <span className='font-semibold'>tech stack - </span>
        <span>{techStack}</span>
      </h3>
    </div>
  );
};
