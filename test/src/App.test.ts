import calculateData from "../../src/App"

//Testing skus
//DTW874360/97/81
//LTV719449/39/39

describe('Stocklevel working',(): void=>{
   
    it('If given value not in records', async(): Promise<void> =>{
        const x= await calculateData("LTV719449/39/");
        expect(x).toBe(null);   
    }) 
    it('If stocks Empty after transactions',(): void=>{
        expect(calculateData("DTW874360/97/81")
        ).toEqual({"sku": "DTW874360/97/81", "stock": 0});
    })
    it('If give value it should calculate',(): void=>{
        expect(calculateData("LTV719449/39/39")
        ).toEqual({"sku": "LTV719449/39/39", "stock": 8510});
    })
    it('If give value it should give object',(): void=>{
        expect(typeof {calculateData: 'LTV719449/39/39'}).toBe('object');
    })
    it('following signature: (sku: string) => Promise<{ sku: string, qty: number }', async(): Promise<void> =>{
        const x= await calculateData("LTV719449/39/39");
        expect(x).toEqual({"sku":expect.any(String), "stock":expect.any(Number)});
    }) 
   
})