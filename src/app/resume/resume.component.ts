import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  constructor(private titleService: Title, private renderer : Renderer2){
    this.titleService.setTitle('Harsh Sharma - Resume')
  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'resume/HarshSharmaResume.pdf');
    link.setAttribute('download', 'HarshSharmaResume.pdf');
    link.click();
    link.remove();
  }
}
