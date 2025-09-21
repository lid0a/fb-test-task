import { observable, watchEffect } from '~/lib/voy';

export class DB {
  #name;
  #data;

  constructor(name) {
    this.#name = name;
    const data = localStorage.getItem(name);
    if (data) {
      this.#data = observable(JSON.parse(data));
    } else {
      this.#data = observable({
        projects: [],
      });
    }
    watchEffect(() => {
      localStorage.setItem(name, JSON.stringify(this.#data.value));
    });
  }

  getName() {
    return this.#name;
  }

  createProject({ name, description, startDate, endDate, priority }) {
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
    this.#data.value.projects.push(project);
  }

  getProjects() {
    return this.#data.value.projects;
  }

  getProject(id) {
    return (
      this.#data.value.projects.find((project) => project.id === id) ?? null
    );
  }

  updateProject(
    id,
    { name, description, startDate, endDate, priority, image },
  ) {
    const index = this.#data.value.projects.findIndex((p) => p.id === id);
    if (index === -1) {
      return false;
    }
    const project = this.getProjects()[index];
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
    this.#data.value.projects.splice(index, 1, project);
    return true;
  }

  deleteProject(id) {
    const index = this.#data.value.projects.findIndex((p) => p.id === id);
    if (index === -1) {
      return false;
    }
    this.#data.value.projects.splice(index, 1);
    return true;
  }
}

export const db = new DB('app_state_v1');
