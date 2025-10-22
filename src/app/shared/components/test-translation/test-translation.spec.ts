import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTranslation } from './test-translation';

describe('TestTranslation', () => {
  let component: TestTranslation;
  let fixture: ComponentFixture<TestTranslation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTranslation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTranslation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
