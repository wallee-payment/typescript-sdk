'use strict';
import { AbstractWebhookUrlUpdate } from "./AbstractWebhookUrlUpdate";


class WebhookUrlCreate extends AbstractWebhookUrlUpdate {


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WebhookUrlCreate.attributeTypeMap);
    }
}

export { WebhookUrlCreate }
