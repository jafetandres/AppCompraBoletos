import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProvinciaPage } from './provincia.page';

describe('ProvinciaPage', () => {
  let component: ProvinciaPage;
  let fixture: ComponentFixture<ProvinciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProvinciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
