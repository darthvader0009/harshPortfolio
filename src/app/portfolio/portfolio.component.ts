import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../models/ProjectCardModel';
import { Tag } from '../models/TagModel';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  project: Project = {
    id: 0,
    name: "Sample Angular App",
    summary: "Test Description",
    description: '',
    projectLink:'',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    pictures: []
  }
  constructor(private titleService: Title){
    this.titleService.setTitle('Harsh Sharma - Portfolio');
  }
}
