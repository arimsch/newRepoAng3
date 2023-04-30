import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Item } from '../shared/models/item';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tuiInputCountOptionsProvider } from '@taiga-ui/kit';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiInputCountOptionsProvider({
      icons: {
        up: 'tuiIconChevronUp',
        down: 'tuiIconChevronDown',
      },
      appearance: 'secondary',
      step: 1,
      min: 1,
    }),
  ],
})
export class ItemCardComponent {
  @Input()
  public item!: Item;

  @Input()
  public elUpdate!: boolean;

  @Output()
  public add = new EventEmitter<Item>();

  @Output()
  public update = new EventEmitter<Item>();

  public countForm = new FormGroup({
    count: new FormControl(1, Validators.required),
  });

  public addItem(): void {
    if (this.elUpdate) {
      this.update.emit({
        ...this.item,
        count: this.countForm.get('count')?.value || 1,
      });
    } else {
      this.add.emit({
        ...this.item,
        count: this.countForm.get('count')?.value || 1,
      });
    }
  }
}
