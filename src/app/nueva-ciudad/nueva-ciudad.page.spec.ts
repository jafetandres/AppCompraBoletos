import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevaCiudadPage } from './nueva-ciudad.page';

describe('NuevaCiudadPage', () => {
  let component: NuevaCiudadPage;
  let fixture: ComponentFixture<NuevaCiudadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaCiudadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevaCiudadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
