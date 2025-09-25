import { db } from './setup';

export function createProject({
  name,
  description,
  startDate,
  endDate,
  priority,
}) {
  const project = {
    id: crypto.randomUUID(),
    name,
    description,
    startDate,
    endDate,
    priority,
    tasks: [],
    createdAt: Date.now(),
    updatedAt: null,
  };
  db.getData().projects.push(project);
}

export function getProjects() {
  return db.getData().projects;
}

export function getProject(id) {
  return db.getData().projects.find((project) => project.id === id) ?? null;
}

export function updateProject(
  id,
  { name, description, startDate, endDate, priority, image },
) {
  const index = db.getData().projects.findIndex((p) => p.id === id);
  if (index === -1) {
    return false;
  }
  const project = db.getData().projects[index];
  if (name) {
    project.name = name;
  }
  if (description) {
    project.description = description;
  }
  if (startDate) {
    project.startDate = startDate;
  }
  if (endDate) {
    project.endDate = endDate;
  }
  if (priority) {
    project.priority = priority;
  }
  if (image) {
    project.image = image;
  }
  project.updatedAt = Date.now();
  db.getData().projects.splice(index, 1, project);
  return true;
}

export function deleteProject(id) {
  const index = db.getData().projects.findIndex((p) => p.id === id);
  if (index === -1) {
    return false;
  }
  db.getData().projects.splice(index, 1);
  return true;
}
