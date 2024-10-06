import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/ProjectCardModel';
import { Tag } from '../_models/TagModel';
import { NgFor } from '@angular/common';
import { ProjectsService } from '../_services/projects-service';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  projects : Project[] = [];
  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Harsh Sharma - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
