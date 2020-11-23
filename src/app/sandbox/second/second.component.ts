import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, fromEvent} from 'rxjs';
import {DocumentEvent} from '../../shared/helpers/document-event';

// declare const $: any;

declare function brBaInit($smoke: any): any;

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit, AfterViewInit {

  @ViewChild('breakingbad') breakingbadElement: ElementRef<HTMLElement>;
  @ViewChild('smoke') smokeCanvas: ElementRef<HTMLElement>;
  private audio;
  private _audioTracker: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    // NOOP
  }

  ngOnInit() {
    // brBaInit($('#smoke'));
    // console.log('jq canvas: ', $('#smoke').get(0));
  }

  loadAudio() {
    if (this.audio === undefined) {
      this.audio = new Audio();
      this.audio.src = 'http://timpietrusky.com/cdn/breaking_bad_intro.mp3';
      this.audio.load();
    }
  }

  get audioTracker(): boolean {
    return this._audioTracker.getValue();
  }

  ngAfterViewInit(): void {
    brBaInit(this.smokeCanvas.nativeElement);
    // console.log('ang canvas: ', this.smokeCanvas);

    const brBaElement$ = fromEvent<any>(this.breakingbadElement.nativeElement, DocumentEvent.CLICK);
    brBaElement$.subscribe(() => this.toggleAudio());
  }

  private toggleAudio() {
    this.loadAudio();
    this.audioTracker ? this.audio.pause() : this.audio.play();
    this._audioTracker.next(!this.audioTracker);
  }
}
