import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualizarProvinciaPage } from './actualizar-provincia.page';

describe('ActualizarProvinciaPage', () => {
  let component: ActualizarProvinciaPage;
  let fixture: ComponentFixture<ActualizarProvinciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarProvinciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarProvinciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
