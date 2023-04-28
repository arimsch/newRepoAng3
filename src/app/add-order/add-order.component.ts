import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CountriesService } from '../shared/services/countries.service';
import { Country } from '../shared/classes/country';
import { TYPE_MAIL, ValidatorsLength } from './validators-params';
import { TuiValidationError } from '@taiga-ui/cdk';
import { TextErrors } from './error-messages-text';
import { BasketService } from '../shared/services/basket.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddOrderComponent implements OnInit {
  public formOrder!: FormGroup;
  public countries: Country[] = [];

  constructor(
    private readonly basketService: BasketService,
    private readonly countriesService: CountriesService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildWalletForm();
    this.countriesService
      .fetchCountries()
      .subscribe(data =>
        data.forEach(el =>
          this.countries.push(
            new Country(
              el.name.common,
              Object.keys(el.currencies)[0],
              Object.values(el.currencies)[0]?.symbol
            )
          )
        )
      );
  }

  public get _mail(): AbstractControl | null {
    return this.formOrder.get('mail');
  }

  public get computedErrorMailInput(): TuiValidationError | null {
    if ((this._mail?.dirty || this._mail?.touched) && this._mail?.errors) {
      return this.makeMessageError(this._mail?.errors);
    }
    return null;
  }

  public countryChange(selectedCountry: Country | null): void {
    if (selectedCountry) {
      this.basketService.updateCountry(selectedCountry);
    }
  }

  public submit(): void {
    this.formOrder.reset();
  }

  private makeMessageError(
    errorObj: ValidationErrors
  ): TuiValidationError | null {
    const errorType = Object.keys(errorObj)[0];
    switch (errorType) {
      case 'pattern': {
        if (errorObj['pattern'].requiredPattern === `${TYPE_MAIL}`) {
          return new TuiValidationError(TextErrors.FALSE_MAIL);
        }
        break;
      }
      case 'required': {
        return new TuiValidationError(TextErrors.REQUIRED);
      }
      case 'maxlength': {
        return new TuiValidationError(
          TextErrors.MAX_LENGTH + errorObj['maxlength'].requiredLength
        );
      }
    }
    return null;
  }

  private buildWalletForm(): void {
    this.formOrder = this.fb.group({
      name: [null, [Validators.required]],
      mail: [
        null,
        [
          Validators.required,
          Validators.maxLength(ValidatorsLength.MAX_LENGTH_MAIL),
          Validators.pattern(TYPE_MAIL),
        ],
      ],
      adress: [null, [Validators.required]],
      country: [''],
    });
  }
}
