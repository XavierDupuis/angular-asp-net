import { AppComponent } from './app.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('AppComponent', () => {
    let component: AppComponent;
    let spectator: Spectator<AppComponent>;
    const createComponent = createComponentFactory(AppComponent);

    beforeEach(async () => {
        spectator = createComponent();
        component = spectator.component;
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it(`should have the 'client' title`, () => {
        expect(component.title).toEqual('client');
    });

    it('should render title', () => {
        expect(spectator.query('h1')?.textContent).toContain('Hello, client');
    });
});
