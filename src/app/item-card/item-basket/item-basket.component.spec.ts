import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBasketComponent } from './item-basket.component';

describe('ItemBasketComponent', () => {
  let component: ItemBasketComponent;
  let fixture: ComponentFixture<ItemBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemBasketComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
