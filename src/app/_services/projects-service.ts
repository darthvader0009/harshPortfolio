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
        "During my time at Infosys, I was a key contributor to the development of the Rite Aid website, focusing on both client-side and server-side optimization. My role involved building and maintaining features such as the prescription refill system and the COVID-19 vaccination scheduler, ensuring a seamless user experience. I implemented custom AEM components integrated with HTML, jQuery, HandlebarJS, and CSS, enhancing the site's functionality and performance. I also worked closely with business stakeholders to align project deliverables with their requirements, contributing to over 50 successful releases. This project deepened my expertise in AEM 6.5 and solidified my understanding of agile development practices.",
      tags: [Tag.AEM, Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTL],
    },
    {
      id: 1,
      name: 'Ford UK Project',
      pictures: ['forduk/photo1.jpg', 'forduk/photo2.jpg', 'forduk/photo3.jpg'],
      projectLink: 'https://www.ford.co.uk/',
      summary: 'Website developed using AEM, React and Node.JS',
      description:
        'As part of the Infosys team, I contributed to the development and maintenance of the Ford UK website, which utilized Adobe Experience Manager (AEM) for content management and React for dynamic user interfaces. I assisted in integrating AEM components with React, ensuring smooth content delivery and enhancing user engagement. I also collaborated with cross-functional teams to ensure the consistency of the content across various pages, while adhering to Ford’s global brand guidelines.',
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
