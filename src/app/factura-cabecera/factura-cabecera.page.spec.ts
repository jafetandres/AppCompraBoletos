import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacturaCabeceraPage } from './factura-cabecera.page';

describe('FacturaCabeceraPage', () => {
  let component: FacturaCabeceraPage;
  let fixture: ComponentFixture<FacturaCabeceraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaCabeceraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacturaCabeceraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
