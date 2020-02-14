import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoPaisPage } from './nuevo-pais.page';

describe('NuevoPaisPage', () => {
  let component: NuevoPaisPage;
  let fixture: ComponentFixture<NuevoPaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoPaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
