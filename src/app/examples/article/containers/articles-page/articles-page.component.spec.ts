import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesPageComponent } from './articles-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ArticlesPageComponent', () => {
  let component: ArticlesPageComponent;
  let fixture: ComponentFixture<ArticlesPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ArticlesPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
