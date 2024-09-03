import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserClient } from '@api/api';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, AsyncPipe],
    providers: [UserClient],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'client';

    private userId = crypto.randomUUID();

    private readonly userClient = inject(UserClient);

    protected user$ = this.userClient.getUser(this.userId);
}
