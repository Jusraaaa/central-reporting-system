import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNavbarComponent } from './client-navbar.component';

describe('ClientNavbar', () => {
  let component: ClientNavbarComponent;
  let fixture: ComponentFixture<ClientNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
