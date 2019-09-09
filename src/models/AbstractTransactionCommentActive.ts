'use strict';


class AbstractTransactionCommentActive {

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
        return AbstractTransactionCommentActive.attributeTypeMap;
    }
}

export { AbstractTransactionCommentActive }
