import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Place } from '../../model/place';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit{
    private places: Array<Place>;
    private place: Place;

    constructor( private route: ActivatedRoute, private sanitizer: DomSanitizer ){
        this.places = [
            {
                id: 1,
                name: 'Sherlock Holmes',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                gps: {
                    lat: 44.841633,
                    lng: -0.581896,
                },
                picture: 'https://lh5.googleusercontent.com/p/AF1QipMMVjiC4dp6KK6ZuwSjT4y-1marO0D6HbMMX2EP=w408-h306-k-no',
                rate: 4.3,
                category: 'Pub',
                createdAt: '2019-07-01 16:20:00',
            },
            {
                id: 2,
                name: 'L\'Atomic',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                gps: {
                    lat: 50.631819,
                    lng: 3.053862,
                },
                picture: 'https://lh5.googleusercontent.com/p/AF1QipOWJN8K1vX6Y3gXxNK_b0d4S-rtswxtXensvpP7=w408-h306-k-no',
                rate: 4.5,
                category: 'Bar Rock',
                createdAt: '2019-07-01 16:20:00',
            },
            {
                id: 3,
                name: 'Couleurs Café',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                gps: {
                    lat: 48.117280,
                    lng: -1.683214,
                },
                picture: 'https://lh5.googleusercontent.com/p/AF1QipNyIeeh3sTOl7mWe3xRaX9xn3h5xTjFXO_EN0g2=w408-h544-k-no',
                rate: 4.6,
                category: 'Bar à rhum',
                createdAt: '2019-07-01 16:20:00',
            },
        ];
    }

    ngOnInit(){
        let id = this.route.snapshot.params['id'];

        for( let place of this.places ){
            if( place.id == id ){
                this.place = place;
            }
        }
    }
}
