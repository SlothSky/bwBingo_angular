class BuzzWord {
    _id: string;
    name: string;
    description: string;
    mdbId: number;

    constructor(pName: string, pDescription: string, pMdb: number,)
    {
        // TODO include data type check
        this.name = pName;
        this.description = pDescription;
        this.mdbId = pMdb;
    }
}

export default BuzzWord;
