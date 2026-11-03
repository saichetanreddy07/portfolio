import { projectsSection } from '../../data/projects'
import { Chip } from '../ui'

interface ProjectTechListProps {
  technologies: readonly string[]
  label?: string
}

export function ProjectTechList({ technologies, label }: ProjectTechListProps) {
  return (
    <ul aria-label={label ?? projectsSection.technologiesLabel} className="flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <li key={technology}>
          <Chip>{technology}</Chip>
        </li>
      ))}
    </ul>
  )
}
