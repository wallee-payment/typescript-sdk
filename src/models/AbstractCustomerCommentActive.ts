'use strict';


class AbstractCustomerCommentActive {

        /**
        * The comment's actual content.
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
        return AbstractCustomerCommentActive.attributeTypeMap;
    }
}

export { AbstractCustomerCommentActive }
