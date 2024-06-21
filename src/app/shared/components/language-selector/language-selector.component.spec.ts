// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatIconModule } from '@angular/material/icon';
// import { MatSelectModule } from '@angular/material/select';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LanguageSelectorComponent } from './language-selector.component';
// import { MatOptionModule } from '@angular/material/core';
// import { FormsModule } from '@angular/forms';
//
// describe('LanguageSelectorComponent', () => {
//   let component: LanguageSelectorComponent;
//   let fixture: ComponentFixture<LanguageSelectorComponent>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [LanguageSelectorComponent],
//       imports: [
//         MatFormFieldModule,
//         MatSelectModule,
//         MatOptionModule,
//         MatIconModule,
//         FormsModule,
//         BrowserAnimationsModule,
//       ],
//     }).compileComponents();
//   });
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(LanguageSelectorComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//
//   it('should emit languageChanged event on language change', () => {
//     spyOn(component.languageChanged, 'emit');
//     const selectedLanguage = component.languages[1]; // Simulating selection of the second language
//     component.onLanguageChange(selectedLanguage);
//     expect(component.languageChanged.emit).toHaveBeenCalledWith(
//       selectedLanguage,
//     );
//   });
// });
