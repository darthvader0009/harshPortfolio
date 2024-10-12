import { Injectable } from '@angular/core';
import { Project } from '../_models/ProjectCardModel';
import { Tag } from '../_models/TagModel';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Rite Aid Project',
      pictures: ['riteaid/image1.png', 'riteaid/image2.png', 'riteaid/image3.png'],
      projectLink: '//www.riteaid.com',
      summary:
        'AEM based website to schedule vaccines, refill prescritions etc.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.AEM, Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTL],
    },
    {
      id: 1,
      name: 'Ford UK Project',
      pictures: ['forduk/photo1.jpg', 'forduk/photo2.jpg', 'forduk/photo3.jpg'],
      projectLink: 'https://www.ford.co.uk/',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.JAVASCRIPT, Tag.CSS],
    },
    {
      id: 2,
      name: 'Infosys Training',
      pictures: ['training/GECMysore.jpg', 'training/class.jpg', 'training/theater.jpg'],
      projectLink: 'https://www.infosys.com/careers/graduates/global-education-center.html',
      summary:
        "Intensive training in world's largest training institute at Mysore",
      description:
        'The training was in two parts. First part was generic training, where we were subjected to basic fundamentals of programming including data structures, object oriented programming. The second part was stream training where I was specifically trained in MEAN stack. After finishing stream training, I was one of the few candidates who was selected for upskilling in Mangalore. I got trained in AEM there.',
      tags: [Tag.AEM, Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTL, Tag.NODEJS],
    }
  ];

  constructor() {}

  GetProjects() {
    return this.projects;
  }
  GetProjectById(id: number): Project {
    let projectById = this.projects.find((item) => item.id === id);
    if (projectById === undefined) {
      throw new TypeError('There is no project that matches the id ' + id);
    }
    return projectById;
  }

  GetProjectsByFilter (filterTags: Tag[]) {
    let filteredProjects: Project[] = [];
    this.projects.forEach(function (project){
      let foundAll = true;
      filterTags.forEach(function (filterTag){
      if (project.tags.includes(filterTag) == false){
        foundAll = false;
      }
     });
     if (foundAll){
      filteredProjects.push(project);
     }
    })
    return filteredProjects;
  }
}
