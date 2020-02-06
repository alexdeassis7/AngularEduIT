import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-image-details',
    templateUrl: './image-details.component.html',
    styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
    image: any

    constructor(private ImagesService: ImagesService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.image = this.ImagesService.getImage(
            this.route.snapshot.params['id']
        )
    }

}