import { MemberEditComponent } from './../members/member-edit/member-edit.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class UnsavedChanges implements CanDeactivate<MemberEditComponent> {
    // tslint:disable-next-line: max-line-length
    canDeactivate(component: MemberEditComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot){
        if (component.editForm.dirty) {
            return confirm('Are you sure you ant to continue??? Any unsaved changes will be lost');
        }
        return true;

    }

}