import {INavigationService} from './navigation';

export class NavigationService implements INavigationService {

    private title: string;

    constructor(private $translate: ng.translate.ITranslateService) {
        'ngInject';
        // empty
    }

    public getCurrentScreenTitle = (): string => {
        return this.title;
    };

    public setCurrentScreenTitle = (titleLocale: string): void => {
        this.title =  this.$translate.instant(titleLocale);
    };
}
