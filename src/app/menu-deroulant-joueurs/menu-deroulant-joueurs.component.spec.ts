import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDeroulantJoueursComponent } from './menu-deroulant-joueurs.component';

describe('MenuDeroulantJoueursComponent', () => {
  let component: MenuDeroulantJoueursComponent;
  let fixture: ComponentFixture<MenuDeroulantJoueursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDeroulantJoueursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDeroulantJoueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
