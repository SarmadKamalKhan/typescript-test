import calculateData from "../../src/App"

//Testing skus
//DTW874360/97/81
//LTV719449/39/39

describe('Stock-level working',()=>{
    it('If given value not in records',()=>{
        expect(calculateData("LTV719449/39/")
        ).toBe("No Records");
    })
    it('If stocks Empty after transactions',()=>{
        expect(calculateData("DTW874360/97/81")
        ).toEqual({"sku": "DTW874360/97/81", "stock": 0});
    })
    it('If give value it should calculate',()=>{
        expect(calculateData("LTV719449/39/39")
        ).toEqual({"sku": "LTV719449/39/39", "stock": 8510});
    })
    it('If give value it should give object',()=>{
        expect(typeof {calculateData: 'LTV719449/39/39'}).toBe('object');
    })
    it('following signature: (sku: string) => Promise<{ sku: string, qty: number }',()=>{
        expect(calculateData("LTV719449/39/39")
        ).toEqual({"sku":expect.any(String), "stock":expect.any(Number)});
    })
   
})