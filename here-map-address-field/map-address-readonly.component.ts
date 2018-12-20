import { Component } from "@angular/core";
import { FieldBase } from "progress-sitefinity-adminapp-sdk/app/api/v1";

/**
 * The component used to display the field in read only mode.
 * One can use inline template & styles OR templateUrl & styleUrls OR a mixture of that.
 * See also the corespondign `...-write.component.ts` version.
 */
@Component({
    templateUrl: "./map-address-readonly.component.html",
    styleUrls: ["map-address-readonly.component.css"]
})
export class MapAddressReadonlyComponent extends FieldBase {

}
