'use strict';
import { TerminalReceiptFormat } from "./TerminalReceiptFormat";


class PaymentTerminalTransactionSummaryFetchRequest {

        /**
        * The format determines in what format the receipt will be returned in.
        */
    'format': TerminalReceiptFormat;

        /**
        * The id of the transaction summary receipt whose content should be returned.
        */
    'summaryId': number;

        /**
        * The width controls how width the document will be rendered. In case of the PDF format the width is in mm. In case of the text format the width is in the number of chars per line.
        */
    'width'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "format",
        "baseName": "format",
        "type": "TerminalReceiptFormat"
        },
        
        {
        "name": "summaryId",
        "baseName": "summaryId",
        "type": "number"
        },
        
        {
        "name": "width",
        "baseName": "width",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentTerminalTransactionSummaryFetchRequest.attributeTypeMap;
    }
}

export { PaymentTerminalTransactionSummaryFetchRequest }
