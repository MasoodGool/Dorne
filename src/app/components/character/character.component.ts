import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RavenService } from 'src/app/raven.service';
import { Character } from 'src/app/models/Characters';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character: Character[];

  @Input('parentData') public name: any;
  @Output() public characterEvent = new EventEmitter();
  public characters = [];
  public details = [];

  constructor(private _raven: RavenService) {}

  ngOnInit() {
    this._raven.getHistory().subscribe(data => (this.characters = data));
  }

  search() {
    console.log('We are searching');
    this.details = [];
    for (const char in this.characters) {
      if (this.characters[char].name === this.name) {
        this.details.push(this.characters[char].name);
        this.details.push(this.characters[char].house);
        this.details.push(this.characters[char].image);
        this.details.push(this.characters[char].titles);
        this.details.push(this.characters[char].actor);
        this.details.push(this.characters[char].allegiances);
      }
    }
    this.characterEvent.emit(this.details);
  }
}
