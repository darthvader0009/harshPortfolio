import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/ProjectCardModel';
import { Tag } from '../_models/TagModel';
import { NgFor } from '@angular/common';
import { ProjectsService } from '../_services/projects-service';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, NgFor, CollapseModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  projects : Project[] = [];
  isCollapsed : boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  aem: boolean = false;
  html:boolean = false;
  react:boolean = false;
  java:boolean = false;
  css:boolean = false;
  filtering: Boolean = false;


  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Harsh Sharma - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags : Tag[] = [];
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.aem){
      filterTags.push(Tag.AEM);
    }
    if(this.html){
      filterTags.push(Tag.HTML);
    }
    if(this.react){
      filterTags.push(Tag.REACT);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.css){
      filterTags.push(Tag.CSS);
    }
    if (this.typescript || this.angular || this.aem || this.react || this.java || this.css ){
      this.filtering = true;
    }
    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters(){
    this.typescript = false;
    this.angular = false;
    this.aem = false;
    this.html = false;
    this.react = false;
    this.java = false;
    this.css = false;
    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }
}
