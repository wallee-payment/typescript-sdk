'use strict';
import { PaymentTerminalReceiptType } from "./PaymentTerminalReceiptType";


class RenderedTerminalReceipt {

        /**
        * The receipt document data in binary format, presented as a Base64-encoded string.
        */
    'data'?: Array<string>;

        /**
        * The MIME type specifies the format of the receipt document and is determined by the requested format.
        */
    'mimeType'?: string;

        /**
        * Whether the terminal's configuration mandates printing and the device has receipt printing capabilities.
        */
    'printed'?: boolean;

        /**
        * The receipt type specifies the intended use and the target audience of the document.
        */
    'receiptType'?: PaymentTerminalReceiptType;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "data",
        "baseName": "data",
        "type": "Array<string>"
        },
        
        {
        "name": "mimeType",
        "baseName": "mimeType",
        "type": "string"
        },
        
        {
        "name": "printed",
        "baseName": "printed",
        "type": "boolean"
        },
        
        {
        "name": "receiptType",
        "baseName": "receiptType",
        "type": "PaymentTerminalReceiptType"
        }        
    ];

    static getAttributeTypeMap() {
        return RenderedTerminalReceipt.attributeTypeMap;
    }
}

export { RenderedTerminalReceipt }
