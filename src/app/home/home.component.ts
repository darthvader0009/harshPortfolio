import { NgFor } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/ProjectCardModel';
import { ProjectsService } from '../_services/projects-service';
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectCardComponent, CarouselModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  featuredProject!: Project;
  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Harsh Sharma - Home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }
}
