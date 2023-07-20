'use strict';


class AbstractRefundCommentActive {

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
        return AbstractRefundCommentActive.attributeTypeMap;
    }
}

export { AbstractRefundCommentActive }
