import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { CustomInputReadonlyComponent } from "./custom-field-readonly.component";
import { CustomInputWriteComponent } from "./custom-field-write.component";
import { CUSTOM_FIELDS_PROVIDER } from "./custom-fields-provider";
import { FrameworkModule } from "progress-sitefinity-adminapp-sdk/app/api/v1";

/**
 * The custom fields module.
 */
@NgModule({
    declarations: [
        CustomInputReadonlyComponent,
        CustomInputWriteComponent
    ],
    entryComponents: [
        // The components need to be registered here as they are instantiated dynamically.
        CustomInputReadonlyComponent,
        CustomInputWriteComponent
    ],
    providers: [
        CUSTOM_FIELDS_PROVIDER
    ],

    // import the framework module as it holds the components that the AdminApp uses
    // for a list of components see
    imports: [FormsModule, FrameworkModule]
})
export class CustomFieldsModule { }
