import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  safeUrl!: SafeResourceUrl

  constructor(private sanitize: DomSanitizer) { }

  ngOnInit(): void {
  }


  sanitazeUrl(url:string): SafeResourceUrl{

    this.safeUrl = this.sanitize.bypassSecurityTrustResourceUrl(url)

    return this.safeUrl

  }

}
