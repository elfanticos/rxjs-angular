import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { map, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-shar-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {
  beginnerCourses$: Observable<any[]>;
  advancedCourses$: Observable<any[]>;
  constructor(
    private _appService: AppService
  ) { }

  ngOnInit(): void {
    const http$: Observable<any[]> = this._appService.courses();
    const courses$ = http$
      .pipe(
        tap( res => console.log('entre hacer http')),
        map(res => Object.values(res)),
        shareReplay()
      );

    courses$.subscribe();

    this.beginnerCourses$ = courses$
    .pipe(
      map(courses => courses)
    );

    this.advancedCourses$ = courses$
    .pipe(
      map(courses => courses)
    );
  }

}
