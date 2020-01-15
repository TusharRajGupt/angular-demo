import { RestService } from 'src/app/rest.service';
import { Component, OnInit, Input, SkipSelf, Self, Optional } from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
    providers: [RestService],
})
export class ItemComponent implements OnInit {

    @Input() user;

    constructor(@SkipSelf() @Optional() private rs: RestService) { }

    ngOnInit() {
        // console.log(this.user);
        console.log(this.rs);
    }

}
