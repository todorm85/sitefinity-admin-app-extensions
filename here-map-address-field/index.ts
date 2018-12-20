import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MapAddressReadonlyComponent } from "./map-address-readonly.component";
import { MapAddressWriteComponent } from "./map-address-write.component";
import { CUSTOM_FIELDS_PROVIDER } from "./map-address-provider";
import { FrameworkModule } from "progress-sitefinity-adminapp-sdk/app/api/v1";

/**
 * The custom fields module.
 */
@NgModule({
    declarations: [
        MapAddressReadonlyComponent,
        MapAddressWriteComponent
    ],
    entryComponents: [
        // The components need to be registered here as they are instantiated dynamically.
        MapAddressReadonlyComponent,
        MapAddressWriteComponent
    ],
    providers: [
        CUSTOM_FIELDS_PROVIDER
    ],

    // import the framework module as it holds the components that the AdminApp uses
    // for a list of components see
    imports: [FormsModule, FrameworkModule]
})
export class MapAddressModule { }
