import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevaProvinciaPage } from './nueva-provincia.page';

describe('NuevaProvinciaPage', () => {
  let component: NuevaProvinciaPage;
  let fixture: ComponentFixture<NuevaProvinciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaProvinciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevaProvinciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
