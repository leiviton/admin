import { Component, OnInit } from '@angular/core';
import { ColorsService, ThemeColor } from '@app/core';
import { faComment, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import {
    faFacebook,
    faGoogle,
    faTwitter,
    faLinkedin,
    faPinterest,
    faGit,
    faTumblr,
    faVimeo,
    faYoutube,
    faFlickr,
    faReddit,
    faDribbble,
    faSkype,
    faInstagram,
    faLastfm,
    faSoundcloud,
    faBehance,
    faMedium,
    faSpotify,
    faQuora,
    faXing,
    faSnapchat,
    faTelegram,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'prx-ui-buttons',
    templateUrl: './ui-buttons.component.html',
    styleUrls: ['./ui-buttons.component.scss']
})
export class UiButtonsComponent implements OnInit {
    colors: ThemeColor[];
    icons = {
        comment: faComment,
        thumbsUp: faThumbsUp
    };

    sizes: string[] = ['xs', 'sm', 'md', 'lg', 'xl'];
    brands: any[] = [
        { name: 'facebook', icon: faFacebook },
        { name: 'google', icon: faGoogle },
        { name: 'twitter', icon: faTwitter },
        { name: 'linkedin', icon: faLinkedin },
        { name: 'pinterest', icon: faPinterest },
        { name: 'git', icon: faGit },
        { name: 'tumblr', icon: faTumblr },
        { name: 'vimeo', icon: faVimeo },
        { name: 'youtube', icon: faYoutube },
        { name: 'flickr', icon: faFlickr },
        { name: 'reddit', icon: faReddit },
        { name: 'dribbble', icon: faDribbble },
        { name: 'skype', icon: faSkype },
        { name: 'instagram', icon: faInstagram },
        { name: 'lastfm', icon: faLastfm },
        { name: 'soundcloud', icon: faSoundcloud },
        { name: 'behance', icon: faBehance },
        { name: 'medium', icon: faMedium },
        { name: 'spotify', icon: faSpotify },
        { name: 'quora', icon: faQuora },
        { name: 'xing', icon: faXing },
        { name: 'snapchat', icon: faSnapchat },
        { name: 'telegram', icon: faTelegram },
        { name: 'whatsapp', icon: faWhatsapp }
    ];

    constructor(private _colors: ColorsService) {
        this.colors = this._colors.ThemeColors;
    }

    ngOnInit() {}
}
