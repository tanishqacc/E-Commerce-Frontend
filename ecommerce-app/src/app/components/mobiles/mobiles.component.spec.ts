import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobilesComponent } from './mobiles.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';  // for creating mock observables
import { ProductService } from '../../services/product.service'; // Ensure to import ProductService
import { CartService } from 'src/app/services/cart.service';  // Ensure to import CartService

describe('MobilesComponent', () => {
  let component: MobilesComponent;
  let fixture: ComponentFixture<MobilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilesComponent ],
      providers: [
        ProductService,
        CartService,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ brand: 'Apple' })  // Mock queryParams observable
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
