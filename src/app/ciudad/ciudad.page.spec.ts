import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CiudadPage } from './ciudad.page';

describe('CiudadPage', () => {
  let component: CiudadPage;
  let fixture: ComponentFixture<CiudadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CiudadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
