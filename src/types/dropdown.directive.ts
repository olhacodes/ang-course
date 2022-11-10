import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]',
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleDropDown() {
    this.isOpen = !this.isOpen;
  }
  @HostListener('focusout') closeDropDown() {
    this.isOpen = false;
  }
}
