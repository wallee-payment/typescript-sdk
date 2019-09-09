'use strict';


class AbstractRefundCommentActive {

        /**
        * 
        */
    'content'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "content",
        "baseName": "content",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractRefundCommentActive.attributeTypeMap;
    }
}

export { AbstractRefundCommentActive }
