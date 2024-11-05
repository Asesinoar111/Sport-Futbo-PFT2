import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  Email: string = '';
  EnviarEmail(): void {
    this.Email = '';
    alert('Email enviado con éxito');
  }
}
