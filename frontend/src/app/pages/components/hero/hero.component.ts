import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatHint, MatInput, MatLabel, MatSuffix } from '@angular/material/input';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-hero',
  imports: [FormsModule, MatIconButton, MatFormField, MatInput, MatSuffix, MatIconModule, MatButton, MatMenu, MatMenuTrigger, MatMenuItem],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  title="Welcome to Vocabulary Builder";
  description="A simple app to help you learn new words and their meanings.";
  searchTerm ="";
}
